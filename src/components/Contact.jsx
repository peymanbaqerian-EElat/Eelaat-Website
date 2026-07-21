'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionTitle
            eyebrow="Contact"
            title="Let the signal arrive"
            description="For collaborations, releases, or inquiries, reach out and begin a conversation."
          />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-6">
            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-white/50">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-white/50">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/30"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-[0.25em] text-white/50">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/30"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Send
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}