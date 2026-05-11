import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  Hand,
  Hash,
  MessagesSquare,
  BookText,
  Headphones,
  Mic,
  BookOpen,
  Gamepad2,
  FileText,
  PlayCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const LEVELS = [
  {
    id: 'beginner',
    name: 'Beginner',
    code: 'A1',
    tag: 'Start here',
    summary:
      'First touch with the French language — perfect for absolute beginners and young learners.',
    color: 'from-sky-400 to-blue-500',
    soft: 'bg-sky-50',
    accent: 'text-sky-600',
    chapters: 12,
    hours: 8,
  },
  {
    id: 'elementary',
    name: 'Elementary',
    code: 'A2',
    tag: 'Build confidence',
    summary:
      'Form short sentences, talk about your day, your family and your school routine.',
    color: 'from-violet-400 to-fuchsia-500',
    soft: 'bg-violet-50',
    accent: 'text-violet-600',
    chapters: 14,
    hours: 12,
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    code: 'B1',
    tag: 'Speak fluently',
    summary:
      'Express opinions, narrate stories and understand everyday French conversations.',
    color: 'from-pink-400 to-rose-500',
    soft: 'bg-rose-50',
    accent: 'text-rose-600',
    chapters: 16,
    hours: 18,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    code: 'B2 → C1',
    tag: 'Master it',
    summary:
      'Refine grammar, expand vocabulary and prepare for school exams & certifications.',
    color: 'from-amber-400 to-orange-500',
    soft: 'bg-amber-50',
    accent: 'text-amber-600',
    chapters: 18,
    hours: 24,
  },
];

const TOPICS = [
  {
    title: 'Greetings & Introduction',
    description: 'Bonjour, comment ça va? Learn how to start conversations.',
    type: 'lesson',
    icon: Hand,
    duration: '15 min',
  },
  {
    title: 'Numbers & Vocabulary',
    description: 'Counting, dates, age, prices and essential everyday words.',
    type: 'pdf',
    icon: Hash,
    duration: '8 pages',
  },
  {
    title: 'Daily Conversations',
    description: 'Role-play real classroom and home situations.',
    type: 'lesson',
    icon: MessagesSquare,
    duration: '22 min',
  },
  {
    title: 'Grammar Basics',
    description: 'Articles, verbs and sentence building made simple.',
    type: 'pdf',
    icon: BookText,
    duration: '12 pages',
  },
  {
    title: 'Listening Practice',
    description: 'Native audio dialogues with adjustable speed.',
    type: 'audio',
    icon: Headphones,
    duration: '10 tracks',
  },
  {
    title: 'Pronunciation',
    description: 'Master the French accent with guided audio drills.',
    type: 'audio',
    icon: Mic,
    duration: '18 min',
  },
  {
    title: 'Reading Exercises',
    description: 'Short stories and articles to grow your reading skills.',
    type: 'lesson',
    icon: BookOpen,
    duration: '20 min',
  },
  {
    title: 'Interactive Activities',
    description: 'Games and quizzes to test your knowledge.',
    type: 'quiz',
    icon: Gamepad2,
    duration: '5 quizzes',
  },
];

export default function Curriculum() {
  const [active, setActive] = useState(LEVELS[0].id);
  const [openChapter, setOpenChapter] = useState(0);
  const current = LEVELS.find((l) => l.id === active);

  return (
    <section id="curriculum" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-60"
      />

      <div className="container-page">
        <SectionHeading
          eyebrow="Curriculum"
          title="A structured path from"
          highlight="Beginner to Advanced"
          description="Every level is broken into bite-sized chapters with lessons, audio, PDFs and interactive activities. Pick a level to explore."
        />

        {/* Level selector */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEVELS.map((level, i) => (
            <motion.button
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              onClick={() => {
                setActive(level.id);
                setOpenChapter(0);
              }}
              className={`group relative overflow-hidden rounded-3xl p-5 text-left ring-1 transition-all duration-300 ${
                active === level.id
                  ? 'bg-white shadow-card ring-slate-200 -translate-y-1'
                  : 'bg-white/70 ring-slate-100 hover:-translate-y-1 hover:shadow-soft'
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${level.color} transition-opacity ${
                  active === level.id ? 'opacity-100' : 'opacity-40'
                }`}
              />
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full ${level.soft} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${level.accent}`}
                >
                  {level.code}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {level.tag}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-900">
                {level.name}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                {level.summary}
              </p>
              <div className="mt-4 flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <BookOpen size={12} /> {level.chapters} chapters
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} /> {level.hours}h
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Level details */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Left – overview card */}
          <div className="relative overflow-hidden rounded-4xl bg-white p-7 shadow-card ring-1 ring-slate-100 sm:p-9">
            <div
              className={`absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${current.color} opacity-20 blur-3xl`}
            />
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br ${current.color} px-3 py-1 text-xs font-bold text-white shadow-glow-blue`}
              >
                {current.code} · {current.name}
              </span>
              <span className="pill !py-1 !text-[10px]">
                {current.chapters} Chapters · {current.hours}h
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {current.name} learning track
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
              {current.summary}
            </p>

            {/* Topic chips grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {TOPICS.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group flex items-start gap-3 rounded-2xl bg-slate-50/80 p-3 ring-1 ring-slate-100 transition hover:bg-white hover:shadow-soft"
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${current.color} text-white shadow-glow-blue`}
                  >
                    <t.icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">{t.title}</p>
                    <p className="line-clamp-2 text-[11px] leading-snug text-slate-500">
                      {t.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right – accordion of chapters */}
          <div className="flex flex-col gap-3">
            {TOPICS.slice(0, 5).map((t, i) => (
              <ChapterAccordion
                key={t.title}
                index={i}
                topic={t}
                level={current}
                isOpen={openChapter === i}
                onToggle={() => setOpenChapter(openChapter === i ? -1 : i)}
              />
            ))}
            <div className="mt-1 flex items-center justify-between rounded-2xl bg-gradient-brand-soft p-4 ring-1 ring-slate-200">
              <div>
                <p className="text-sm font-bold text-slate-800">
                  + {current.chapters - 5} more chapters in the app
                </p>
                <p className="text-xs text-slate-500">
                  Open the app to view the complete syllabus.
                </p>
              </div>
              <a href="#download" className="btn-primary !py-2.5 !px-4 text-xs">
                Open App
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ChapterAccordion({ index, topic, level, isOpen, onToggle }) {
  const typeMeta = {
    lesson: {
      label: 'Lesson',
      icon: PlayCircle,
      pill: 'bg-blue-50 text-blue-600',
    },
    pdf: {
      label: 'PDF',
      icon: FileText,
      pill: 'bg-violet-50 text-violet-600',
    },
    audio: {
      label: 'Audio',
      icon: Headphones,
      pill: 'bg-pink-50 text-pink-600',
    },
    quiz: {
      label: 'Quiz',
      icon: Gamepad2,
      pill: 'bg-amber-50 text-amber-600',
    },
  };
  const meta = typeMeta[topic.type];
  const TypeIcon = meta.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`overflow-hidden rounded-3xl bg-white ring-1 transition ${
        isOpen ? 'shadow-card ring-slate-200' : 'shadow-soft ring-slate-100'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        <span className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Chapter
          </span>
          <span
            className={`mt-0.5 inline-grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${level.color} text-sm font-extrabold text-white shadow-glow-blue`}
          >
            {index + 1}
          </span>
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-bold text-slate-900 sm:text-base">
              {topic.title}
            </p>
            <span
              className={`hidden items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider sm:inline-flex ${meta.pill}`}
            >
              <TypeIcon size={11} /> {meta.label}
            </span>
          </div>
          <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
            {topic.description}
          </p>
        </div>
        <span
          className={`ml-2 grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-500 transition ${
            isOpen ? 'rotate-180 bg-gradient-brand text-white' : ''
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-3 px-5 pb-5 sm:grid-cols-2">
              {topic.type === 'audio' && (
                <AudioCard level={level} title={topic.title} duration={topic.duration} />
              )}
              {topic.type === 'pdf' && (
                <PdfCard title={topic.title} pages={topic.duration} />
              )}
              {topic.type === 'lesson' && (
                <LessonCard
                  level={level}
                  title={topic.title}
                  duration={topic.duration}
                />
              )}
              {topic.type === 'quiz' && (
                <QuizCard level={level} title={topic.title} count={topic.duration} />
              )}
              <div className="flex flex-col justify-between gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <div className="flex flex-col gap-2 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    Step-by-step explanations
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    Native audio for every word
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    Quick practice quiz at the end
                  </span>
                </div>
                <a href="#download" className="btn-secondary !py-2 !px-4 text-xs">
                  Try this chapter
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function LessonCard({ level, title, duration }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-slate-100 shadow-soft">
      <div className="flex items-center gap-3">
        <button
          className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${level.color} text-white shadow-glow-blue transition hover:scale-105`}
          aria-label="Play lesson"
        >
          <PlayCircle size={22} />
        </button>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Interactive Lesson
          </p>
          <p className="truncate text-sm font-bold text-slate-800">{title}</p>
          <p className="text-[11px] text-slate-500">{duration}</p>
        </div>
      </div>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full w-1/3 rounded-full bg-gradient-to-r ${level.color}`} />
      </div>
    </div>
  );
}

function PdfCard({ title, pages }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-100 shadow-soft">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-violet-600">
        <FileText size={22} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          PDF Material
        </p>
        <p className="truncate text-sm font-bold text-slate-800">{title}</p>
        <p className="text-[11px] text-slate-500">{pages} · A4 printable</p>
      </div>
      <button className="rounded-xl bg-violet-50 px-3 py-1.5 text-[11px] font-bold text-violet-600">
        Download
      </button>
    </div>
  );
}

function AudioCard({ level, title, duration }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100 shadow-soft">
      <div className="flex items-center gap-3">
        <button
          className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${level.color} text-white shadow-glow-blue`}
          aria-label="Play audio"
        >
          <PlayCircle size={22} />
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Audio Track
          </p>
          <p className="truncate text-sm font-bold text-slate-800">{title}</p>
          <p className="text-[11px] text-slate-500">{duration}</p>
        </div>
      </div>
      <div className="mt-3 flex items-end gap-1">
        {[6, 12, 9, 16, 22, 18, 14, 20, 11, 17, 8, 13, 19, 10, 15, 7, 12, 18, 9, 14].map(
          (h, i) => (
            <span
              key={i}
              style={{ height: `${h * 1.2}px` }}
              className={`w-1 rounded-full ${
                i < 8 ? `bg-gradient-to-t ${level.color}` : 'bg-slate-200'
              }`}
            />
          )
        )}
      </div>
    </div>
  );
}

function QuizCard({ level, title, count }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-100 shadow-soft">
      <span
        className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${level.color} text-white shadow-glow-blue`}
      >
        <Gamepad2 size={22} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Quiz Set
        </p>
        <p className="truncate text-sm font-bold text-slate-800">{title}</p>
        <p className="text-[11px] text-slate-500">{count}</p>
      </div>
      <button className="rounded-xl bg-amber-50 px-3 py-1.5 text-[11px] font-bold text-amber-600">
        Start
      </button>
    </div>
  );
}
