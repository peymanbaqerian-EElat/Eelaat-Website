'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Particles Canvas */}
      <canvas
        id="particles-canvas"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[75vh]
            w-[75vh]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-3xl
            bg-[radial-gradient(circle,_rgba(70,110,255,0.18)_0%,_rgba(90,60,180,0.08)_30%,_transparent_70%)]
          "
        />
      </div>

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-6xl
            font-light
            tracking-[0.35em]
            sm:text-7xl
            md:text-8xl
            lg:text-[8rem]
            xl:text-[9rem]
          "
        >
          EElat
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-2xl space-y-2 text-base leading-8 text-white/70 md:text-lg"
        >
          <p>From silence, particles awaken.</p>
          <p>They gather, ignite, and become crystal fire.</p>
          <p>Every sound begins as light.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            mt-12
            rounded-full
            border
            border-white/15
            px-10
            py-4
            text-sm
            uppercase
            tracking-[0.35em]
            text-white
            transition-all
            duration-500
            hover:border-white
            hover:bg-white
            hover:text-black
          "
        >
          Enter
        </motion.button>
      </motion.div>

    </section>
  );
}