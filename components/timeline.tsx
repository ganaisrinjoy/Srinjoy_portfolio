"use client";
import { motion } from "framer-motion";
import Section from "./section";

const items = [
  {
    time: "2024 — Present",
    title: "D3D Animation",
    detail: "Coursework in 3D animation, storyboarding",
  },
  {
    time: "2022 — 2025",
    title: "IIHM, Kolkata",
    detail: "Indian Institute of Hotel Management",
  },
  {
    time: "2022",
    title: "Schooling",
    detail: "Completed Schooling (10 , 12th) from K.D.I East Burdwan",
  },

];

export default function Timeline() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Resume / Education
        </h2>
        <ol className="mt-8 relative border-l border-white/10 pl-6">
          {items.map((i, idx) => (
            <motion.li
              key={idx}
              className="mb-8 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline dot aligned to the border */}
              <div className="absolute -left-[29px] size-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

              <time className="text-xs uppercase tracking-wider text-slate-400">
                {i.time}
              </time>
              <h3 className="mt-1 text-lg font-medium">{i.title}</h3>
              <p className="mt-1 text-slate-400 leading-relaxed">{i.detail}</p>
            </motion.li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
