import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Headphones,
  Mic,
  PenTool,
  LineChart,
  GraduationCap,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const FEATURES = [
  {
    title: 'Interactive Lessons',
    description:
      'Tap, drag and speak through colourful lessons built around real classroom moments.',
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'PDF Learning Material',
    description:
      'Beautifully designed PDF notes for every chapter — perfect for revising offline.',
    icon: FileText,
    color: 'from-violet-500 to-fuchsia-500',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    title: 'Audio Lessons',
    description:
      'Train your ear with native French audio for every conversation and word.',
    icon: Headphones,
    color: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Teacher Audio',
    description:
      'Real teachers walk you through every chapter in clear, friendly audio you can replay anytime.',
    icon: Mic,
    color: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Grammar Learning',
    description:
      'Step-by-step rules with friendly examples, not boring textbook tables.',
    icon: PenTool,
    color: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Progress Tracking',
    description:
      'See your streak, XP and level grow as you complete each chapter.',
    icon: LineChart,
    color: 'from-purple-500 to-indigo-500',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'School-Friendly Learning',
    description:
      'Mapped to school syllabi so students learn what they actually need in class.',
    icon: GraduationCap,
    color: 'from-rose-500 to-pink-500',
    iconBg: 'bg-rose-100 text-rose-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Features"
          title="Everything students need to"
          highlight="master French"
          description="A complete learning toolkit — interactive lessons, teacher audio, PDFs and progress tracking — designed specifically for school students."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, idx) => (
            <FeatureCard key={f.title} {...f} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon: Icon, iconBg, color, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition"
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-0 blur-2xl transition duration-500 group-hover:opacity-30`}
      />
      <div className={`grid h-12 w-12 place-items-center rounded-2xl ${iconBg}`}>
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-400">
        <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
        <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          Learn more
        </span>
      </div>
    </motion.article>
  );
}
