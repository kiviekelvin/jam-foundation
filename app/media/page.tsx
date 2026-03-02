import type { Metadata } from "next";
import Media from "@/components/Media";
export const metadata: Metadata = {
  title: "Media & Press · JAM Foundation",
  description: "Press releases, media coverage, and resources for journalists covering JAM Foundation.",
};
export default function MediaPage() { return <Media />; }
