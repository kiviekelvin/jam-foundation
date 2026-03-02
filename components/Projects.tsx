"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { projectCategories } from "@/data/projects";
import { ArrowRight, MapPin } from "lucide-react";

const badgeBg: Record<string, string> = {
  sage: "bg-jam-sage/20 text-jam-sage",
  orange: "bg-jam-orange/20 text-jam-orange",
  purple: "bg-jam-purple/20 text-jam-purple",
};

const stats = [
  { value: "8+", label: "Active Projects" },
  { value: "12", label: "Communities Reached" },
  { value: "5K+", label: "Beneficiaries Served" },
];

const accentText: Record<string, string> = {
  sage: "text-jam-sage",
  orange: "text-jam-orange",
  purple: "text-jam-purple",
};

const Projects = () => (
  <Layout>
    <PageHero
      title="Our Projects"
      subtitle="Every project is designed to create real, measurable change in the lives of vulnerable communities across Nigeria."
      accent="orange"
    />

    {/* Stats Bar */}
    <div className="bg-jam-charcoal border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="py-7 px-4 text-center">
              <p className="text-2xl md:text-4xl font-extrabold text-jam-orange">{stat.value}</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {projectCategories.map((cat) => (
          <div key={cat.category} className="mb-24 last:mb-0">

            {/* Category Header */}
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-10">
                <div className={`${cat.headerBg} p-2.5 rounded-lg`}>
                  <cat.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{cat.category}</h2>
              </div>
            </AnimatedSection>

            {/* Photo-forward Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.items.map((item, i) => (
                <AnimatedSection key={item.slug} delay={i * 0.08}>
                  <Link href={`/projects/${item.slug}`} className="block group">
                    <article className="relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer">

                      {/* Full-bleed photo */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient — transparent top, dark bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Top badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        {item.location && (
                          <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </span>
                        )}
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-sm ml-auto ${badgeBg[cat.accent]}`}>
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {item.status ?? "Active"}
                        </span>
                      </div>

                      {/* Bottom text */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        {item.impactStat && (
                          <p className={`text-2xl font-extrabold ${accentText[cat.accent]} mb-1`}>
                            {item.impactStat.value}
                            <span className="text-sm font-medium text-white/70 ml-2">{item.impactStat.label}</span>
                          </p>
                        )}
                        <h3 className="text-white font-bold text-base leading-snug mb-1">{item.name}</h3>
                        <p className="text-white/70 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                        <span className={`inline-flex items-center gap-1 mt-3 text-xs font-semibold ${accentText[cat.accent]} group-hover:gap-2 transition-all duration-200`}>
                          Learn more <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <AnimatedSection>
          <div className="text-center mt-8 bg-card border border-border rounded-2xl py-14 px-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to make a difference?</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Your support directly funds these projects and transforms lives across Nigeria.
            </p>
            <Link href="/donate" className="btn-primary text-base px-10 py-4">
              Support a Project
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Projects;