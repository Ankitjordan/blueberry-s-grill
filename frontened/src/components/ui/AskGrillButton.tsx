"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Chat, useChat } from "@ai-sdk/react";
import {
  DefaultChatTransport,
  isTextUIPart,
  type UIMessage,
  type UIDataTypes,
  type DataUIPart,
} from "ai";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import {
  IoClose,
  IoSend,
  IoSparkles,
  IoCheckmarkCircle,
  IoNavigate,
  IoEllipsisHorizontal,
  IoWarning,
  IoRefresh,
} from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";

// ─── Custom data part types ────────────────────────────────────────────────────

interface StepData {
  step: string;
  status: "active" | "done" | "pending";
}

interface ActionData {
  tool: string;
  params: Record<string, string>;
}

// Tell the AI SDK about our custom data part names and shapes
type AppDataTypes = UIDataTypes & {
  step: StepData;
  action: ActionData;
};

// Our full message type
type AppMessage = UIMessage<unknown, AppDataTypes>;

// ─── Helpers ───────────────────────────────────────────────────────────────────

const WELCOME =
  "Welcome to Blueberry's Grill! I'm your AI Concierge — ask me anything about our menu, dishes, or hours. I can also navigate you to any section of the site. How may I help?";

function renderMd(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-extrabold text-[#D4AF37] tracking-tight">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function getTextFromMessage(msg: AppMessage): string {
  return msg.parts
    .filter(isTextUIPart)
    .map((p) => p.text)
    .join("");
}

// ─── Component ─────────────────────────────────────────────────────────────────

export const AskGrillButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Per-message agent workflow state
  const [messageSteps, setMessageSteps] = useState<Record<string, StepData[]>>(
    {},
  );
  const [messageActions, setMessageActions] = useState<
    Record<string, ActionData>
  >({});

  const wrapperRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // The id of the assistant message currently being streamed
  const streamingMsgIdRef = useRef<string | null>(null);
  // Track which actions have already been fired
  const firedActionsRef = useRef<Set<string>>(new Set());

  const router = useRouter();
  const pathname = usePathname();

  // ─── onData: receives custom data-step / data-action parts ────────
  const handleData = useCallback((part: DataUIPart<AppDataTypes>) => {
    const id = streamingMsgIdRef.current;
    if (!id) return;

    if (part.type === "data-step") {
      const stepData = part.data as StepData;
      setMessageSteps((prev) => {
        const existing = prev[id] ?? [];
        const idx = existing.findIndex((s) => s.step === stepData.step);
        const next = [...existing];
        if (idx >= 0) next[idx] = stepData;
        else next.push(stepData);
        return { ...prev, [id]: next };
      });
    } else if (part.type === "data-action") {
      const actionData = part.data as ActionData;
      setMessageActions((prev) => ({ ...prev, [id]: actionData }));
    }
  }, []);

  // ─── Stable Chat instance ──────────────────────────────────────────
  const chat = useMemo(
    () =>
      new Chat<AppMessage>({
        transport: new DefaultChatTransport<AppMessage>({
          api: "/api/agent",
          // Map our { message } body format
          prepareSendMessagesRequest: async ({ messages }) => {
            const last = messages[messages.length - 1];
            const text = last ? getTextFromMessage(last as AppMessage) : "";
            // body must be a plain object — the transport serialises it to JSON
            return {
              body: { message: text } as unknown as object,
              headers: { "Content-Type": "application/json" },
            };
          },
        }),
        onData: handleData,
        onError: (err) => console.error("[AskGrill] error:", err),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const { messages, sendMessage, status, error, regenerate } =
    useChat<AppMessage>({ chat });

  const isStreaming = status === "streaming" || status === "submitted";

  // Track which assistant message is being streamed
  useEffect(() => {
    if (!isStreaming) return;
    const last = messages[messages.length - 1];
    if (last?.role === "assistant") {
      streamingMsgIdRef.current = last.id;
    }
  }, [messages, isStreaming]);

  // ─── Execute navigation actions ────────────────────────────────────
  const executeAction = useCallback(
    (action: ActionData) => {
      switch (action.tool) {
        case "navigate_to_page": {
          const page = action.params.page;
          if (page && page !== pathname)
            setTimeout(() => router.push(page), 600);
          break;
        }
        case "scroll_to_section": {
          const section = action.params.section;
          const map: Record<string, string> = {
            "explore-food": ".w-full.bg-black",
            testimonials: '[aria-labelledby="testimonials-heading"]',
          };
          const doScroll = () =>
            document
              .querySelector(map[section])
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          if (pathname === "/") setTimeout(doScroll, 600);
          else {
            router.push("/");
            setTimeout(doScroll, 1800);
          }
          break;
        }
      }
    },
    [pathname, router],
  );

  // Fire action once per message
  useEffect(() => {
    for (const [id, action] of Object.entries(messageActions)) {
      if (!firedActionsRef.current.has(id)) {
        firedActionsRef.current.add(id);
        executeAction(action);
      }
    }
  }, [messageActions, executeAction]);

  // ─── Mount ─────────────────────────────────────────────────────────
  useEffect(() => setMounted(true), []);

  // ─── GSAP FAB entrance & float ─────────────────────────────────────
  useEffect(() => {
    if (!mounted || !wrapperRef.current) return;
    const el = wrapperRef.current;
    gsap.fromTo(
      el,
      { scale: 0, y: 50, opacity: 0 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)",
        delay: 0.8,
      },
    );
    const float = gsap.to(el, {
      y: "-=6",
      duration: 2.4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      paused: true,
    });
    const t = setTimeout(() => float.play(), 2000);
    return () => {
      clearTimeout(t);
      float.kill();
    };
  }, [mounted]);

  // ─── Auto-scroll ───────────────────────────────────────────────────
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ─── Focus input on open ───────────────────────────────────────────
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  // ─── Send handler ──────────────────────────────────────────────────
  const handleSend = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();
      if (!inputValue.trim() || isStreaming) return;
      sendMessage({
        role: "user",
        parts: [{ type: "text", text: inputValue.trim() }],
      });
      setInputValue("");
    },
    [inputValue, isStreaming, sendMessage],
  );

  if (!mounted) return null;

  return (
    <>
      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[9999] w-[675px] max-w-[calc(100vw-32px)] h-[660px] max-h-[85vh] flex flex-col bg-[#080808]/95 backdrop-blur-xl border border-white/10 rounded-[28px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_50px_rgba(212,175,55,0.04)] overscroll-contain"
            data-lenis-prevent="true"
          >
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#D4AF37]/5 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute bottom-12 left-0 w-[200px] h-[200px] bg-[#3e56ad]/5 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-5 border-b border-white/[0.06] bg-black/40 relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 p-1 flex items-center justify-center">
                  <img
                    src="/favIcon.svg"
                    alt="Grill Icon"
                    className="w-6 h-6 object-contain"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#080808]" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#D4AF37] block mb-0.5 leading-none">
                    AI Powered
                  </span>
                  <h2 className="text-sm font-black uppercase tracking-[0.1em] text-white">
                    Grill Concierge
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Close Chat"
              >
                <IoClose size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-6 py-6 space-y-5 relative z-10 chat-scrollbar overscroll-contain"
              data-lenis-prevent="true"
            >
              {/* Static welcome bubble */}
              <div className="flex justify-start">
                <div className="w-full max-w-[85%] px-5 py-3.5 rounded-[20px] rounded-tl-sm text-sm leading-relaxed bg-white/[0.03] text-gray-300 border border-white/[0.06]">
                  <p>{WELCOME}</p>
                  <span className="text-[9px] block mt-1.5 opacity-40 uppercase font-black tracking-widest text-white/40">
                    Now
                  </span>
                </div>
              </div>

              {/* Conversation messages */}
              {(messages as AppMessage[]).map((msg, idx) => {
                const isUser = msg.role === "user";
                const isLastMsg = idx === messages.length - 1;
                const msgIsStreaming = isStreaming && !isUser && isLastMsg;
                const steps = messageSteps[msg.id] ?? [];
                const action = messageActions[msg.id] ?? null;
                const text = getTextFromMessage(msg);

                return (
                  <div
                    key={msg.id}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[85%] ${isUser ? "" : "w-full"}`}>
                      {/* Agent workflow steps (bot only) */}
                      {!isUser && steps.length > 0 && (
                        <AgentStepsUI steps={steps} action={action} />
                      )}

                      {/* Message bubble */}
                      {isUser ? (
                        <div className="px-5 py-3.5 rounded-[20px] rounded-tr-sm text-sm leading-relaxed bg-[#D4AF37] text-black font-semibold shadow-[0_4px_15px_rgba(212,175,55,0.15)]">
                          <p>{text}</p>
                          <span className="text-[9px] block mt-1.5 opacity-40 uppercase font-black tracking-widest text-black/60 text-right">
                            {new Date().toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      ) : (
                        <div className="px-5 py-3.5 rounded-[20px] rounded-tl-sm text-sm leading-relaxed bg-white/[0.03] text-gray-300 border border-white/[0.06]">
                          <p>
                            {renderMd(text)}
                            {/* Blinking cursor while streaming */}
                            {msgIsStreaming && (
                              <span className="inline-block w-0.5 h-4 bg-[#D4AF37] animate-pulse ml-0.5 align-text-bottom" />
                            )}
                          </p>
                          {!msgIsStreaming && text && (
                            <span className="text-[9px] block mt-1.5 opacity-40 uppercase font-black tracking-widest text-white/40">
                              {new Date().toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Thinking indicator — shown before first bot token arrives */}
              {isStreaming &&
                (messages.length === 0 ||
                  messages[messages.length - 1].role === "user") && (
                  <div className="flex justify-start">
                    <ThinkingIndicator />
                  </div>
                )}

              {/* Error bubble */}
              {error && (
                <div className="flex justify-start">
                  <div className="w-full max-w-[85%]">
                    <ErrorBubble
                      message={
                        error.message.includes("fetch")
                          ? "Can't reach the server. Is the backend running?"
                          : error.message ||
                            "Something went wrong. Please try again."
                      }
                      onRetry={() => regenerate()}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex-shrink-0 px-6 py-5 border-t border-white/[0.06] bg-black/40 relative z-10">
              <form
                onSubmit={handleSend}
                className="relative flex items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    isStreaming
                      ? "Agent is thinking..."
                      : "Ask about dishes, or say 'show me desserts'..."
                  }
                  disabled={isStreaming}
                  className="w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.04] border border-white/10 focus:border-[#D4AF37]/50 rounded-full pl-5 pr-14 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isStreaming}
                  className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    inputValue.trim() && !isStreaming
                      ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95"
                      : "bg-white/5 text-white/20 cursor-not-allowed"
                  }`}
                  aria-label="Send Message"
                >
                  <IoSend size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB ── */}
      <div
        ref={wrapperRef}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] pointer-events-none"
        style={{ opacity: 0 }}
      >
        <button
          onClick={() => setIsOpen((p) => !p)}
          className={`pointer-events-auto group relative flex items-center gap-3 px-6 py-4 rounded-full bg-[#0A0A0A]/90 backdrop-blur-md border transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.8)] cursor-pointer overflow-hidden ${
            isOpen
              ? "border-white/20 text-white"
              : "border-[#D4AF37]/35 text-white hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(214,175,55,0.25)] hover:scale-[1.03] active:scale-[0.97]"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          <div className="relative flex items-center justify-center">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="w-5 h-5 flex items-center justify-center text-[#D4AF37]"
              >
                <IoClose size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="logo"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="/favIcon.svg"
                  alt="Grill Logo"
                  className="w-5 h-5 object-contain"
                />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-[#0A0A0A]" />
              </motion.div>
            )}
          </div>
          <span className="font-sans text-[11px] font-black uppercase tracking-[0.25em] transition-colors duration-300 relative z-10 select-none">
            {isOpen ? "Close" : "Ask Grill"}
          </span>
          {!isOpen && (
            <IoSparkles className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] text-xs transition-colors duration-300 animate-[pulse_2s_infinite]" />
          )}
        </button>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .chat-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .chat-scrollbar::-webkit-scrollbar-track {
          background: #000;
          border-radius: 8px;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 8px;
          border: 1px solid #000;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #e5c048;
        }
        .chat-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d4af37 #000;
        }
      `}</style>
    </>
  );
};

// ─── Sub-components ────────────────────────────────────────────────────────────

function ThinkingIndicator() {
  return (
    <div className="w-full max-w-[85%] px-5 py-4 rounded-[20px] rounded-tl-sm bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <span className="text-xs text-white/30 font-medium">
        Grill Concierge is thinking...
      </span>
    </div>
  );
}

function ErrorBubble({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[20px] rounded-tl-sm overflow-hidden border border-amber-500/20 bg-amber-950/30"
    >
      <div className="flex items-start gap-3 px-4 pt-4 pb-2">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/15 flex items-center justify-center mt-0.5">
          <IoWarning size={14} className="text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400/80 mb-1">
            Something went wrong
          </p>
          <p className="text-sm text-amber-100/70 leading-relaxed">{message}</p>
        </div>
      </div>
      <div className="px-4 pb-3 flex justify-end">
        <button
          onClick={onRetry}
          className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400/70 hover:text-amber-400 transition-colors cursor-pointer"
        >
          <IoRefresh size={11} /> Try again
        </button>
      </div>
    </motion.div>
  );
}

function AgentStepsUI({
  steps,
  action,
}: {
  steps: StepData[];
  action: ActionData | null;
}) {
  return (
    <div className="mb-3">
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl rounded-tl-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-white/[0.04] flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
            <IoSparkles size={10} className="text-[#D4AF37]" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#D4AF37]/70">
            Agent Workflow
          </span>
        </div>
        <div className="px-4 py-3 space-y-2.5">
          {steps.map((step, i) => (
            <motion.div
              key={`${step.step}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex-shrink-0">
                {step.status === "done" ? (
                  <IoCheckmarkCircle
                    size={14}
                    className="text-emerald-400/80"
                  />
                ) : step.status === "active" ? (
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  </div>
                ) : (
                  <IoEllipsisHorizontal size={14} className="text-white/20" />
                )}
              </div>
              <span
                className={`text-xs font-semibold transition-colors duration-300 ${
                  step.status === "done"
                    ? "text-white/40 line-through decoration-white/10"
                    : step.status === "active"
                      ? "text-white/80"
                      : "text-white/20"
                }`}
              >
                {step.step}
              </span>
            </motion.div>
          ))}
          {action && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2 flex items-center gap-2 bg-[#D4AF37]/5 border border-[#D4AF37]/15 rounded-lg px-3 py-2"
            >
              <IoNavigate size={12} className="text-[#D4AF37]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]/80">
                {action.tool === "navigate_to_page"
                  ? `→ ${action.params.page}`
                  : action.tool === "scroll_to_section"
                    ? `↓ ${action.params.section}`
                    : action.tool}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
