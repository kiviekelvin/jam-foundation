import type { Metadata } from "next";
import Impact from "@/components/Impact";
export const metadata: Metadata = {
  title: "Our Impact · JAM Foundation",
  description: "See the measurable impact JAM Foundation has made in education, nutrition, and economic empowerment across Africa.",
};
export default function ImpactPage() { return <Impact />; }
