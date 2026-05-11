import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Sparkles, Smartphone } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden rounded-4xl bg-gradient-brand p-8 text-white shadow-glow sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
            <div className="absolute right-1/4 top-1/3 h-60 w-60 rounded-full bg-sky-300/30 blur-3xl" />
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur">
                <Sparkles size={14} /> Available everywhere
              </span>
              <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Start your French journey today
              </h2>
              <p className="mt-3 max-w-xl text-balance text-sm leading-relaxed text-white/85 sm:text-base">
                Download Language World Canada on iOS and Android — your first chapter is free.
                No ads. No clutter. Just a beautiful, focused learning experience.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-2xl bg-black px-5 py-3.5 text-left transition hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  <Apple size={26} />
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-wider text-white/70">
                      Download on the
                    </p>
                    <p className="text-base font-bold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-2xl bg-black px-5 py-3.5 text-left transition hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  <PlayBadge />
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-wider text-white/70">
                      Get it on
                    </p>
                    <p className="text-base font-bold">Google Play</p>
                  </div>
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-6 text-xs font-semibold text-white/85">
                <span className="inline-flex items-center gap-2">
                  <Smartphone size={14} /> iOS 14+ & Android 8+
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={14} /> No ads, ever
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative mx-auto w-60 rounded-[2.5rem] bg-slate-900 p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-black/40"
              >
                <div className="overflow-hidden rounded-[2rem] bg-white">
                  <div className="relative h-6 w-full bg-white">
                    <span className="absolute left-1/2 top-1/2 h-4 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900" />
                  </div>
                  <img
                    src="/app-home.png"
                    alt="Language World Canada app home screen"
                    className="block h-auto w-full select-none"
                    draggable={false}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlayBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3.6 2.1a1 1 0 0 0-1.6.78V21.1a1 1 0 0 0 1.6.78L20 12 3.6 2.1Z"
        fill="url(#g)"
      />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F8EF7" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
