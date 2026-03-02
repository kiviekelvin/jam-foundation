"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";;

interface PageHeroProps {
  title: string;
  subtitle?: string;
  accent?: "sage" | "orange" | "purple" | "clay";
  parent?: string;       // e.g. "About JAM"
  parentPath?: string;   // e.g. "/our-approach"
}

const accentConfig = {
  sage:   { border: "border-jam-sage",   text: "text-jam-sage",   bg: "bg-jam-sage",   dot: "#6B9E78" },
  orange: { border: "border-jam-orange", text: "text-jam-orange", bg: "bg-jam-orange", dot: "#D4845A" },
  purple: { border: "border-jam-purple", text: "text-jam-purple", bg: "bg-jam-purple", dot: "#7C6B9E" },
  clay:   { border: "border-jam-clay",   text: "text-jam-clay",   bg: "bg-jam-clay",   dot: "#B5704A" },
};

// Maps each route slug to { section, page } matching the navbar structure
const routeMap: Record<string, { section: string; page: string }> = {
  "our-approach":            { section: "About",          page: "Our Approach" },
  "founders-message":        { section: "About",          page: "Founder's Message" },
  "governance":              { section: "About",          page: "Governance" },
  "legal-status":            { section: "About",          page: "Legal Status" },
  "projects":                { section: "Our Work",       page: "Projects" },
  "impact":                  { section: "Our Work",       page: "Impact" },
  "stories":                 { section: "Our Work",       page: "Stories From the Field" },
  "gallery":                 { section: "Our Work",       page: "Gallery" },
  "media":                   { section: "Our Work",       page: "Media & Press" },
  "volunteer":               { section: "Get Involved",   page: "Volunteer" },
  "partners":                { section: "Get Involved",   page: "Partners" },
  "jam-circle":              { section: "Get Involved",   page: "The JAM Circle" },
  "why-donate":              { section: "Get Involved",   page: "Why Donate" },
  "donate":                  { section: "Get Involved",   page: "Donate" },
  "financial-transparency":  { section: "Transparency",   page: "Financial Transparency" },
  "faqs":                    { section: "Transparency",   page: "FAQs" },
  "privacy-policy":          { section: "Legal",          page: "Privacy Policy" },
  "terms-of-use":            { section: "Legal",          page: "Terms of Use" },
  "non-discrimination":      { section: "Legal",          page: "Non-Discrimination Policy" },
  "contact":                 { section: "Contact",        page: "Contact Us" },
};

const deriveBreadcrumb = (pathname: string) => {
  const slug = pathname.split("/").filter(Boolean)[0];
  return slug ? routeMap[slug] ?? null : null;
};

const PageHero = ({ title, subtitle, accent = "sage", parent, parentPath }: PageHeroProps) => {
  const pathname = usePathname();
  const ac = accentConfig[accent];

  const crumb = deriveBreadcrumb(pathname);
  const sectionLabel = parent ?? crumb?.section;
  const pageLabel = crumb?.page ?? title;

  return (
    <section className="relative bg-jam-charcoal overflow-hidden">

      {/* Dot grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, ${ac.dot} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Accent left bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${ac.bg}`} />

      {/* Large faint title echo */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-extrabold leading-none select-none pointer-events-none whitespace-nowrap pr-6 opacity-[0.03] text-white"
        aria-hidden
      >
        {title}
      </div>

      {/* Accent circle decoration */}
      <div className={`absolute top-0 right-24 h-48 w-48 rounded-full ${ac.bg} opacity-5 -translate-y-1/2`} />

      <div className="relative container mx-auto px-6 py-16 md:py-24">

        {/* Breadcrumb */}
        {sectionLabel && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className={`text-xs font-semibold uppercase tracking-widest ${ac.text}`}>
              {sectionLabel}
            </span>
            <span className="text-white/20 text-xs">›</span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/40">
              {pageLabel}
            </span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Accent underline on title */}
          <div className="relative inline-block mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            <div className={`mt-3 h-1 w-16 ${ac.bg} rounded-full`} />
          </div>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mt-4"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;