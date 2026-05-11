import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Sparkles, Star } from 'lucide-react';
import PhoneMockup from '../ui/PhoneMockup';
import GradientBlobs from '../ui/GradientBlobs';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-mesh pb-20 pt-32 sm:pt-40 lg:pb-28"
    >
      <GradientBlobs />
      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-7 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pill mx-auto lg:mx-0"
            >
              <Sparkles size={14} className="text-brand-purple" />
              #1 French Learning App for Students
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Learn{' '}
              <span className="relative inline-block">
                <span className="gradient-text">French Easily</span>
                <svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-1 left-0 w-full text-brand-purple/50"
                  fill="none"
                >
                  <path
                    d="M2 9 C 60 -1, 160 -1, 218 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              for School Students
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-balance text-base leading-relaxed text-slate-600 sm:text-lg lg:max-w-xl"
            >
              Language World Canada turns French into a daily habit students love.
              Bite-sized interactive lessons, native audio practice, smart
              quizzes and a school-friendly curriculum — all wrapped in a
              beautiful, premium experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <a href="#download" className="btn-primary w-full sm:w-auto">
                <Download size={18} />
                Download App
              </a>
              <a href="#features" className="btn-secondary w-full sm:w-auto">
                <Play size={16} />
                Watch Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:items-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[
                  'from-blue-400 to-violet-400',
                  'from-pink-400 to-rose-400',
                  'from-amber-300 to-orange-400',
                  'from-emerald-400 to-teal-400',
                ].map((g, i) => (
                  <span
                    key={i}
                    className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${g} text-[11px] font-bold text-white ring-2 ring-white`}
                  >
                    {['EM', 'SO', 'AL', 'JU'][i]}
                  </span>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center justify-center gap-0.5 sm:justify-start">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-700">
                    4.9
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-500">
                  Loved by 25,000+ students & teachers
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
            <div className="animate-float-slow">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
