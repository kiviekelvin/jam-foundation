"use client";
import Link from "next/link";
import { ArrowLeft, Heart, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { allProjects } from "@/data/projects";
import type { Project } from "@/data/projects";

const ProjectDetail = ({ project }: { project: Project }) => {


  const relatedProjects = allProjects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  const accentBg: Record<string, string> = {
    sage: "bg-jam-sage",
    orange: "bg-jam-orange",
    purple: "bg-jam-purple",
  };

  const accentText: Record<string, string> = {
    sage: "text-jam-sage",
    orange: "text-jam-orange",
    purple: "text-jam-purple",
  };

  const accentBorder: Record<string, string> = {
    sage: "border-jam-sage",
    orange: "border-jam-orange",
    purple: "border-jam-purple",
  };

  const badgeBg: Record<string, string> = {
    sage: "bg-jam-sage/20 text-jam-sage",
    orange: "bg-jam-orange/20 text-jam-orange",
    purple: "bg-jam-purple/20 text-jam-purple",
  };

  return (
    <Layout>
      {/* Split Hero */}
      <section className="min-h-[70vh] grid md:grid-cols-2">
        {/* Left — text */}
        <div className="bg-jam-charcoal flex items-center">
          <div className="px-8 md:px-16 py-20">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </Link>

            <div className="mb-6">
              <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider ${accentBg[project.accent]} text-primary-foreground rounded`}>
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              {project.name}
            </h1>

            <p className={`text-base font-semibold italic mb-6 ${accentText[project.accent]}`}>
              {project.tagline}
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              {project.fullDescription[0]}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {project.location && (
                <span className="inline-flex items-center gap-1.5 text-white/50 text-sm">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </span>
              )}
              {project.impactStat && (
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  <span className={`text-xl font-extrabold ${accentText[project.accent]}`}>
                    {project.impactStat.value}
                  </span>
                  {project.impactStat.label}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative min-h-[400px] md:min-h-full">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jam-charcoal/40 to-transparent" />
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Full description */}
          <AnimatedSection>
            <div className="space-y-5 mb-16">
              {project.fullDescription.slice(1).map((para, i) => (
                <p key={i} className="text-base text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Objectives */}
          <AnimatedSection delay={0.1}>
            <div className={`border-l-4 ${accentBorder[project.accent]} pl-6 mb-16`}>
              <h2 className="text-2xl font-bold text-foreground mb-6">What We Do</h2>
              <ul className="space-y-3">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-1.5 h-2 w-2 rounded-full ${accentBg[project.accent]} shrink-0`} />
                    <span className="text-muted-foreground">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* How It Works */}
          <AnimatedSection delay={0.15}>
            <h2 className="text-2xl font-bold text-foreground mb-8">How It Works</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-16">
              {project.howItWorks.map((step, i) => (
                <div key={i} className="bg-muted rounded-xl p-6 flex flex-col gap-3">
                  <span className={`text-4xl font-extrabold ${accentText[project.accent]} opacity-30 leading-none`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Impact callout */}
          <AnimatedSection delay={0.2}>
            <div className={`${accentBg[project.accent]} rounded-xl p-8 mb-16`}>
              <h3 className="text-lg font-bold text-primary-foreground mb-3">Your Impact</h3>
              <p className="text-primary-foreground/90 leading-relaxed">{project.impact}</p>
              <Link
                href={`/donate?project=${encodeURIComponent(project.name)}`}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-jam-charcoal font-semibold rounded-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <Heart className="h-4 w-4" />
                Support This Project
              </Link>
            </div>
          </AnimatedSection>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <AnimatedSection delay={0.25}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Projects</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {relatedProjects.map((rp) => (
                  <Link key={rp.slug} href={`/projects/${rp.slug}`} className="block group">
                    <article className="relative rounded-xl overflow-hidden aspect-[4/3]">
                      {/* Photo */}
                      <img
                        src={rp.image}
                        alt={rp.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                      {/* Status badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-sm ${badgeBg[rp.accent]}`}>
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {rp.status ?? "Active"}
                        </span>
                      </div>

                      {/* Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        {rp.impactStat && (
                          <p className={`text-xl font-extrabold mb-1 ${accentText[rp.accent]}`}>
                            {rp.impactStat.value}
                            <span className="text-sm font-medium text-white/70 ml-2">{rp.impactStat.label}</span>
                          </p>
                        )}
                        <h3 className="text-white font-bold text-sm leading-snug">{rp.name}</h3>
                        <p className="text-white/60 text-xs mt-1">{rp.tagline}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;