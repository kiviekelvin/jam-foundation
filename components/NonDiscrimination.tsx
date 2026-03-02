"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, Users, Heart, Mail } from "lucide-react";

const sections = [
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    content:
      "JAM Foundation (Joshua Ahante Memorial Foundation) is committed to providing its programs, services, and assistance to all individuals regardless of race, color, national origin, religion, sex, gender identity, sexual orientation, age, disability, marital status, or any other characteristic protected by law.",
  },
  {
    icon: Users,
    title: "Equal Access for All",
    content:
      "We do not discriminate based on gender, religion, ethnicity, disability, or background in any of our programs or services. All communities we serve are treated with equal dignity, respect, and access to the support we provide.",
  },
  {
    icon: Heart,
    title: "Need-Based Service",
    content:
      "Our programs — including education, economic empowerment, climate resilience, food security, and child nutrition — are designed and implemented to serve vulnerable populations based on need alone.",
  },
  {
    icon: Mail,
    title: "Report a Concern",
    content: (
      <>
        If you believe you have been discriminated against in connection with any JAM Foundation program or activity, please contact us at{" "}
        <a href="mailto:info@jamfafrica.org" className="text-jam-sage font-semibold hover:underline underline-offset-4">
          info@jamfafrica.org
        </a>
        . All reports are taken seriously and reviewed promptly.
      </>
    ),
  },
];

const NonDiscrimination = () => (
  <Layout>
    <PageHero
      title="Non-Discrimination Policy"
      subtitle="JAM Foundation serves all communities with equal dignity, respect, and access — based on need alone."
      accent="sage"
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">

        <div className="space-y-4 mb-12">
          {sections.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.07}>
              <div className="flex gap-5 bg-card border border-border rounded-xl p-6">
                <div className="h-10 w-10 bg-jam-sage/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <s.icon className="h-5 w-5 text-jam-sage" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground mb-1.5">{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <span className="text-border">·</span>
            <Link href="/legal-status" className="text-muted-foreground hover:text-foreground transition-colors">Legal Status</Link>
            <span className="text-border">·</span>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default NonDiscrimination;