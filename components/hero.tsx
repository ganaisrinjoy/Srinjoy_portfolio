"use client"
import Section from "./section"
import { motion, useReducedMotion, Variants } from "framer-motion"

export default function Hero() {
  const prefersReduced = useReducedMotion()

  // Parent container controls staggering
  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  }

  // Child items (shared baseline)
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.6 },
    },
  }

  // Special animation for the name (slight scale pulse)
  const nameAnim: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { ease: "easeOut", duration: 0.8 },
    },
  }

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-12 md:pb-20 relative z-10">
        <Section>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Name */}
            <motion.h1
              variants={nameAnim}
              className="text-pretty text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
            <span className="text-cyan-300">Hii,</span> I am Srinjoy Ganai
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="mt-4 text-lg md:text-xl text-cyan-300 font-medium"
            >
              Animation Student | Creative Storyteller
            </motion.p>

            {/* Description */}
            {/* <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-slate-400 leading-relaxed"
            >
              I craft <span className="text-slate-200 font-semibold">character-driven animation</span> and{" "}
              <span className="text-slate-200 font-semibold">motion design</span> with a focus on{" "}
              <span className="text-cyan-300">storytelling, timing,</span> and{" "}
              <span className="text-cyan-300">visual rhythm</span>.
            </motion.p> */}

            {/* Buttons */}
            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-4"
            >
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md bg-cyan-400 text-black font-medium px-4 py-2 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 transition-colors"
              >
                View Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-2 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </Section>
      </div>

      {/* Orbiting + pulsing accent */}
      {!prefersReduced && (
        <motion.div
          aria-hidden="true"
          className="absolute -top-10 right-8 md:right-24 h-24 w-24 md:h-40 md:w-40"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-full border border-cyan-400/20" />
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}
