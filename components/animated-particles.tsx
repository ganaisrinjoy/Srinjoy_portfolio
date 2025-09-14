"use client"
import { useEffect, useRef } from "react"

type Dot = { x: number; y: number; vx: number; vy: number; r: number }

export default function AnimatedParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const dotsRef = useRef<Dot[]>([])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR)
      canvas.height = Math.floor(window.innerHeight * DPR)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    const initDots = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 26000)
      dotsRef.current = Array.from({ length: Math.max(24, Math.min(count, 80)) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.5 + 0.5,
      }))
    }

    let last = performance.now()
    const loop = (t: number) => {
      const dt = Math.min((t - last) / 16.67, 2)
      last = t
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "lighter"

      const dots = dotsRef.current
      for (const d of dots) {
        d.x += d.vx * dt
        d.y += d.vy * dt

        if (d.x < 0 || d.x > canvas.width) d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1

        // cyan glow
        ctx.beginPath()
        ctx.fillStyle = "rgba(34, 211, 238, 0.08)" // cyan-400, very subtle
        ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = "rgba(34, 211, 238, 0.35)"
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    const onResize = () => {
      resize()
      initDots()
    }

    resize()
    initDots()
    rafRef.current = requestAnimationFrame(loop)
    window.addEventListener("resize", onResize)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}
