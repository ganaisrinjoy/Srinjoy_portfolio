"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type React from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  // smooth scroll on click
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(href);
  }, []);

  // track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActive(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // section is considered active when 50% visible
      }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/5"
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          {/* Animated Monogram Badge */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-400 text-black font-bold text-xs sm:text-sm flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)] ring-1 ring-cyan-400/40"
          >
            S
          </motion.div>

          <span className="hidden sm:inline text-lg font-semibold tracking-tight text-slate-200 group-hover:text-cyan-400 transition-colors duration-200">
            Srinjoy
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 relative">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                onClick={handleClick}
                className={`text-sm px-1 py-1 transition-colors ${
                  active === l.href
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {l.label}
              </a>
              {active === l.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400 rounded"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <a
          href="#contact"
          onClick={handleClick}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-cyan-400/40 text-cyan-300 px-3 py-1.5 text-sm hover:bg-cyan-400/10 focus-visible:ring-2 focus-visible:ring-cyan-400/60 transition-colors"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
