"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";;
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const jamLogo = "/jam-logo.png";

interface DropdownItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path?: string;
  children?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About",
    children: [
      { label: "Our Approach",         path: "/our-approach" },
      { label: "Founder's Message",    path: "/founders-message" },
      { label: "Governance",           path: "/governance" },
      { label: "Legal Status",         path: "/legal-status" },
    ],
  },
  {
    label: "Our Work",
    children: [
      { label: "Projects",             path: "/projects" },
      { label: "Impact",               path: "/impact" },
      { label: "Stories From the Field", path: "/stories" },
      { label: "Photo Gallery",        path: "/gallery" },
    ],
  },
  {
    label: "Get Involved",
    children: [
      { label: "Volunteer",            path: "/volunteer" },
      { label: "Partners",             path: "/partners" },
      { label: "The JAM Circle",       path: "/jam-circle" },
      { label: "Why Donate",           path: "/why-donate" },
    ],
  },
  {
    label: "Transparency",
    children: [
      { label: "Financial Transparency", path: "/financial-transparency" },
      { label: "FAQs",                 path: "/faqs" },
      { label: "Media & Press",        path: "/media" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src={jamLogo}
            alt="JAM Foundation Logo"
            className="h-16 w-auto rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.path ? (
                <Link
                  href={item.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-muted ${
                    pathname === item.path
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-muted text-foreground/70 hover:text-foreground">
                  {item.label}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-1 w-56 bg-popover border border-border/50 rounded-xl shadow-xl shadow-foreground/5 py-2 z-50 overflow-hidden"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className={`block px-4 py-2.5 text-sm transition-all duration-150 hover:bg-muted hover:pl-5 ${
                          pathname === child.path
                            ? "text-primary font-medium bg-primary/5"
                            : "text-foreground/70"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-jam-sage text-white hover:bg-jam-sage/90 hover:shadow-lg hover:shadow-jam-sage/25 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
          >
            Donate
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-border/50 bg-background overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  {item.path ? (
                    <Link
                      href={item.path}
                      className={`block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted transition-colors ${
                        pathname === item.path ? "text-primary bg-primary/5" : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.children?.map((child) => (
                              <Link
                                key={child.path}
                                href={child.path}
                                className={`block pl-8 pr-3 py-2 text-sm transition-colors hover:text-foreground ${
                                  pathname === child.path
                                    ? "text-primary font-medium"
                                    : "text-muted-foreground"
                                }`}
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
              ))}

              {/* Mobile Donate */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link
                  href="/donate"
                  className="block w-full text-center px-4 py-3 mt-3 text-sm font-semibold rounded-xl bg-jam-sage text-white hover:bg-jam-sage/90 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Donate Now
                </Link>
              </motion.div>

              {/* Mobile JAM Circle nudge */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                <Link
                  href="/jam-circle"
                  className="block w-full text-center px-4 py-2.5 text-xs font-medium rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-jam-sage/50 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Prefer monthly giving? Join the JAM Circle →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;