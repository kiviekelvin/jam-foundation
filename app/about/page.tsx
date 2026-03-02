import type { Metadata } from "next";
import About from "@/components/About";
export const metadata: Metadata = {
  title: "About Us · JAM Foundation",
  description: "Learn about JAM Foundation's mission to restore dignity and hope to vulnerable communities across Africa.",
};
export default function AboutPage() { return <About />; }
