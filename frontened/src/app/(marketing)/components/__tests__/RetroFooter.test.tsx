import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RetroFooter } from "../RetroFooter";

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

describe("RetroFooter", () => {
	it("renders a footer element", () => {
		render(<RetroFooter />);
		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	});

	it("renders the brand logo link", () => {
		render(<RetroFooter />);
		const logoLink = screen.getByRole("link", { name: /blueberry.*grill/i });
		expect(logoLink).toBeInTheDocument();
		expect(logoLink).toHaveAttribute("href", "/");
	});

	it("renders the brand tagline text", () => {
		render(<RetroFooter />);
		expect(
			screen.getByText(/high-fidelity food and low-fidelity vibes/i),
		).toBeInTheDocument();
	});

	it("renders the tagline sticker with OPEN TIL 2AM text", () => {
		render(<RetroFooter />);
		expect(screen.getByText(/OPEN TIL 2AM ★ NO RULES/)).toBeInTheDocument();
	});

	it("renders NAV section heading", () => {
		render(<RetroFooter />);
		expect(screen.getByText("NAV")).toBeInTheDocument();
	});

	it("renders all navigation links", () => {
		render(<RetroFooter />);
		const navLinks = [
			{ label: "Menu", href: "#chefs-favorites" },
			{ label: "Our Story", href: "#vibe-check" },
			{ label: "Events", href: "#" },
			{ label: "Locations", href: "#" },
			{ label: "Privacy", href: "#" },
			{ label: "Terms", href: "#" },
		];
		for (const { label } of navLinks) {
			expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
		}
	});

	it("navigation links point to correct hrefs", () => {
		render(<RetroFooter />);
		expect(screen.getByRole("link", { name: "Menu" })).toHaveAttribute(
			"href",
			"#chefs-favorites",
		);
		expect(screen.getByRole("link", { name: "Our Story" })).toHaveAttribute(
			"href",
			"#vibe-check",
		);
	});

	it("renders HOURS section heading", () => {
		render(<RetroFooter />);
		expect(screen.getByText("HOURS")).toBeInTheDocument();
	});

	it("renders all hours entries", () => {
		render(<RetroFooter />);
		expect(screen.getByText("Tue – Thu")).toBeInTheDocument();
		expect(screen.getByText("12pm – 11pm")).toBeInTheDocument();
		expect(screen.getByText("Fri – Sat")).toBeInTheDocument();
		expect(screen.getByText("12pm – 2am")).toBeInTheDocument();
		expect(screen.getByText("Sun")).toBeInTheDocument();
		expect(screen.getByText("11am – 9pm")).toBeInTheDocument();
		expect(screen.getByText("Mon")).toBeInTheDocument();
		expect(screen.getByText("Closed (Vibe Reset Day)")).toBeInTheDocument();
	});

	it("renders copyright text in bottom bar", () => {
		render(<RetroFooter />);
		expect(
			screen.getByText(/2025 BLUEBERRY'S GRILL GROUP/i),
		).toBeInTheDocument();
	});

	it("renders built-on credit text", () => {
		render(<RetroFooter />);
		expect(
			screen.getByText(/COOKED UP WITH LOVE & BUILT ON NEXT\.JS/i),
		).toBeInTheDocument();
	});

	it("renders all three social links", () => {
		render(<RetroFooter />);
		expect(screen.getByRole("link", { name: "IG" })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "TW" })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "TK" })).toBeInTheDocument();
	});

	it("social links have href attributes", () => {
		render(<RetroFooter />);
		for (const label of ["IG", "TW", "TK"]) {
			expect(screen.getByRole("link", { name: label })).toHaveAttribute(
				"href",
				"#",
			);
		}
	});

	it("renders exactly 6 navigation links in the nav section", () => {
		render(<RetroFooter />);
		// All links rendered (logo + 6 nav + 3 social = 10 total)
		const allLinks = screen.getAllByRole("link");
		// Brand logo, 6 nav links, 3 social = 10
		expect(allLinks.length).toBe(10);
	});

	it("renders Est. 2024 tagline", () => {
		render(<RetroFooter />);
		expect(screen.getByText(/Est\. 2024/)).toBeInTheDocument();
	});
});