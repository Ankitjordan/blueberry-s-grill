import {
	createUIMessageStream,
	createUIMessageStreamResponse,
	generateId,
} from "ai";

const GO_BACKEND = `${process.env.NEXT_PUBLIC_BACKEND_URL}/agents/chat`;

// ─── Go backend SSE shapes ────────────────────────────────────────────────────

interface GoEvent {
	type: "step" | "text" | "action" | "done" | "error";
	data: unknown;
}

async function* parseGoSSE(res: Response): AsyncGenerator<GoEvent> {
	const reader = res.body?.getReader();
	if (!reader) return;
	const dec = new TextDecoder();
	let buf = "";

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		buf += dec.decode(value, { stream: true });
		const lines = buf.split("\n");
		buf = lines.pop() ?? "";
		for (const line of lines) {
			const t = line.trim();
			if (!t.startsWith("data:")) continue;
			const raw = t.slice(5).trim();
			if (!raw) continue;
			try {
				yield JSON.parse(raw) as GoEvent;
			} catch {
				// skip malformed
			}
		}
	}
}

// ─── Route ────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
	const { message } = (await req.json()) as { message?: string };

	if (!message?.trim()) {
		return new Response(JSON.stringify({ error: "message required" }), {
			status: 400,
		});
	}

	// Forward to Go backend
	let goRes: Response;
	try {
		goRes = await fetch(GO_BACKEND, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message: message.trim() }),
		});
	} catch {
		return new Response(JSON.stringify({ error: "Backend unreachable" }), {
			status: 502,
		});
	}

	if (!goRes.ok) {
		return new Response(
			JSON.stringify({ error: `Backend responded ${goRes.status}` }),
			{ status: goRes.status },
		);
	}

	// Stream conversion: Go SSE ──▶ AI SDK v5 UIMessageStream
	return createUIMessageStreamResponse({
		stream: createUIMessageStream({
			execute: async ({ writer }) => {
				const textId = generateId();
				let textOpen = false;

				try {
					for await (const ev of parseGoSSE(goRes)) {
						switch (ev.type) {
							case "text": {
								const { content } = ev.data as { content: string };
								if (!textOpen) {
									writer.write({ type: "text-start", id: textId });
									textOpen = true;
								}
								writer.write({
									type: "text-delta",
									id: textId,
									delta: content,
								});
								break;
							}
							case "step":
								// custom data-step part, read in frontend via onData
								writer.write({
									type: "data-step",
									data: ev.data as { step: string; status: string },
								});
								break;
							case "action":
								writer.write({
									type: "data-action",
									data: ev.data as {
										tool: string;
										params: Record<string, string>;
									},
								});
								break;
							case "error": {
								if (textOpen) writer.write({ type: "text-end", id: textId });
								writer.write({
									type: "error",
									errorText:
										(ev.data as { message: string }).message ?? "Unknown error",
								});
								return;
							}
							case "done":
								break;
						}
					}
				} finally {
					if (textOpen) writer.write({ type: "text-end", id: textId });
				}
			},
		}),
	});
}
