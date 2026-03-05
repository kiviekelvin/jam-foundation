"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Building2, Globe, Heart, Megaphone, FlaskConical, HandshakeIcon } from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Corporate & CSR Partners",
    desc: "Align your brand with measurable social impact. Fund programs, send volunteers, or co-create initiatives that reflect your values.",
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
    accentLight: "bg-jam-orange/10",
  },
  {
    icon: Globe,
    title: "International NGOs & Foundations",
    desc: "Co-implement programs, share expertise, and help us scale proven solutions to more communities across Africa.",
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
    accentLight: "bg-jam-sage/10",
  },
  {
    icon: Heart,
    title: "Local Community Organizations",
    desc: "Partner with us on the ground. Your community knowledge helps ensure our programs are relevant, trusted, and effective.",
    accent: "bg-jam-purple",
    accentText: "text-jam-purple",
    accentLight: "bg-jam-purple/10",
  },
  {
    icon: Megaphone,
    title: "Media & Awareness Partners",
    desc: "Amplify stories of resilience and hope. Help us reach more donors, volunteers, and supporters across the world.",
    accent: "bg-jam-clay",
    accentText: "text-jam-clay",
    accentLight: "bg-jam-clay/10",
  },
  {
    icon: FlaskConical,
    title: "Research & Academic Partners",
    desc: "Help us build the evidence base for our programs. Collaborate on research, evaluations, and impact measurement.",
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
    accentLight: "bg-jam-orange/10",
  },
  {
    icon: HandshakeIcon,
    title: "Government & Public Institutions",
    desc: "Work alongside us on policy alignment, regulatory compliance, and scaling community programs within official frameworks.",
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
    accentLight: "bg-jam-sage/10",
  },
];

const reasons = [
  { value: "72%", label: "of funds go directly to programs", color: "text-jam-orange" },
  { value: "8+", label: "active projects across Nigeria", color: "text-jam-sage" },
  { value: "3", label: "focus areas: education, empowerment, climate", color: "text-jam-purple" },
];

const whyPartner = [
  { title: "Proven Impact", desc: "Programs that have helped displaced farmers, young mothers, children, and youth across Nigeria." },
  { title: "Transparent Operations", desc: "Regular updates, reports, and access to impact data. We share both successes and challenges." },
  { title: "Innovation & Scale", desc: "Evidence-based, scalable, and sustainable programs designed to grow with funding and support." },
  { title: "Storytelling & Visibility", desc: "Showcase your social impact through our communications, reports, and field updates." },
];

const Partners = () => (
  <Layout>
    <PageHero
      title="Partners & Supporters"
      subtitle={`"When you support JAM Foundation, you're joining a network of changemakers."`}
      accent="orange"
    />

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Intro + stats */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">Let's Build Something That Lasts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                JAM Foundation is looking for partners who believe that sustainable change requires collaboration, not just charity. Whether you're a corporation, foundation, NGO, or institution there's a place for you in this mission.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We bring grassroots implementation, community trust, and proven program models. You bring funding, expertise, networks, or visibility. Together, we can go further.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {reasons.map((r) => (
                <div key={r.label} className="bg-card border border-border rounded-xl p-5 flex items-center gap-5">
                  <p className={`text-3xl font-extrabold shrink-0 ${r.color}`}>{r.value}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Partnership types */}
        <AnimatedSection delay={0.05}>
          <h2 className="text-2xl font-bold text-foreground mb-8">Ways to Partner</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {partnerTypes.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.07}>
                <div className="bg-card border border-border rounded-xl p-7 h-full flex flex-col">
                  <div className={`h-10 w-10 ${p.accentLight} rounded-lg flex items-center justify-center mb-5`}>
                    <p.icon className={`h-5 w-5 ${p.accentText}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Why Partner With Us */}
        <AnimatedSection delay={0.05}>
          <h2 className="text-2xl font-bold text-foreground mb-8">Why Partner With JAM Foundation?</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {whyPartner.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.07}>
                <div className="flex gap-4 bg-muted border border-border rounded-xl p-6">
                  <div className="h-8 w-8 rounded-full bg-jam-orange/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-jam-orange text-xs font-extrabold">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{w.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="bg-jam-charcoal rounded-2xl p-10 md:p-14 text-center">
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">Ready to collaborate?</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Start a Conversation</h3>
            <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you're a corporation, foundation, or organization if you believe in dignity-driven development, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us to Partner</Link>
              <Link href="/donate" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white hover:text-jam-charcoal transition-all duration-200">
                Donate Instead
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default Partners;