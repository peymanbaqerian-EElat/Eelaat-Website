'use client';

import { motion } from 'framer-motion';

const headlineLines = ['The Memory', 'Before', 'the Music'];

const bodyParagraphs = [
  'EElat was born from a simple belief: Music is not invented. It is remembered.',
  'Long before borders, languages and modern identities, the peoples of the Middle Lands shared mountains, rivers, deserts, winds and skies.',
  'Their stories survived through voices, rituals, silence and sound.',
  'EElat listens to those echoes. Rather than recreating the past, it searches for the living memory that still exists within landscapes, communities and everyday sounds.',
  'Each composition is an attempt to reconnect ancient memory with contemporary expression. Not nostalgia. Not reconstruction. But continuation.',
];

export default function About() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute right-[-4rem] top-[-3rem] h-[24rem] w-[24rem] rounded-full bg-[#5A4DFF]/8 blur-[140px]"
          animate={{ opacity: [0.06, 0.1, 0.06], scale: [0.96, 1.02, 0.98], x: [0, 8, -6, 0], y: [0, -6, 4, 0] }}
          transition={{ duration: 34, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-5rem] left-[-4rem] h-[20rem] w-[20rem] rounded-full bg-[#f1c27d]/8 blur-[140px]"
          animate={{ opacity: [0.05, 0.08, 0.05], scale: [0.98, 1.03, 0.97], x: [0, -5, 5, 0], y: [0, 5, -4, 0] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_60%,rgba(0,0,0,0.34)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1100px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[32rem]"
        >
          <p className="text-[0.72rem] uppercase tracking-[0.45em] text-white/60">About</p>

          <div className="mt-6 space-y-4">
            {headlineLines.map((line, index) => (
              <motion.h2
                key={line}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, delay: 0.12 * index, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl leading-[0.92] tracking-[0.02em] text-white sm:text-5xl md:text-[3.4rem] lg:text-[4rem]"
                style={{ fontFamily: '"Cinzel Decorative", "Iowan Old Style", "Palatino Linotype", Georgia, serif' }}
              >
                {line}
              </motion.h2>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[34rem]"
        >
          <div className="space-y-6">
            {bodyParagraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-[1.05rem] leading-8 text-white/70 sm:text-[1.1rem]"
                style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 border-l border-white/15 pl-5 text-[1.1rem] italic leading-8 text-white/80 sm:text-[1.15rem]"
            style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
          >
            “Music rising from the soil, carrying the memory of the Middle Lands.”
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}