import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		// Enable modern image formats — WebP/AVIF saves ~30-50% over JPEG/PNG
		formats: ["image/avif", "image/webp"],
		// Aggressive device size breakpoints to avoid over-sized image delivery
		deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// Extend the default cache TTL to 1 week so repeat visits are instant
		minimumCacheTTL: 60 * 60 * 24 * 7,
	},
	// Compress responses with gzip
	compress: true,
	// Power the experimental partial prerendering + React compiler when available
	experimental: {
		optimizePackageImports: ["gsap", "motion", "react-icons", "lenis"],
	},
};

export default nextConfig;
