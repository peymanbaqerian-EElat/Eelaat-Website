'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const albums = [
  {
    title: 'Silence Bloom',
    subtitle: 'Album placeholder · Ambient pulse',
    gradient: 'from-indigo-500/70 via-slate-700/40 to-black',
  },
  {
    title: 'Crystal Fire',
    subtitle: 'Album placeholder · Cinematic drift',
    gradient: 'from-fuchsia-500/70 via-violet-700/40 to-black',
  },
  {
    title: 'Afterglow',
    subtitle: 'Album placeholder · Soft ignition',
    gradient: 'from-cyan-500/70 via-slate-700/40 to-black',
  },
];

export default function Music() {
  return (
    <section id="music" className="bg-black px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Music"
          title="Modern sound, sculpted in shadow"
          description="A collection of atmospheric releases designed for late-night listening and cinematic presence."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {albums.map((album, index) => (
            <motion.article
              key={album.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className={`flex h-48 items-end rounded-[1.5rem] bg-gradient-to-br ${album.gradient} p-5`}>
                <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-white backdrop-blur-sm transition hover:bg-white/20">
                  Play
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-medium text-white">{album.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{album.subtitle}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:border-white hover:text-white">
                  Spotify
                </a>
                <a href="#" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:border-white hover:text-white">
                  Bandcamp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}