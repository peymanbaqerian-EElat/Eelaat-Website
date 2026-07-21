'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id="about" className="relative bg-black px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionTitle
            eyebrow="About"
            title="A luminous pulse in motion"
            description="EElat is a cinematic soundscape shaped by hush, glow, and momentum. It moves between stillness and eruption, carrying a minimalist elegance into every composition."
          />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            The work is built around atmosphere and precision — soft tension, deep contrast, and a sense of emergence that feels both intimate and monumental.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Each piece begins as a quiet impulse and expands into a luminous event, where light, rhythm, and memory become one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(255,255,255,0.03)] backdrop-blur-xl"
        >
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Atmosphere</p>
              <p className="mt-3 text-lg leading-8 text-white/80">
                Sparse textures. Slow ignition. A sense of space that breathes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Approach</p>
              <p className="mt-3 text-lg leading-8 text-white/80">
                Minimal forms, emotional depth, and a reverent focus on sound as light.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Presence</p>
              <p className="mt-3 text-lg leading-8 text-white/80">
                Designed to feel immersive, physical, and quietly unforgettable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}