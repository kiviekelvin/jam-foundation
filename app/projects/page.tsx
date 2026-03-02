import type { Metadata } from "next";
import Projects from "@/components/Projects";
export const metadata: Metadata = {
  title: "Our Projects · JAM Foundation",
  description: "Explore JAM Foundation's active projects in education, nutrition, economic empowerment, and climate resilience across Africa.",
};
export default function ProjectsPage() { return <Projects />; }
