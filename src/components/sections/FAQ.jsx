import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const FAQS = [
  {
    q: 'Who is Language World Canada designed for?',
    a: 'Language World Canada is built for school students from ages 8 and up, as well as teachers and parents who want a structured, school-aligned way to learn French at home.',
  },
  {
    q: 'Is the app free to download?',
    a: 'Yes! You can download Language World Canada for free on the App Store and Google Play. The Beginner level is free forever, and a premium plan unlocks all advanced chapters.',
  },
  {
    q: 'Does the app work offline?',
    a: 'Absolutely. Audio lessons, PDF material and downloaded chapters all work offline so students can learn on the bus, at home or in school.',
  },
  {
    q: 'How is the curriculum structured?',
    a: 'The curriculum is organised in 4 levels — Beginner (A1), Elementary (A2), Intermediate (B1) and Advanced (B2-C1). Each level contains chapters with lessons, audio, PDFs and quizzes.',
  },
  {
    q: 'Can teachers track student progress?',
    a: 'Yes. Teachers can create classroom groups, assign chapters and view student progress, time spent and quiz scores from a clean dashboard.',
  },
  {
    q: 'Is there pronunciation help?',
    a: 'Every lesson includes native French audio, slow-speed playback and a built-in pronunciation drill so students can practice the French accent confidently.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Got questions?"
          highlight="We've got answers"
          description="Everything you need to know about Language World Canada. Can't find what you're looking for? Reach out to our team."
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {FAQS.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className={`overflow-hidden rounded-3xl bg-white ring-1 transition ${
                open === i ? 'ring-slate-200 shadow-card' : 'ring-slate-100 shadow-soft'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="text-sm font-bold text-slate-900 sm:text-base">
                  {f.q}
                </span>
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all ${
                    open === i
                      ? 'rotate-45 bg-gradient-brand text-white shadow-glow-blue'
                      : 'bg-slate-50 text-slate-500'
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
