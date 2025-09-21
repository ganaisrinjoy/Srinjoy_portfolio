"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./section";

type Item = {
  id: string;
  title: string;
  kind: "video" | "image";
  src: string;
  poster?: string;
  description?: string;
};

const items: Item[] = [
  {
    id: "1",
    title: "Garbage Street",
    kind: "image",
    src: "/SAVE_20250328_034214.jpg",
    poster: "/walk-cycle-poster.jpg",
    description: "3D modeling of Garbage Street",
  },
  {
    id: "2",
    title: "Krishna",
    kind: "image",
    src: "/SAVE_20250711_021411.jpg",
    description: "2D drawing of krishna in photoshop",
  },
  {
    id: "3",
    title: "Old Cash Machine",
    kind: "image",
    src: "/SAVE_20250813_153447.jpg",
    description: "Old 3D cash machine create in 3DS max",
  },
  {
    id: "4",
    title: "Ghost Kitchen",
    kind: "image",
    src: "/SAVE_20250430_170257.jpg",
    description: "Horror Theme kitchen Created in Max",
  },
  {
    id: "5",
    title: "Dream Station",
    kind: "image",
    src: "/room render ps 1.jpg",
    description: "Where Imagination meet Passion, created in Maya",
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <Section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Portfolio / Showreel
          </h2>
          <a
            href="#contact"
            className="hidden md:inline-flex text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Section key={item.id} delay={idx * 0.06}>
              <motion.article
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative rounded-lg border border-white/10 overflow-hidden bg-white/5 hover:border-cyan-400/40 transition-colors cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <motion.img
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium text-slate-100">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-cyan-400/30 transition-colors" />
              </motion.article>
            </Section>
          ))}
        </div>
      </Section>

      {/* Lightbox with animation */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.kind === "video" ? (
                <video
                  src={selectedItem.src}
                  poster={selectedItem.poster}
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl mx-auto"
                />
              )}

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full hover:bg-black/80 transition"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
