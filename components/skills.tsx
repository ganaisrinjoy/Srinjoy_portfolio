"use client";
import { motion } from "framer-motion";
import Section from "./section";
import { Cpu, PenTool, Film, Sparkles } from "lucide-react";

const skills = [
  { label: "Maya", icon: Cpu, info: "3D modeling, rigging, animation" },
  { label: "Premiere Pro", icon: Film, info: "Motion design, compositing" },
  { label: "Photoshop", icon: PenTool, info: "Concept art, matte painting" },
  // { label: "Style & Story", icon: Sparkles, info: "Timing, pacing, visual rhythm" },
  {
    label: "Subtance Painter",
    icon: Sparkles,
    info: "3D Texturing & Painting",
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Skills & Tools
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, idx) => (
            <Section key={s.label} delay={0.05 * idx}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-lg border border-white/10 bg-white/5 p-5 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <s.icon
                      className="size-5 text-cyan-300"
                      aria-hidden="true"
                    />
                  </motion.div>
                  <h3 className="font-medium">{s.label}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {s.info}
                </p>
              </motion.div>
            </Section>
          ))}
        </div>
      </Section>
    </div>
  );
}
