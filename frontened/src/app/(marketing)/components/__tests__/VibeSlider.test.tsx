import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { VibeSlider } from "../VibeSlider";

// Mock next/image
vi.mock("next/image", () => ({
	default: ({
		src,
		alt,
		fill,
		sizes,
		className,
		priority,
		loading,
	}: {
		src: string;
		alt: string;
		fill?: boolean;
		sizes?: string;
		className?: string;
		priority?: boolean;
		loading?: string;
	}) => (
		// biome-ignore lint/a11y/useAltText: mock component
		<img
			src={src}
			alt={alt}
			data-fill={fill ? "true" : undefined}
			data-sizes={sizes}
			className={className}
			data-priority={priority ? "true" : undefined}
			data-loading={loading}
		/>
	),
}));

describe("VibeSlider", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it("renders container with aria-roledescription of carousel", () => {
		const { container } = render(<VibeSlider />);
		const carousel = container.querySelector("[aria-roledescription='carousel']");
		expect(carousel).toBeInTheDocument();
	});

	it("renders all 7 interior images in the DOM", () => {
		const { container } = render(<VibeSlider />);
		// Use querySelectorAll to count all img elements (including those in aria-hidden divs)
		const images = container.querySelectorAll("img");
		expect(images).toHaveLength(7);
	});

	it("renders 7 slide indicator buttons", () => {
		render(<VibeSlider />);
		const buttons = screen.getAllByRole("button");
		expect(buttons).toHaveLength(7);
	});

	it("indicator buttons have correct aria-labels", () => {
		render(<VibeSlider />);
		for (let i = 1; i <= 7; i++) {
			expect(
				screen.getByRole("button", { name: `Go to slide ${i}` }),
			).toBeInTheDocument();
		}
	});

	it("indicator buttons are sized 32x32 (w-8 h-8) for accessible touch targets", () => {
		render(<VibeSlider />);
		const buttons = screen.getAllByRole("button");
		for (const button of buttons) {
			expect(button).toHaveClass("w-8");
			expect(button).toHaveClass("h-8");
		}
	});

	it("indicator buttons contain an inner span as the visual dot", () => {
		render(<VibeSlider />);
		const buttons = screen.getAllByRole("button");
		for (const button of buttons) {
			const span = button.querySelector("span");
			expect(span).toBeInTheDocument();
		}
	});

	it("inner span of active indicator (slide 1) has bg-white class initially", () => {
		render(<VibeSlider />);
		const firstButton = screen.getByRole("button", { name: "Go to slide 1" });
		const dot = firstButton.querySelector("span");
		expect(dot).toHaveClass("bg-white");
	});

	it("inner span of inactive indicators has bg-white/50 class", () => {
		render(<VibeSlider />);
		const secondButton = screen.getByRole("button", { name: "Go to slide 2" });
		const dot = secondButton.querySelector("span");
		expect(dot).toHaveClass("bg-white/50");
	});

	it("clicking an indicator button changes the active slide", () => {
		render(<VibeSlider />);

		const thirdButton = screen.getByRole("button", { name: "Go to slide 3" });
		act(() => {
			thirdButton.click();
		});

		const dot = thirdButton.querySelector("span");
		expect(dot).toHaveClass("bg-white");
		expect(dot).not.toHaveClass("bg-white/50");
	});

	it("clicking a slide indicator deactivates the previously active indicator", () => {
		render(<VibeSlider />);

		const firstButton = screen.getByRole("button", { name: "Go to slide 1" });
		const thirdButton = screen.getByRole("button", { name: "Go to slide 3" });

		act(() => {
			thirdButton.click();
		});

		const firstDot = firstButton.querySelector("span");
		expect(firstDot).not.toHaveClass("bg-white");
		expect(firstDot).toHaveClass("bg-white/50");
	});

	it("auto-advances to the next slide after 4 seconds", () => {
		render(<VibeSlider />);

		const firstButton = screen.getByRole("button", { name: "Go to slide 1" });
		const secondButton = screen.getByRole("button", { name: "Go to slide 2" });

		expect(firstButton.querySelector("span")).toHaveClass("bg-white");

		act(() => {
			vi.advanceTimersByTime(4000);
		});

		expect(secondButton.querySelector("span")).toHaveClass("bg-white");
		expect(firstButton.querySelector("span")).not.toHaveClass("bg-white");
	});

	it("wraps around to slide 1 after advancing past the last slide", () => {
		render(<VibeSlider />);
		const firstButton = screen.getByRole("button", { name: "Go to slide 1" });

		act(() => {
			// Advance through all 7 slides (7 × 4 seconds)
			vi.advanceTimersByTime(4000 * 7);
		});

		expect(firstButton.querySelector("span")).toHaveClass("bg-white");
	});

	it("first image has priority attribute set", () => {
		const { container } = render(<VibeSlider />);
		const images = container.querySelectorAll("img");
		expect(images[0]).toHaveAttribute("data-priority", "true");
	});

	it("subsequent images do not have priority attribute", () => {
		const { container } = render(<VibeSlider />);
		const images = container.querySelectorAll("img");
		for (let i = 1; i < images.length; i++) {
			expect(images[i]).not.toHaveAttribute("data-priority", "true");
		}
	});

	it("images have alt text with slide number", () => {
		const { container } = render(<VibeSlider />);
		for (let i = 1; i <= 7; i++) {
			const img = container.querySelector(
				`img[alt="Blueberry's Grill interior ${i}"]`,
			);
			expect(img).toBeInTheDocument();
		}
	});

	it("indicator buttons have flex layout classes for centering the dot", () => {
		render(<VibeSlider />);
		const buttons = screen.getAllByRole("button");
		for (const button of buttons) {
			expect(button).toHaveClass("flex");
			expect(button).toHaveClass("items-center");
			expect(button).toHaveClass("justify-center");
		}
	});

	it("indicator buttons are round (rounded-full)", () => {
		render(<VibeSlider />);
		const buttons = screen.getAllByRole("button");
		for (const button of buttons) {
			expect(button).toHaveClass("rounded-full");
		}
	});

	it("first slide image wrapper is visible (not aria-hidden)", () => {
		const { container } = render(<VibeSlider />);
		// The first image's parent div should not be aria-hidden
		const firstImageWrapper = container.querySelector(
			"[aria-hidden='false']",
		);
		expect(firstImageWrapper).toBeInTheDocument();
	});
});