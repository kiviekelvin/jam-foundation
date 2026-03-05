"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Users, Sprout, Heart } from "lucide-react";

const goals = [
  { value: "500+", label: "Girls kept in school", color: "text-jam-sage" },
  { value: "300+", label: "Mothers empowered", color: "text-jam-orange" },
  { value: "100", label: "Greenhouses installed", color: "text-jam-purple" },
  { value: "1,500+", label: "Children screened for malnutrition", color: "text-jam-clay" },
  { value: "800+", label: "Youth trained", color: "text-jam-sage" },
  { value: "40%", label: "Target reduction in food waste", color: "text-jam-orange" },
];

const impactAreas = [
  {
    icon: BookOpen,
    title: "Education That Changes Futures",
    color: "bg-jam-sage",
    accentText: "text-jam-sage",
    accentBorder: "border-jam-sage",
    items: [
      "Girls remain in school instead of dropping out due to poverty",
      "Displaced children return to learning in safe environments",
      "Youth gain real-world skills beyond the classroom",
    ],
    focus: ["School retention", "Academic continuity", "Life-readiness"],
  },
  {
    icon: Users,
    title: "Livelihoods That Restore Dignity",
    color: "bg-jam-orange",
    accentText: "text-jam-orange",
    accentBorder: "border-jam-orange",
    items: [
      "Young mothers earn income and regain independence",
      "Youth transition from unemployment to skills-based work",
      "Families move from dependency to self-reliance",
    ],
    focus: ["Household income stability", "Skills-to-income conversion", "Economic resilience"],
  },
  {
    icon: Sprout,
    title: "Climate Solutions That Feed Families",
    color: "bg-jam-purple",
    accentText: "text-jam-purple",
    accentBorder: "border-jam-purple",
    items: [
      "Displaced farmers grow food despite land loss",
      "Food waste is reduced through solar preservation",
      "Communities strengthen local food systems",
    ],
    focus: ["Food production", "Reduced post-harvest loss", "Climate resilience"],
  },
  {
    icon: Heart,
    title: "Health Interventions That Save Lives",
    color: "bg-jam-clay",
    accentText: "text-jam-clay",
    accentBorder: "border-jam-clay",
    items: [
      "Children receive life-saving nutrition",
      "Mothers gain nutrition knowledge",
      "Communities prevent hunger-related deaths",
    ],
    focus: ["Child survival", "Early intervention", "Long-term health outcomes"],
  },
];

const Impact = () => (
  <Layout>
    <PageHero
      title="Our Impact"
      subtitle="At JAM Foundation, impact is not a buzzword, it's our responsibility. We measure success by lives stabilized, livelihoods restored, and futures protected."
      accent="purple"
    />

    {/* Featured quote */}
    <div className="bg-jam-charcoal border-b border-white/10">
      <div className="container mx-auto px-4 py-14 max-w-3xl text-center">
        <span className="text-6xl text-white/10 font-serif leading-none select-none block -mb-4">"</span>
        <p className="text-white text-xl md:text-2xl font-bold leading-snug mb-4">
          True impact is not measured by how much aid is distributed, but by how many lives are rebuilt with dignity, skills, and resilience.
        </p>
        <p className="text-white/40 text-sm font-medium">Ahante Princess, CEO & Founder, JAM Foundation</p>
      </div>
    </div>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* 2026 Goals */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">2026 Targets</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">Where We're Headed This Year</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {goals.map((g, i) => (
              <div key={g.label} className="bg-card border border-border rounded-xl p-6 text-center">
                <p className={`text-3xl md:text-4xl font-extrabold ${g.color} mb-1`}>{g.value}</p>
                <p className="text-xs text-muted-foreground leading-snug">{g.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Impact Areas */}
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight">What Impact Looks Like</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {impactAreas.map((area, i) => (
            <AnimatedSection key={area.title} delay={i * 0.08}>
              <div className={`bg-card border-l-4 ${area.accentBorder} h-full`}>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`${area.color} p-2 rounded-lg`}>
                      <area.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground text-base">{area.title}</h3>
                  </div>
                  <ul className="space-y-3 mb-5">
                    {area.items.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm flex items-start gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${area.color}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {area.focus.map((f) => (
                      <span key={f} className={`text-xs px-3 py-1 rounded-full font-medium bg-muted ${area.accentText}`}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* How We Measure */}
        <AnimatedSection delay={0.1}>
          <div className="bg-muted border border-border rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-foreground mb-2">How We Measure Impact</h2>
            <p className="text-muted-foreground text-sm mb-6">Transparency builds trust, and we are committed to sharing our progress regularly.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { color: "bg-jam-sage", label: "Reach", desc: "Number of beneficiaries reached across all programs" },
                { color: "bg-jam-orange", label: "Outputs", desc: "Training completed, systems installed, children supported" },
                { color: "bg-jam-purple", label: "Outcomes", desc: "Income changes, food access, school retention rates" },
              ].map((m) => (
                <div key={m.label} className="bg-background border border-border rounded-xl p-5">
                  <div className={`h-1.5 w-8 ${m.color} rounded-full mb-3`} />
                  <p className="font-bold text-foreground text-sm mb-1">{m.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 italic">
              As JAM Foundation grows, so will our impact reporting, because donors deserve clarity, and communities deserve accountability.
            </p>
          </div>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="btn-outline">View Our Projects</Link>
            <Link href="/donate" className="btn-primary">Support Our Work</Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default Impact;