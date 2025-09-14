"use client";
import { motion } from "framer-motion";
import Section from "./section";
import { Mail, Phone, Globe } from "lucide-react";
import { SiLinkedin, SiInstagram, SiArtstation, SiGmail } from "react-icons/si";

const contactLinks = [
  {
    icon: SiGmail,
    label: "Email",
    value: "ganaisrinjoy@gmail.com",
    href: "mailto:ganaisrinjoy@gmail.com",
  },
  // {
  //   icon: Phone,
  //   label: "Phone / WhatsApp",
  //   value: "+91 98765 43210",
  //   href: "tel:+919876543210",
  // },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    value: "Srinjoy Ganai",
    href: "https://linkedin.com/in/username",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    value: "@ric_k3d",
    href: "https://www.instagram.com/ric_k3d?igsh=MW9tNGs2c2h5d3ky",
  },
  {
    icon: SiArtstation,
    label: "Portfolio",
    value: "artstation.com/yourname",
    href: "https://artstation.com/srinjoyganai",
  },
];

const funFacts = [
  "🎬 Animated my first short film at age 17",
  "🎨 Obsessed with color theory & silhouettes",
  "🐾 Can sketch animals faster than people",
  "🍿 Favorite studio: Pixar (dream workplace!)",
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let’s Connect
            </h2>
            <p className="mt-3 text-slate-400 leading-relaxed max-w-sm">
              I’m always excited to collaborate, learn, and bring ideas to life
              through animation. Reach out directly or check out my work.
            </p>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-4 shadow-md hover:shadow-cyan-500/20 hover:scale-100 transition-transform"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <link.icon className="size-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-slate-400">{link.label}</p>
                    <p className="font-medium text-slate-200">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Fun Facts */}
            {/* <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-200 mb-3">
                Fun Facts 🎉
              </h3>
              <ul className="space-y-2 text-slate-400">
                {funFacts.map((fact, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </div> */}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
