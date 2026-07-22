'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const headlineLines = ['Music from', 'the Memory', 'of the Middle Lands'];

const particles = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  size: index % 3 === 0 ? 'h-1.5 w-1.5' : index % 2 === 0 ? 'h-1 w-1' : 'h-[0.7rem] w-[0.7rem]',
  left: `${(index * 7 + 9) % 100}%`,
  top: `${(index * 11 + 3) % 100}%`,
  duration: 8 + (index % 7) * 2,
  delay: index * 0.25,
}));

const lineVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      delay: 0.35 + index * 0.16,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      delay: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AmbientGlow({ className, duration = 18, delay = 0, scale = 1 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.04, scale: 0.95 }}
      animate={{
        opacity: [0.04, 0.1, 0.07, 0.05],
        scale: [0.95, 1.04, 0.98, 1],
        x: [0, 10, -8, 0],
        y: [0, -14, 10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
      aria-hidden="true"
      style={{ transformOrigin: 'center' }}
    />
  );
}

function FloatingParticle({ left, top, size, duration, delay }) {
  return (
    <motion.span
      className={`pointer-events-none absolute rounded-full bg-white/90 ${size}`}
      style={{ left, top }}
      initial={{ opacity: 0.2, x: 0, y: 0 }}
      animate={{
        opacity: [0.2, 0.8, 0.35, 0.22],
        x: [0, 18, -12, 8, 0],
        y: [0, -16, 10, -8, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x: relativeX, y: relativeY });
  };

  const contentOffset = shouldReduceMotion
    ? { x: 0, y: 0 }
    : { x: pointer.x * 7, y: pointer.y * 7 };

  return (
    <section
      className="relative isolate flex h-screen min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white"
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <AmbientGlow className="absolute right-[-8rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-white/10 blur-[120px]" duration={20} delay={0.2} />
        <AmbientGlow className="absolute bottom-[-6rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-violet-400/10 blur-[120px]" duration={22} delay={1.1} />
        <AmbientGlow className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[90px]" duration={16} delay={0.8} />
      </div>

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            left={particle.left}
            top={particle.top}
            size={particle.size}
            duration={particle.duration}
            delay={particle.delay}
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center sm:px-8 lg:px-12"
        style={contentOffset}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-[0.7rem] uppercase tracking-[0.65em] text-white/70"
        >
          EELAT
        </motion.p>

        <div className="space-y-4 sm:space-y-5">
          {headlineLines.map((line, index) => (
            <motion.h1
              key={line}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={lineVariant}
              className="font-serif text-5xl leading-[0.9] tracking-[0.02em] text-white sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.4rem]"
              style={{ fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif' }}
            >
              {line}
            </motion.h1>
          ))}
        </div>

        <motion.p
          variants={paragraphVariant}
          initial="hidden"
          animate="visible"
          className="mt-8 max-w-[36rem] text-base leading-8 text-white/70 sm:text-lg"
        >
          Ancient echoes. Modern sound. Living memory.
        </motion.p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <motion.a
            href="#music"
            initial="hidden"
            animate="visible"
            variants={buttonVariant}
            custom={1.2}
            whileHover={{ scale: 1.03, boxShadow: '0 0 0 1px rgba(255,255,255,0.12), 0 18px 45px rgba(255,255,255,0.12)' }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-white px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.35em] text-black transition-colors duration-300"
          >
            Listen
          </motion.a>

          <motion.a
            href="#manifesto"
            initial="hidden"
            animate="visible"
            variants={buttonVariant}
            custom={1.4}
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.9)' }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/20 px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/90 transition-colors duration-300"
          >
            Manifesto
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.7rem] uppercase tracking-[0.45em] text-white/60"
      >
        <motion.div
          className="h-16 w-px bg-white/50"
          animate={{ y: [0, 10, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}