import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Sparkles,
  Headphones,
  Map,
  Clock,
  Layers,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ITEMS = [
  {
    title: 'Student Friendly',
    description:
      'Designed for school students with kid-safe content and age-appropriate examples.',
    icon: GraduationCap,
    tone: 'from-sky-400 to-blue-500',
    soft: 'bg-sky-50 text-sky-600',
  },
  {
    title: 'Interactive Learning',
    description:
      'Tap, swipe, speak and play — lessons are designed to feel like a game.',
    icon: Sparkles,
    tone: 'from-violet-400 to-fuchsia-500',
    soft: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Audio Based Lessons',
    description:
      'Listen, repeat and refine pronunciation with native French audio.',
    icon: Headphones,
    tone: 'from-pink-400 to-rose-500',
    soft: 'bg-pink-50 text-pink-600',
  },
  {
    title: 'Easy Curriculum',
    description:
      'Clearly structured chapters that go from absolute beginner to advanced.',
    icon: Map,
    tone: 'from-amber-400 to-orange-500',
    soft: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Learn Anytime',
    description:
      'Offline lessons and PDFs mean students can learn anywhere, anytime.',
    icon: Clock,
    tone: 'from-emerald-400 to-teal-500',
    soft: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Structured Learning',
    description:
      'Every chapter ends with a quiz so progress is measured and rewarded.',
    icon: Layers,
    tone: 'from-cyan-400 to-blue-500',
    soft: 'bg-cyan-50 text-cyan-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Language World Canada"
          title="Built for students,"
          highlight="loved by teachers"
          description="We obsess over every detail so students stay motivated, teachers stay supported and parents see real progress."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition"
            >
              <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${it.tone} opacity-0 blur-3xl transition duration-500 group-hover:opacity-25`} />
              <div className="flex items-center gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${it.soft}`}>
                  <it.icon size={22} />
                </span>
                <h3 className="text-lg font-bold text-slate-900">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {it.description}
              </p>
              <div className={`mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r ${it.tone} bg-clip-text text-transparent`}>
                <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${it.tone}`} />
                Premium feature
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
