"use client";

import dynamic from "next/dynamic";

/**
 * AskGrillButton lazy-loaded in a Client Component wrapper.
 *
 * next/dynamic with ssr:false can only be used inside Client Components.
 * This thin wrapper lets us do lazy-loading from the Server Component root layout.
 */
const AskGrillButtonLazy = dynamic(
  () => import("@/components/ui/AskGrillButton").then((m) => m.AskGrillButton),
  { ssr: false }
);

export function LazyAskGrillButton() {
  return <AskGrillButtonLazy />;
}
