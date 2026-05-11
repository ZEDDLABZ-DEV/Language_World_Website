import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const SCREENS = [
  {
    title: 'Chapter Library',
    description: 'Browse 18+ chapters with bilingual titles — pick one and start learning.',
    image: '/app-home.png',
    accent: 'from-[#4F8EF7] to-[#8B5CF6]',
  },
  {
    title: 'PDF & Audio Lessons',
    description: 'Every chapter opens with rich PDF notes and a teacher-led audio lesson.',
    image: '/app-chapter.png',
    accent: 'from-[#8B5CF6] to-[#F472B6]',
  },
  {
    title: 'Audio Transcripts',
    description: 'Follow along with the full text of every audio lesson, line by line.',
    image: '/app-text.png',
    accent: 'from-[#22D3EE] to-[#4F8EF7]',
  },
];

export default function Screenshots() {
  const [index, setIndex] = useState(0);
  const visible = [
    SCREENS[(index - 1 + SCREENS.length) % SCREENS.length],
    SCREENS[index],
    SCREENS[(index + 1) % SCREENS.length],
  ];

  return (
    <section id="screenshots" className="section-padding relative overflow-hidden">
      <div className="container-page">
        <SectionHeading
          eyebrow="App Showcase"
          title="Beautifully crafted"
          highlight="for every screen"
          description="Take a peek inside the app — PDF lessons, teacher-led audio and a clean text transcript for every chapter."
        />

        <div className="relative mt-14">
          <div className="flex items-end justify-center gap-4 sm:gap-8">
            {visible.map((screen, i) => (
              <PhoneCard
                key={`${screen.title}-${i}`}
                screen={screen}
                position={i - 1}
                active={i === 1}
              />
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-3">
            <button
              onClick={() => setIndex((i) => (i - 1 + SCREENS.length) % SCREENS.length)}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-700 shadow-soft ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-card"
              aria-label="Previous screen"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1.5">
              {SCREENS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-gradient-brand' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to screen ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % SCREENS.length)}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-700 shadow-soft ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-card"
              aria-label="Next screen"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneCard({ screen, position, active }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screen.title + position}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: active ? 1 : 0.5,
          y: 0,
          scale: active ? 1 : 0.84,
        }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`relative ${active ? 'z-10' : 'hidden sm:block'}`}
      >
        <div className="relative">
          <div
            className={`absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br ${screen.accent} opacity-20 blur-3xl`}
          />
          <div className="relative w-[230px] rounded-[2.5rem] bg-slate-900 p-2 shadow-[0_30px_60px_-20px_rgba(79,70,229,0.45)] ring-1 ring-slate-800 sm:w-[260px]">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="relative h-6 w-full bg-white">
                <span className="absolute left-1/2 top-1/2 h-4 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900" />
              </div>
              <img
                src={screen.image}
                alt={screen.title}
                className="block h-[480px] w-full object-cover object-top select-none"
                draggable={false}
              />
            </div>
          </div>
          {active && (
            <div className="absolute -bottom-12 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl bg-white px-4 py-3 text-center shadow-card ring-1 ring-slate-100">
              <p className="text-sm font-bold text-slate-800">{screen.title}</p>
              <p className="text-[11px] text-slate-500">{screen.description}</p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
