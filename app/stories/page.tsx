import type { Metadata } from "next";
import Stories from "@/components/Stories";
export const metadata: Metadata = {
  title: "Stories From the Field · JAM Foundation",
  description: "Real stories of change from the communities JAM Foundation serves across Africa.",
};
export default function StoriesPage() { return <Stories />; }
