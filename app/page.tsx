// replace homepage with portfolio sections using dark neon theme and smooth animations\`\`\`tsx file="app/page.tsx"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Skills from "@/components/skills"
import Timeline from "@/components/timeline"
import ContactForm from "@/components/contact-form"
import AnimatedParticles from "@/components/animated-particles"

export default function Home() {
  return (
    <main className="relative bg-background text-foreground font-sans">
      {/* Floating background animation */}
      <AnimatedParticles />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <div className="scroll-mt-24">
        <section id="home" aria-label="Hero">
          <Hero />
        </section>

        <section id="about" className="py-20 md:py-28" aria-label="About Me">
          <About />
        </section>

        <section id="portfolio" className="py-20 md:py-28" aria-label="Portfolio and Showreel">
          <Portfolio />
        </section>

        <section id="skills" className="py-20 md:py-28" aria-label="Skills and Tools">
          <Skills />
        </section>

        <section id="resume" className="py-20 md:py-28" aria-label="Resume and Experience">
          <Timeline />
        </section>

        <section id="contact" className="py-20 md:py-28" aria-label="Contact Me">
          <ContactForm />
        </section>

        <footer className="py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Ritesh Choudhury — All rights reserved.
        </footer>
      </div>
    </main>
  )
}
