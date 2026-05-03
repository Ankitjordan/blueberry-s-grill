import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MENU_CATEGORIES, MegaMenu } from "../MegaMenu";

// Mock next/image
vi.mock("next/image", () => ({
	default: ({
		src,
		alt,
		fill,
		sizes,
		className,
	}: {
		src: string;
		alt: string;
		fill?: boolean;
		sizes?: string;
		className?: string;
	}) => (
		// biome-ignore lint/a11y/useAltText: mock component
		<img
			src={src}
			alt={alt}
			data-fill={fill ? "true" : undefined}
			data-sizes={sizes}
			className={className}
		/>
	),
}));

// Mock next/link
vi.mock("next/link", () => ({
	default: ({
		href,
		children,
		className,
		tabIndex,
	}: {
		href: string;
		children: React.ReactNode;
		className?: string;
		tabIndex?: number;
	}) => (
		<a href={href} className={className} tabIndex={tabIndex}>
			{children}
		</a>
	),
}));

// Mock DesktopSidebarPreview
vi.mock("../MenuSidebarPreview", () => ({
	DesktopSidebarPreview: ({ item }: { item: { name: string } | null }) =>
		item ? (
			<div data-testid="sidebar-preview">{item.name}</div>
		) : (
			<div data-testid="sidebar-preview-empty" />
		),
}));

describe("MENU_CATEGORIES data", () => {
	it("has exactly 4 categories", () => {
		expect(MENU_CATEGORIES).toHaveLength(4);
	});

	it("has the correct category ids", () => {
		const ids = MENU_CATEGORIES.map((c) => c.id);
		expect(ids).toEqual(["starters", "mains", "beverages", "desserts"]);
	});

	it("each category has exactly 4 items", () => {
		for (const category of MENU_CATEGORIES) {
			expect(category.items).toHaveLength(4);
		}
	});

	it("starters category has correct items", () => {
		const starters = MENU_CATEGORIES.find((c) => c.id === "starters");
		expect(starters?.label).toBe("Starters");
		const names = starters?.items.map((i) => i.name);
		expect(names).toContain("Loaded Fries");
		expect(names).toContain("Crispy Wings");
		expect(names).toContain("Nachos Supreme");
		expect(names).toContain("Onion Rings");
	});

	it("mains category has correct items", () => {
		const mains = MENU_CATEGORIES.find((c) => c.id === "mains");
		expect(mains?.label).toBe("Mains");
		const names = mains?.items.map((i) => i.name);
		expect(names).toContain("The OG Burger");
		expect(names).toContain("Club Sandwich");
		expect(names).toContain("BBQ Platter");
		expect(names).toContain("Pasta Al Forno");
	});

	it("beverages category has correct items", () => {
		const beverages = MENU_CATEGORIES.find((c) => c.id === "beverages");
		expect(beverages?.label).toBe("Beverages");
		const names = beverages?.items.map((i) => i.name);
		expect(names).toContain("Disco Sour");
		expect(names).toContain("Berry Smash");
		expect(names).toContain("Iced Matcha");
		expect(names).toContain("Mango Shake");
	});

	it("desserts category has correct items", () => {
		const desserts = MENU_CATEGORIES.find((c) => c.id === "desserts");
		expect(desserts?.label).toBe("Desserts");
		const names = desserts?.items.map((i) => i.name);
		expect(names).toContain("Nutella Waffle");
		expect(names).toContain("Brownie Stack");
		expect(names).toContain("Blueberry Pancakes");
		expect(names).toContain("Ice Cream Sundae");
	});

	it("all items have required fields: name, price, image, description, rating", () => {
		for (const category of MENU_CATEGORIES) {
			for (const item of category.items) {
				expect(item.name).toBeTruthy();
				expect(item.price).toBeTruthy();
				expect(item.image).toBeTruthy();
				expect(item.description).toBeTruthy();
				expect(typeof item.rating).toBe("number");
			}
		}
	});

	it("all item ratings are between 1 and 5", () => {
		for (const category of MENU_CATEGORIES) {
			for (const item of category.items) {
				expect(item.rating).toBeGreaterThanOrEqual(1);
				expect(item.rating).toBeLessThanOrEqual(5);
			}
		}
	});

	it("all item image paths start with /images/foods/", () => {
		for (const category of MENU_CATEGORIES) {
			for (const item of category.items) {
				expect(item.image).toMatch(/^\/images\/foods\//);
			}
		}
	});

	it("prices are formatted as dollar amounts", () => {
		for (const category of MENU_CATEGORIES) {
			for (const item of category.items) {
				expect(item.price).toMatch(/^\$\d+$/);
			}
		}
	});
});

describe("MegaMenu component", () => {
	const defaultProps = {
		isOpen: true,
		onMouseEnter: vi.fn(),
		onMouseLeave: vi.fn(),
	};

	it("renders with role region and aria-label", () => {
		render(<MegaMenu {...defaultProps} />);
		expect(
			screen.getByRole("region", { name: "Menu categories" }),
		).toBeInTheDocument();
	});

	it("is aria-hidden when isOpen is false", () => {
		const { container } = render(<MegaMenu {...defaultProps} isOpen={false} />);
		// When aria-hidden=true, getByRole won't find it — use querySelector
		const region = container.querySelector("[role='region'][aria-label='Menu categories']");
		expect(region).toHaveAttribute("aria-hidden", "true");
	});

	it("is not aria-hidden when isOpen is true", () => {
		render(<MegaMenu {...defaultProps} isOpen={true} />);
		// When visible, getByRole works normally
		const region = screen.getByRole("region", { name: "Menu categories" });
		expect(region).toHaveAttribute("aria-hidden", "false");
	});

	it("renders all 4 category headings", () => {
		render(<MegaMenu {...defaultProps} />);
		expect(
			screen.getByRole("heading", { name: "Starters" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Mains" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Beverages" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Desserts" }),
		).toBeInTheDocument();
	});

	it("renders OUR MENU label", () => {
		render(<MegaMenu {...defaultProps} />);
		expect(screen.getByText("OUR MENU")).toBeInTheDocument();
	});

	it("renders See Full Menu link", () => {
		render(<MegaMenu {...defaultProps} />);
		expect(
			screen.getByRole("link", { name: /See Full Menu/i }),
		).toBeInTheDocument();
	});

	it("shows sidebar preview when hovering over an item", async () => {
		const user = userEvent.setup();
		render(<MegaMenu {...defaultProps} />);

		const loadedFriesButton = screen.getByRole("button", {
			name: /Loaded Fries/i,
		});
		await user.hover(loadedFriesButton);

		expect(screen.getByTestId("sidebar-preview")).toHaveTextContent(
			"Loaded Fries",
		);
	});

	it("calls onMouseLeave when mouse leaves the panel", () => {
		const onMouseLeave = vi.fn();
		const { container } = render(
			<MegaMenu {...defaultProps} onMouseLeave={onMouseLeave} />,
		);

		const region = container.querySelector(
			"[role='region'][aria-label='Menu categories']",
		) as HTMLElement;
		fireEvent.mouseLeave(region);

		expect(onMouseLeave).toHaveBeenCalled();
	});

	it("item buttons have tabIndex 0 when menu is open", () => {
		render(<MegaMenu {...defaultProps} isOpen={true} />);
		const buttons = screen.getAllByRole("button");
		for (const button of buttons) {
			expect(button).toHaveAttribute("tabindex", "0");
		}
	});

	it("item buttons have tabIndex -1 when menu is closed", () => {
		const { container } = render(<MegaMenu {...defaultProps} isOpen={false} />);
		// When aria-hidden=true, getAllByRole won't find buttons — use querySelectorAll
		const buttons = container.querySelectorAll("button");
		expect(buttons.length).toBeGreaterThan(0);
		for (const button of buttons) {
			expect(button).toHaveAttribute("tabindex", "-1");
		}
	});
});