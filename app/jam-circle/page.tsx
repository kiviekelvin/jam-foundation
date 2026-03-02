import type { Metadata } from "next";
import JamCircle from "@/components/JamCircle";
export const metadata: Metadata = {
  title: "The JAM Circle · JAM Foundation",
  description: "Join the JAM Circle and become a monthly donor. Your recurring gift helps us plan better and serve more families.",
};
export default function JamCirclePage() { return <JamCircle />; }
