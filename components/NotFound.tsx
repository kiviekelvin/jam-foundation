"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";;
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowLeft, Home, BookOpen, Heart } from "lucide-react";

const suggestions = [
  { icon: Home,     label: "Homepage",         to: "/" },
  { icon: BookOpen, label: "Our Projects",      to: "/projects" },
  { icon: Heart,    label: "Donate",            to: "/donate" },
];

const NotFound = () => {
  const pathname = usePathname();
  const location = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <Layout>
      <section className="relative bg-jam-charcoal min-h-[80vh] flex items-center overflow-hidden">

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #6B9E78 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Faint 404 echo */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-extrabold leading-none select-none pointer-events-none opacity-[0.03] text-white pr-10"
          aria-hidden
        >
          404
        </div>

        {/* Accent circle */}
        <div className="absolute top-0 right-24 h-64 w-64 rounded-full bg-jam-sage opacity-5 -translate-y-1/2" />

        <div className="relative container mx-auto px-6 py-24 max-w-2xl">

          {/* Accent bar */}
          <div className="h-1 w-12 bg-jam-sage rounded-full mb-8" />

          <p className="text-jam-sage text-xs font-bold uppercase tracking-widest mb-3">404 — Page Not Found</p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            This page doesn't exist — but the work does.
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10">
            The page you're looking for may have moved or never existed. Here are a few places to get back on track.
          </p>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-3 mb-10">
            {suggestions.map((s) => (
              <Link
                key={s.to}
                href={s.to}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <s.icon className="h-4 w-4 text-jam-sage" />
                {s.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-jam-sage hover:opacity-70 transition-opacity group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Home
          </Link>

        </div>
      </section>
    </Layout>
  );
};

export default NotFound;