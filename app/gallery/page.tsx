import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
export const metadata: Metadata = {
  title: "Photo Gallery · JAM Foundation",
  description: "Photos from JAM Foundation's programs and projects across Africa.",
};
export default function GalleryPage() { return <Gallery />; }
