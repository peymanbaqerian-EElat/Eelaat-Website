'use client';

import { motion, useReducedMotion } from 'framer-motion';

const particles = [
  { x: '12%', y: '24%', size: 5, duration: 24, delay: 0 },
  { x: '21%', y: '72%', size: 3, duration: 28, delay: 4 },
  { x: '31%', y: '41%', size: 4, duration: 22, delay: 7 },
  { x: '43%', y: '82%', size: 6, duration: 30, delay: 2 },
  { x: '53%', y: '18%', size: 3, duration: 26, delay: 9 },
  { x: '61%', y: '62%', size: 5, duration: 29, delay: 5 },
  { x: '72%', y: '33%', size: 4, duration: 25, delay: 1 },
  { x: '82%', y: '76%', size: 3, duration: 27, delay: 8 },
  { x: '91%', y: '47%', size: 5, duration: 31, delay: 3 },
];

const reveal = {
  hidden: { opacity: 0, y: 28, filter: 'blur(14px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const contentReveal = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : reveal;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true">
        <motion.div
          className="hero-light hero-light--left"
          animate={reduceMotion ? undefined : { x: ['-3%', '5%', '-3%'], y: ['-2%', '4%', '-2%'], scale: [1, 1.08, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-light hero-light--right"
          animate={reduceMotion ? undefined : { x: ['3%', '-6%', '3%'], y: ['4%', '-3%', '4%'], scale: [1.06, 0.98, 1.06] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-fog hero-fog--one"
          animate={reduceMotion ? undefined : { x: ['-8%', '7%', '-8%'], opacity: [0.34, 0.52, 0.34] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-fog hero-fog--two"
          animate={reduceMotion ? undefined : { x: ['7%', '-9%', '7%'], y: ['2%', '-4%', '2%'], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 42, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-glow"
          animate={reduceMotion ? undefined : { opacity: [0.42, 0.68, 0.42], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="hero-particles">
          {particles.map((particle, index) => (
            <motion.span
              className="hero-particle"
              key={`${particle.x}-${particle.y}`}
              style={{
                '--particle-x': particle.x,
                '--particle-y': particle.y,
                '--particle-size': `${particle.size}px`,
              }}
              animate={reduceMotion ? undefined : {
                x: [0, index % 2 === 0 ? 18 : -16, 0],
                y: [0, -28 - index * 2, 0],
                opacity: [0.08, 0.42, 0.08],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.16, delayChildren: 0.25 }}
      >
        <motion.p
          className="hero-kicker"
          variants={contentReveal}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          EElat
        </motion.p>

        <motion.h1
          id="hero-title"
          variants={contentReveal}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Music from the Memory</span>
          <span className="hero-title-secondary">of the Middle Lands</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          variants={contentReveal}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Ancient echoes. Modern sound.
        </motion.p>

        <motion.a
          className="hero-cta"
          href="#music"
          variants={contentReveal}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduceMotion ? undefined : { y: -3, scale: 1.025 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        >
          <span>Listen</span>
        </motion.a>
      </motion.div>

      <motion.a
        className="hero-scroll"
        href="#about"
        aria-label="Scroll to discover more"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
      >
        <span className="hero-scroll-label">Scroll</span>
        <motion.span
          className="hero-scroll-line"
          animate={reduceMotion ? undefined : { scaleY: [0.5, 1, 0.5], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  );
}
