import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ChefsFavorites } from "../ChefsFavorites";

// Mock next/image
vi.mock("next/image", () => ({
	default: ({
		src,
		alt,
		sizes,
		fill,
		className,
		priority,
	}: {
		src: string;
		alt: string;
		sizes?: string;
		fill?: boolean;
		className?: string;
		priority?: boolean;
	}) => (
		// biome-ignore lint/a11y/useAltText: mock component
		<img
			src={src}
			alt={alt}
			data-sizes={sizes}
			data-fill={fill ? "true" : undefined}
			className={className}
			data-priority={priority ? "true" : undefined}
		/>
	),
}));

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

describe("ChefsFavorites", () => {
	it("renders the section with correct id", () => {
		render(<ChefsFavorites />);
		const section = document.getElementById("chefs-favorites");
		expect(section).toBeInTheDocument();
	});

	it("renders the CHEF'S FAVORITES heading", () => {
		render(<ChefsFavorites />);
		expect(
			screen.getByRole("heading", { name: /CHEF'S FAVORITES/i }),
		).toBeInTheDocument();
	});

	it("renders all three menu items", () => {
		render(<ChefsFavorites />);
		expect(screen.getByText("The OG Burger")).toBeInTheDocument();
		expect(screen.getByText("Electric Pepperoni")).toBeInTheDocument();
		expect(screen.getByText("Disco Sour")).toBeInTheDocument();
	});

	it("renders prices for all menu items", () => {
		render(<ChefsFavorites />);
		expect(screen.getByText("$14")).toBeInTheDocument();
		expect(screen.getByText("$18")).toBeInTheDocument();
		expect(screen.getByText("$12")).toBeInTheDocument();
	});

	it("renders all badge labels", () => {
		render(<ChefsFavorites />);
		expect(screen.getByText("BEST SELLER")).toBeInTheDocument();
		expect(screen.getByText("SPICY")).toBeInTheDocument();
		expect(screen.getByText("POPULAR")).toBeInTheDocument();
	});

	it("BEST SELLER badge has text-black class (not text-white)", () => {
		render(<ChefsFavorites />);
		const badge = screen.getByText("BEST SELLER");
		expect(badge).toHaveClass("text-black");
		expect(badge).not.toHaveClass("text-white");
	});

	it("BEST SELLER badge has the orange background", () => {
		render(<ChefsFavorites />);
		const badge = screen.getByText("BEST SELLER");
		expect(badge).toHaveClass("bg-[#ff5500]");
	});

	it("SPICY badge retains text-white class", () => {
		render(<ChefsFavorites />);
		const badge = screen.getByText("SPICY");
		expect(badge).toHaveClass("text-white");
		expect(badge).not.toHaveClass("text-black");
	});

	it("POPULAR badge has text-black class", () => {
		render(<ChefsFavorites />);
		const badge = screen.getByText("POPULAR");
		expect(badge).toHaveClass("text-black");
		expect(badge).not.toHaveClass("text-white");
	});

	it("renders item descriptions", () => {
		render(<ChefsFavorites />);
		expect(
			screen.getByText(
				/Triple-smashed wagyu beef, secret vibe sauce, pickles on brioche\./,
			),
		).toBeInTheDocument();
		expect(
			screen.getByText(/Double pepperoni, hot honey drizzle, fermented dough\./),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				/Gin, butterfly pea, elderflower, and gold glitter edible dust\./,
			),
		).toBeInTheDocument();
	});

	it("food images use updated sizes attribute", () => {
		render(<ChefsFavorites />);
		const images = screen.getAllByRole("img");
		// The food card images should have the updated sizes string
		const foodImages = images.filter((img) =>
			img.getAttribute("data-sizes")?.includes("400px"),
		);
		expect(foodImages.length).toBe(3);
	});

	it("renders a 'SEE FULL MENU' link", () => {
		render(<ChefsFavorites />);
		const links = screen.getAllByRole("link", { name: /SEE FULL MENU/i });
		// There are two (desktop + mobile CTA)
		expect(links.length).toBeGreaterThanOrEqual(1);
		expect(links[0]).toHaveAttribute("href", "#menu");
	});

	it("has aria-labelledby attribute referencing the heading id", () => {
		render(<ChefsFavorites />);
		const section = document.getElementById("chefs-favorites");
		expect(section).toHaveAttribute(
			"aria-labelledby",
			"chefs-favorites-heading",
		);
	});

	it("renders 3 article cards", () => {
		render(<ChefsFavorites />);
		const articles = screen.getAllByRole("article");
		expect(articles).toHaveLength(3);
	});
});