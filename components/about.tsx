"use client";
import { motion } from "framer-motion";
import Section from "./section";
import { Variants } from "framer-motion";

export default function About() {

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
  };

  // Child items (shared baseline)
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.6 },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Section>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start"
        >
          {/* Avatar */}
          <motion.div
            variants={item}
            className="md:col-span-1 flex justify-center md:justify-start"
          >
            <div className="relative">
              <img
                src="/portrait-avatar.png"
                alt="Portrait of Your Name"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-cyan-400/40 shadow-lg"
              />
              {/* Rotating accent ring */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-cyan-400/20"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={item} className="md:col-span-2">
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white"
            >
              About Me
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-4 text-slate-300 leading-relaxed"
            >
              I'm a Motivated and detail-oriented 3D Animation Artist with a
              solid academic background in animation and multimedia. Proficient
              in industry-standard software such as Autodesk Maya, Blender and
              Adobe After Effects with hands-on experience in modeling, rigging,
              texturing, and basic animation.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 text-slate-300 leading-relaxed"
            >
              Strong understanding of animation principles, visual storytelling
              and character developmen. Eager to join a creative team where I
              can contribute my skills, grow professionally, and bring ideas to
              life through engaging 3D visuals.
            </motion.p>

            {/* Skills
            
                        <motion.p
              variants={item}
              className="mt-4 text-slate-400 leading-relaxed"
            >
                    <motion.p
              variants={item}
              className="mt-4 text-slate-400 leading-relaxed"
            >
              {/* I’m an <span className="text-cyan-400 font-medium">animation student</span> passionate about{" "}
              <span className="text-white">character performance</span>,{" "}
              <span className="text-white">visual storytelling</span>, and{" "}
              <span className="text-white">motion design</span>.  
              I experiment across <span className="text-cyan-400">2D/3D workflows</span> and love bringing
              ideas to life with timing, pacing, and texture. 
              I'm a{" "}
              <span className="text-white">
                {" "}
                Motivated and detail-oriented{" "}
              </span>
              <span className="text-cyan-400 font-medium">
                3D Animation Artist
              </span>{" "}
              with a solid academic background in
              <span className="text-cyan-400 font-medium">
                {" "}
                animation and multimedia.
              </span>{" "}
              Proficient in industry-standard software such as{" "}
              <span className="text-cyan-400 font-medium">Autodesk Maya</span>,
              <span className="text-cyan-400 font-medium">Blender</span> and{" "}
              <span className="text-cyan-400 font-medium">
                Adobe After Effects
              </span>{" "}
              with
              <span className="text-white font-medium">
                {" "}
                hands-on experience in modeling, rigging, texturing, and basic
                animation.{" "}
              </span>{" "}
            </motion.p>
              Strong understanding of{" "}
              <span className="text-cyan-400">animation principles</span>,{" "}
              <span className="text-cyan-400">visual storytelling</span>, and{" "}
              <span className="text-cyan-400">character developmen</span>. Eager
              to <span className="text-white"> join a creative team </span>{" "}
              where I can contribute my skills, grow professionally, and{" "}
              <span className="text-white">
                {" "}
                bring ideas to life through engaging 3D visuals{" "}
              </span>
            </motion.p>
            */}
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {[
                "Auto desk Maya",
                "3DS max",
                "Adobe Subtancepainter",
                "Photoshop",
                "Premiere Pro",
                "3D Animation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-cyan-400/10 text-cyan-300 border border-cyan-400/30"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Resume button */}
            {/* <motion.a
              variants={item}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center mt-8 rounded-md bg-cyan-400 text-black font-medium px-5 py-2 shadow-lg hover:bg-cyan-300 transition-colors"
            >
              Download Resume
            </motion.a> */}
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}
