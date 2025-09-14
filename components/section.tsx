"use client"
import { motion, useReducedMotion } from "framer-motion"
import type { PropsWithChildren } from "react"

export default function Section({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) {
    return <div>{children}</div>
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
