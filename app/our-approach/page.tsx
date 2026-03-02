import type { Metadata } from "next";
import About from "@/components/About";
export const metadata: Metadata = {
  title: "Our Approach · JAM Foundation",
  description: "Learn about JAM Foundation's holistic approach to community development, education, nutrition, and economic empowerment.",
};
export default function OurApproachPage() { return <About />; }
