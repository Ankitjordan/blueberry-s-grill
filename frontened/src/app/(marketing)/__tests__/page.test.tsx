import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MarketingPage from "../page";

// Mock all sub-components to isolate the page composition
vi.mock("../components/RetroHeader", () => ({
	RetroHeader: () => <header data-testid="retro-header" />,
}));

vi.mock("../components/RetroHero", () => ({
	RetroHero: () => <div data-testid="retro-hero" />,
}));

vi.mock("@/components/ui/MarqueeText", () => ({
	MarqueeText: ({ text }: { text: string }) => (
		<div data-testid="marquee-text">{text}</div>
	),
}));

vi.mock("../components/ChefsFavorites", () => ({
	ChefsFavorites: () => <div data-testid="chefs-favorites" />,
}));

vi.mock("../components/VibeCheck", () => ({
	VibeCheck: () => <div data-testid="vibe-check" />,
}));

vi.mock("../components/InstaGrid", () => ({
	InstaGrid: () => <div data-testid="insta-grid" />,
}));

vi.mock("../components/RetroFooter", () => ({
	RetroFooter: () => <footer data-testid="retro-footer" />,
}));

describe("MarketingPage", () => {
	it("renders the RetroHeader", () => {
		render(<MarketingPage />);
		expect(screen.getByTestId("retro-header")).toBeInTheDocument();
	});

	it("renders the RetroHero", () => {
		render(<MarketingPage />);
		expect(screen.getByTestId("retro-hero")).toBeInTheDocument();
	});

	it("renders the MarqueeText with correct text", () => {
		render(<MarketingPage />);
		const marquee = screen.getByTestId("marquee-text");
		expect(marquee).toBeInTheDocument();
		expect(marquee).toHaveTextContent(/BEST IN THE CITY/i);
	});

	it("renders the ChefsFavorites section", () => {
		render(<MarketingPage />);
		expect(screen.getByTestId("chefs-favorites")).toBeInTheDocument();
	});

	it("renders the VibeCheck section", () => {
		render(<MarketingPage />);
		expect(screen.getByTestId("vibe-check")).toBeInTheDocument();
	});

	it("renders the InstaGrid section", () => {
		render(<MarketingPage />);
		expect(screen.getByTestId("insta-grid")).toBeInTheDocument();
	});

	it("renders the RetroFooter (added in this PR)", () => {
		render(<MarketingPage />);
		expect(screen.getByTestId("retro-footer")).toBeInTheDocument();
	});

	it("RetroFooter is rendered outside the main element", () => {
		const { container } = render(<MarketingPage />);
		const main = container.querySelector("main");
		const footer = screen.getByTestId("retro-footer");
		// Footer should not be inside main
		expect(main?.contains(footer)).toBe(false);
	});

	it("main element has pt-[72px] padding for header offset", () => {
		const { container } = render(<MarketingPage />);
		const main = container.querySelector("main");
		expect(main).toHaveClass("pt-[72px]");
	});

	it("renders a grain-overlay div inside main", () => {
		const { container } = render(<MarketingPage />);
		const grain = container.querySelector(".grain-overlay");
		expect(grain).toBeInTheDocument();
	});

	it("renders all sections in the correct order", () => {
		render(<MarketingPage />);
		const allTestIds = [
			"retro-header",
			"retro-hero",
			"marquee-text",
			"chefs-favorites",
			"vibe-check",
			"insta-grid",
		];
		const elements = allTestIds.map((id) => screen.getByTestId(id));
		// Verify all are present
		for (const el of elements) {
			expect(el).toBeInTheDocument();
		}
		// Verify document order
		for (let i = 0; i < elements.length - 1; i++) {
			expect(
				elements[i].compareDocumentPosition(elements[i + 1]) &
					Node.DOCUMENT_POSITION_FOLLOWING,
			).toBeTruthy();
		}
	});
});