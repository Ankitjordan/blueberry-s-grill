import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { VibeCheck } from "../VibeCheck";

// Mock next/link
vi.mock("next/link", () => ({
	default: ({
		href,
		children,
		className,
	}: {
		href: string;
		children: React.ReactNode;
		className?: string;
	}) => (
		<a href={href} className={className}>
			{children}
		</a>
	),
}));

// Mock VibeSlider since it uses client state and images
vi.mock("../VibeSlider", () => ({
	VibeSlider: () => <div data-testid="vibe-slider-mock" />,
}));

describe("VibeCheck", () => {
	it("renders the section with correct id", () => {
		render(<VibeCheck />);
		expect(document.getElementById("vibe-check")).toBeInTheDocument();
	});

	it("renders the main heading", () => {
		render(<VibeCheck />);
		expect(
			screen.getByRole("heading", { name: /THE VIBE CHECK IS PASSED\./i }),
		).toBeInTheDocument();
	});

	it("heading has text-black class (not text-white)", () => {
		render(<VibeCheck />);
		const heading = screen.getByRole("heading", {
			name: /THE VIBE CHECK IS PASSED\./i,
		});
		expect(heading).toHaveClass("text-black");
		expect(heading).not.toHaveClass("text-white");
	});

	it("heading has the correct id for aria-labelledby", () => {
		render(<VibeCheck />);
		const heading = screen.getByRole("heading", {
			name: /THE VIBE CHECK IS PASSED\./i,
		});
		expect(heading).toHaveAttribute("id", "vibe-check-heading");
	});

	it("section has aria-labelledby pointing to heading id", () => {
		render(<VibeCheck />);
		const section = document.getElementById("vibe-check");
		expect(section).toHaveAttribute("aria-labelledby", "vibe-check-heading");
	});

	it("body paragraph has text-black/90 class (not text-white/90)", () => {
		render(<VibeCheck />);
		const paragraph = screen.getByText(
			/We don't just do food\. We do moments\./i,
		);
		expect(paragraph).toHaveClass("text-black/90");
		expect(paragraph).not.toHaveClass("text-white/90");
	});

	it("renders the body paragraph with full text", () => {
		render(<VibeCheck />);
		expect(screen.getByText(/We don't just do food\./i)).toBeInTheDocument();
		expect(screen.getByText(/just bring the energy\./i)).toBeInTheDocument();
	});

	it("renders the OUR STORY link", () => {
		render(<VibeCheck />);
		const link = screen.getByRole("link", { name: /OUR STORY/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "#our-story");
	});

	it("renders the VibeSlider component", () => {
		render(<VibeCheck />);
		expect(screen.getByTestId("vibe-slider-mock")).toBeInTheDocument();
	});

	it("renders the orange left panel with bg-[#ff5500] class", () => {
		const { container } = render(<VibeCheck />);
		const orangePanel = container.querySelector(".bg-\\[\\#ff5500\\]");
		expect(orangePanel).toBeInTheDocument();
	});
});