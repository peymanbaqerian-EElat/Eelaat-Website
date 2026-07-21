'use client';

import { motion } from 'framer-motion';

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Spotify', href: '#' },
  { label: 'Bandcamp', href: '#' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/10 bg-black/95 px-6 py-10 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.3em]">EElat</p>
          <p className="mt-2 text-sm text-white/60">© 2026 EElat. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="rounded-full border border-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-white/65 transition hover:border-white hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}