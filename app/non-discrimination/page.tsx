import type { Metadata } from "next";
import NonDiscrimination from "@/components/NonDiscrimination";
export const metadata: Metadata = {
  title: "Non-Discrimination Policy · JAM Foundation",
  description: "JAM Foundation's non-discrimination policy. We serve all communities without regard to race, religion, gender, or nationality.",
};
export default function NonDiscriminationPage() { return <NonDiscrimination />; }
