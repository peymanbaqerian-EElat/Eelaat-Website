'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const headlineLines = ['Music from', 'the Memory', 'of the Middle Lands'];

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  size: index % 3 === 0 ? 'h-1.5 w-1.5' : index % 2 === 0 ? 'h-1 w-1' : 'h-[0.7rem] w-[0.7rem]',
  left: `${(index * 9 + 7) % 100}%`,
  top: `${(index * 13 + 5) % 100}%`,
  duration: 24 + (index % 5) * 6,
  delay: index * 0.35,
  xOffset: [0, 6, -4, 2, 0][index % 5],
  yOffset: [0, -8, 5, -3, 0][index % 5],
}));

const lineVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.8,
      delay: 0.2 + index * 0.16,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.8,
      delay: 1.05,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AmbientGlow({ className, duration = 30, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.03, scale: 0.95 }}
      animate={{
        opacity: [0.03, 0.06, 0.04, 0.05],
        scale: [0.95, 1.01, 0.98, 1],
        x: [0, 6, -4, 0],
        y: [0, -8, 4, 0],
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

function FloatingParticle({ left, top, size, duration, delay, xOffset, yOffset }) {
  return (
    <motion.span
      className={`pointer-events-none absolute rounded-full bg-white/80 ${size}`}
      style={{ left, top }}
      initial={{ opacity: 0.1, x: 0, y: 0 }}
      animate={{
        opacity: [0.1, 0.16, 0.12, 0.14],
        x: [0, xOffset, -xOffset / 1.5, xOffset / 2, 0],
        y: [0, yOffset, -yOffset / 1.5, yOffset / 2, 0],
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

  const contentOffset = shouldReduceMotion ? { x: 0, y: 0 } : { x: pointer.x * 8, y: pointer.y * 8 };
  const cursorLightOffset = shouldReduceMotion ? { x: 0, y: 0 } : { x: pointer.x * 10, y: pointer.y * 10 };

  return (
    <section
      className="relative isolate flex h-screen min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white"
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <AmbientGlow className="absolute right-[-7rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[#5A4DFF]/20 blur-[140px]" duration={40} delay={0.2} />
        <AmbientGlow className="absolute bottom-[-5rem] left-[-7rem] h-[24rem] w-[24rem] rounded-full bg-[#f6c27a]/10 blur-[140px]" duration={48} delay={1.4} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.16)_60%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 4px)',
        }}
        aria-hidden="true"
      />

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
            xOffset={particle.xOffset}
            yOffset={particle.yOffset}
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center sm:px-8 lg:px-12"
        style={contentOffset}
      >
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 0.72, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
            custom={1.15}
            whileHover={{ scale: 1.02, boxShadow: '0 0 0 1px rgba(255,255,255,0.16), 0 18px 44px rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full bg-white px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.35em] text-black transition-colors duration-500"
          >
            Listen
          </motion.a>

          <motion.a
            href="#manifesto"
            initial="hidden"
            animate="visible"
            variants={buttonVariant}
            custom={1.35}
            whileHover={{ scale: 1.01, borderColor: 'rgba(255,255,255,0.8)', backgroundColor: 'rgba(255,255,255,0.03)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full border border-white/20 px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/90 backdrop-blur-[2px] transition-colors duration-500"
          >
            Manifesto
          </motion.a>
        </div>
      </motion.div>

      {/* Cursor light */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, transparent 45%)',
          transform: `translate(${cursorLightOffset.x}px, ${cursorLightOffset.y}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.45em] text-white/60"
      >
        <div className="relative flex h-16 w-[1px] items-start justify-center rounded-full bg-white/20">
          <motion.span
            className="absolute top-0 h-2.5 w-2.5 rounded-full bg-white/70"
            animate={{ y: [0, 48, 0], opacity: [0.45, 0.95, 0.45] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}