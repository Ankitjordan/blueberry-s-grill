import type { Metadata } from "next";
import { GlobeScene } from "./components/GlobeScene";

export const metadata: Metadata = {
  title: "Our Locations | Blueberry's Grill",
  description:
    "Find a Blueberry's Grill near you. Explore our three premium dining locations across the Carolina coast and Wilmington.",
};

/**
 * /app/locations/page.tsx — Server Component
 *
 * Renders a full-screen, immersive globe experience.
 * All interactivity is delegated to the GlobeScene client component.
 */
export default function LocationsPage() {
  return (
    <main
      aria-label="Locations globe page"
      style={{ isolation: "isolate" }}
      className="relative h-screen w-screen overflow-hidden"
    >
      <GlobeScene />
    </main>
  );
}
