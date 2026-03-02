"use client";
import Layout from "@/components/Layout";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Users, Sprout, Heart, Mic2, FileText, Image, User } from "lucide-react";

const stories = [
  {
    title: "Rebuilding Livelihoods for Displaced Farmers",
    desc: "How climate-smart greenhouses are helping displaced families farm again—without land.",
    tag: "Climate & Livelihoods",
    accent: "bg-jam-sage",
    accentText: "text-jam-sage",
    accentLight: "bg-jam-sage/10",
    icon: Sprout,
  },
  {
    title: "Education as a Lifeline for Displaced Children",
    desc: "Why returning children to school restores stability, safety, and hope in crisis-affected communities.",
    tag: "Education",
    accent: "bg-jam-orange",
    accentText: "text-jam-orange",
    accentLight: "bg-jam-orange/10",
    icon: BookOpen,
  },
  {
    title: "Empowering Mothers to Earn Again",
    desc: "Stories of young mothers rebuilding dignity and income after displacement.",
    tag: "Economic Empowerment",
    accent: "bg-jam-purple",
    accentText: "text-jam-purple",
    accentLight: "bg-jam-purple/10",
    icon: Users,
  },
  {
    title: "Fighting Child Malnutrition in Crisis Zones",
    desc: "How timely nutrition intervention is saving young lives in conflict-affected communities.",
    tag: "Health & Nutrition",
    accent: "bg-jam-clay",
    accentText: "text-jam-clay",
    accentLight: "bg-jam-clay/10",
    icon: Heart,
  },
];

const speakingTopics = [
  "Education in crisis-affected communities",
  "Youth empowerment and livelihoods",
  "Climate-smart agriculture and food security",
  "Women-led recovery and resilience",
  "Nonprofit transparency and accountability",
  "Displacement, dignity, and development",
];

const mediaResources = [
  { icon: FileText, label: "Organization Description", desc: "Official one-paragraph description of JAM Foundation for press use." },
  { icon: User, label: "Founder & Leadership Bios", desc: "Ahante Princess, CEO & Founder — full bio for editorial and panel use." },
  { icon: Image, label: "Logos & Brand Assets", desc: "High-resolution JAM Foundation logos in multiple formats." },
  { icon: Mic2, label: "Field Photos & Visuals", desc: "Impact photography from JAM Foundation programs across Nigeria." },
];

const Media = () => (
  <Layout>
    <PageHero
      title="Media & Press"
      subtitle={`"Impact deserves visibility—because stories inspire action."`}
      accent="purple"
    />

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Featured Stories */}
        <AnimatedSection>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Featured Stories</h2>
              <p className="text-muted-foreground text-sm mt-1">Stories drawn directly from JAM Foundation's programs and field reports.</p>
            </div>
            <Link href="/stories" className="text-sm font-semibold text-jam-purple hover:underline underline-offset-4">
              All stories →
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {stories.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.07}>
              <div className="bg-card border border-border rounded-xl p-7 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`h-10 w-10 ${s.accentLight} rounded-lg flex items-center justify-center shrink-0`}>
                    <s.icon className={`h-5 w-5 ${s.accentText}`} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wide ${s.accentText} mt-2`}>{s.tag}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <p className="text-xs text-muted-foreground mt-5 italic">Full story coming soon</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Press Releases */}
        <AnimatedSection delay={0.05}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-3">Press Releases</h2>
            <p className="text-muted-foreground text-sm mb-8">JAM Foundation periodically publishes press releases to announce program launches, partnerships, funding achievements, and advocacy campaigns.</p>
            <div className="bg-muted border border-border rounded-2xl p-10 text-center">
              <div className="h-12 w-12 bg-jam-purple/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-jam-purple" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Press Releases Coming Soon</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                As JAM Foundation launches new programs and milestones, press releases will be published here. Contact us to be added to our media list.
              </p>
              <a href="mailto:media@jamfafrica.org" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-jam-purple hover:underline underline-offset-4">
                media@jamfafrica.org
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Speaking Topics */}
        <AnimatedSection delay={0.05}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-3">Speaking & Engagement</h2>
            <p className="text-muted-foreground text-sm mb-8">JAM Foundation representatives are available for panels, conferences, podcasts, webinars, and NGO discussions.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {speakingTopics.map((t, i) => (
                <div key={t} className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4">
                  <span className="text-xs font-extrabold text-jam-purple/40 shrink-0">0{i + 1}</span>
                  <p className="text-sm text-foreground font-medium">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Media Resources */}
        <AnimatedSection delay={0.05}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-foreground mb-3">Media Resources</h2>
            <p className="text-muted-foreground text-sm mb-8">For journalists, partners, and content creators. Contact us to request any of the following.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {mediaResources.map((r, i) => (
                <AnimatedSection key={r.label} delay={i * 0.06}>
                  <div className="flex gap-4 bg-muted border border-border rounded-xl p-5">
                    <div className="h-10 w-10 bg-jam-purple/10 rounded-lg flex items-center justify-center shrink-0">
                      <r.icon className="h-5 w-5 text-jam-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-0.5">{r.label}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Media Contact */}
        <AnimatedSection>
          <div className="bg-jam-charcoal rounded-2xl p-10 md:p-14 text-center">
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Get in touch</p>
            <h2 className="text-2xl font-extrabold text-white mb-3">Media & Press Inquiries</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-3 leading-relaxed text-sm">
              For press interviews, features, fact checks, photo requests, or speaking engagements — our communications team responds promptly.
            </p>
            <a href="mailto:media@jamfafrica.org" className="text-jam-sage font-bold text-lg hover:underline underline-offset-4 block mb-10">
              media@jamfafrica.org
            </a>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/stories" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-medium hover:bg-white hover:text-jam-charcoal transition-all duration-200">
                Read Impact Stories
              </Link>
              <Link href="/jam-circle" className="btn-primary">
                Join the JAM Circle
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default Media;