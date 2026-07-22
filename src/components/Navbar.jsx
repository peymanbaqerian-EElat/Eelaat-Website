'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Music', href: '#music' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id || 'home');
          }
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'px-4 sm:px-6 lg:px-8' : 'px-0'}`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 px-5 py-4 transition-all duration-500 sm:px-8 lg:px-10 ${
          scrolled
            ? 'bg-black/60 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'bg-transparent shadow-none backdrop-blur-none'
        }`}
      >
        <a
          href="#home"
          className="text-[1rem] font-medium uppercase tracking-[0.45em] text-white transition duration-300 hover:brightness-125"
          style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
        >
          EElat
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');

            return (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2, opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="relative text-[0.8rem] uppercase tracking-[0.32em] text-white/65 transition duration-300 hover:text-white"
                style={{ opacity: isActive ? 1 : 0.65 }}
              >
                <span>{link.label}</span>
                <motion.span
                  className="pointer-events-none absolute left-1/2 top-full mt-2 h-[1px] rounded-full bg-white/80"
                  initial={false}
                  animate={{ width: isActive ? '100%' : 0, x: isActive ? '-50%' : '-50%' }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              </motion.a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition duration-300 hover:border-white/35 hover:text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0, opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="block h-[1px] w-4 bg-current"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="block h-[1px] w-4 bg-current"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0, opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="block h-[1px] w-4 bg-current"
            />
          </div>
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -16, pointerEvents: menuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 flex items-center justify-center bg-[#030303]/95 px-6 backdrop-blur-xl md:hidden"
      >
        <div className="flex w-full max-w-sm flex-col gap-4 text-center">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={menuOpen ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 12, filter: 'blur(6px)' }}
              transition={{ duration: 0.4, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
              className="text-[1rem] uppercase tracking-[0.35em] text-white/80"
              onClick={handleLinkClick}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}