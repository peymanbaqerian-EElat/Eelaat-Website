'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const items = [
  { label: 'Stillness', gradient: 'from-zinc-700/70 via-slate-800/40 to-black' },
  { label: 'Echo', gradient: 'from-purple-700/70 via-indigo-800/40 to-black' },
  { label: 'Lightfall', gradient: 'from-cyan-700/70 via-slate-700/40 to-black' },
  { label: 'Afterimage', gradient: 'from-amber-600/70 via-orange-900/40 to-black' },
  { label: 'Velvet', gradient: 'from-fuchsia-700/70 via-violet-900/40 to-black' },
  { label: 'Aura', gradient: 'from-slate-500/70 via-zinc-800/40 to-black' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Gallery"
          title="Frames of shadow and glow"
          description="A visual archive of atmosphere, texture, and stillness — designed to feel cinematic and restrained."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl"
            >
              <div className={`aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br ${item.gradient} p-5`}>
                <div className="flex h-full items-end rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/85">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}