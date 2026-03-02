import type { Metadata } from "next";
import FoundersMessage from "@/components/FoundersMessage";
export const metadata: Metadata = {
  title: "Founder's Message · JAM Foundation",
  description: "A personal message from the founder of JAM Foundation on our vision, mission, and commitment to Africa's vulnerable communities.",
};
export default function FoundersMessagePage() { return <FoundersMessage />; }
