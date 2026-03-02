import type { Metadata } from "next";
import Volunteer from "@/components/Volunteer";
export const metadata: Metadata = {
  title: "Volunteer · JAM Foundation",
  description: "Join JAM Foundation as a volunteer. Help us create lasting change in vulnerable communities across Africa.",
};
export default function VolunteerPage() { return <Volunteer />; }
