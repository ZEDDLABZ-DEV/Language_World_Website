import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, BookOpen, Languages } from 'lucide-react';

export default function PhoneMockup({ className = '' }) {
  return (
    <div className={`relative mx-auto w-full max-w-[320px] sm:max-w-[360px] ${className}`}>
      <div className="relative rounded-[3rem] bg-slate-900 p-2.5 shadow-[0_40px_80px_-30px_rgba(79,70,229,0.55)] ring-1 ring-slate-800">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-white">
          {/* status bar inset with Dynamic-Island style notch */}
          <div className="relative h-7 w-full bg-white">
            <span className="absolute left-1/2 top-1/2 h-5 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900" />
          </div>
          <img
            src="/app-home.png"
            alt="Language World Canada app home screen"
            className="block h-auto w-full select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Floating badges — tuned to the visible app content */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute -left-6 top-24 hidden md:flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 shadow-card backdrop-blur"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
          <Sprout size={18} />
        </span>
        <div className="text-left">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Level</p>
          <p className="text-sm font-bold text-slate-800">Niveau 1 · A1</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="absolute -right-6 top-44 hidden md:flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 shadow-card backdrop-blur"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white">
          <BookOpen size={18} />
        </span>
        <div className="text-left">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Chapters</p>
          <p className="text-sm font-bold text-slate-800">18 to master</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute -bottom-4 left-1/2 hidden md:flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-white/90 px-4 py-2.5 shadow-card backdrop-blur"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-100 text-violet-600">
          <Languages size={18} />
        </span>
        <div className="text-left">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Bilingual</p>
          <p className="text-sm font-bold text-slate-800">English + Français</p>
        </div>
      </motion.div>
    </div>
  );
}
