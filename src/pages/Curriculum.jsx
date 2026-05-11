import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  BarChart3,
  Users,
  UserPlus,
  RefreshCcw,
  ChevronDown,
  CheckCircle2,
  Building2,
  School,
  RotateCcw,
  Sparkles,
  Info,
  Clock,
  GraduationCap,
  Activity,
  Languages,
  Mic,
  ShieldCheck,
  BookOpenCheck,
  Building,
  GitBranch,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const STRUCTURE_CARDS = [
  {
    icon: Users,
    title: 'Mixed Proficiency Classrooms',
    body:
      'Students at different proficiency stages learn within the same cohort. The level system adapts to varied starting points.',
    color: 'from-sky-400 to-blue-500',
    soft: 'bg-sky-50',
    accent: 'text-sky-600',
  },
  {
    icon: UserPlus,
    title: 'New Student Entry',
    body:
      'Students joining mid-cycle integrate at appropriate levels. No requirement to start from the beginning.',
    color: 'from-violet-400 to-fuchsia-500',
    soft: 'bg-violet-50',
    accent: 'text-violet-600',
  },
  {
    icon: RefreshCcw,
    title: 'Continuous Rollout',
    body:
      'Multi-year implementation without restarting. Each academic year builds on the previous, not replaces it.',
    color: 'from-pink-400 to-rose-500',
    soft: 'bg-rose-50',
    accent: 'text-rose-600',
  },
];

const STAGES = [
  {
    id: 'foundations',
    range: '1–2',
    title: 'Foundations',
    summary: 'Building blocks of French comprehension',
    color: 'from-sky-400 to-blue-500',
    soft: 'bg-sky-50',
    accent: 'text-sky-600',
    capabilities: [
      'Recognition of French sounds, phonetic patterns, and basic pronunciation structures',
      'Comprehension of simple spoken instructions and classroom vocabulary',
      'Ability to identify and respond to common greetings and courtesies',
      'Initial reading of basic French text with phonetic awareness',
    ],
    skills: [
      { label: 'Reading', body: 'Letter-sound correspondence, basic word recognition' },
      { label: 'Listening', body: 'Familiar phrases, simple instructions' },
      { label: 'Speaking', body: 'Repetition, basic responses, pronunciation fundamentals' },
      { label: 'Comprehension', body: 'Context-based understanding of familiar topics' },
    ],
    outcome:
      'Students develop comfort with French sounds and basic classroom interactions. Early positive experiences build foundation for continued learning.',
  },
  {
    id: 'daily-life',
    range: '3–4',
    title: 'Daily Life & Expression',
    summary: 'Communicating in everyday contexts',
    color: 'from-violet-400 to-fuchsia-500',
    soft: 'bg-violet-50',
    accent: 'text-violet-600',
    capabilities: [
      'Expression of personal information, preferences, and simple opinions',
      'Understanding of conversations about daily routines and familiar environments',
      'Reading comprehension of short, straightforward texts on known subjects',
      'Ability to construct simple sentences and ask basic questions',
    ],
    skills: [
      { label: 'Reading', body: 'Short passages, familiar vocabulary in context' },
      { label: 'Listening', body: 'Conversations at measured pace, main idea extraction' },
      { label: 'Speaking', body: 'Personal expression, simple descriptions, basic dialogue' },
      { label: 'Comprehension', body: 'Inference from context, recognition of key information' },
    ],
    outcome:
      'Students begin using French for real communication. Self-expression emerges alongside growing comprehension abilities.',
  },
  {
    id: 'functional',
    range: '5–6',
    title: 'Functional Usage',
    summary: 'Applying French in structured contexts',
    color: 'from-pink-400 to-rose-500',
    soft: 'bg-rose-50',
    accent: 'text-rose-600',
    capabilities: [
      'Participation in discussions on familiar academic and social topics',
      'Comprehension of authentic materials adapted for language learners',
      'Written expression with developing accuracy and range',
      'Oral communication that conveys meaning clearly despite imperfections',
    ],
    skills: [
      { label: 'Reading', body: 'Longer texts, varied genres, increasing complexity' },
      { label: 'Listening', body: 'Natural speech patterns, varied accents, implicit meaning' },
      { label: 'Speaking', body: 'Extended responses, narration, opinion expression' },
      { label: 'Comprehension', body: 'Understanding unstated implications, cultural context' },
    ],
    outcome:
      'Students use French as a tool for learning and expression. Communication becomes purposeful rather than purely academic.',
  },
  {
    id: 'fluency',
    range: '7–8',
    title: 'Fluency & Exam Readiness',
    summary: 'Proficiency for academic and real-world application',
    color: 'from-amber-400 to-orange-500',
    soft: 'bg-amber-50',
    accent: 'text-amber-600',
    capabilities: [
      'Engagement with complex written and spoken French across varied domains',
      'Clear, well-structured expression of ideas in both speech and writing',
      'Comprehension of nuance, tone, and implicit meaning in authentic content',
      'Readiness for standardized language assessments and continued study',
    ],
    skills: [
      { label: 'Reading', body: 'Authentic texts, literature excerpts, academic materials' },
      { label: 'Listening', body: 'Native-speed content, media, lectures, varied registers' },
      { label: 'Speaking', body: 'Spontaneous conversation, argumentation, presentation' },
      { label: 'Comprehension', body: 'Abstract concepts, cultural subtleties, complex structures' },
    ],
    outcome:
      'Students operate in French with independence. Language becomes a genuine capability rather than a subject of study.',
  },
];

const YEARS = [
  {
    tag: 'Y1',
    title: 'Foundation Year',
    body:
      'Initial cohort begins at Level 1. System and teacher training established.',
    levels: [1],
    cohorts: '1 active cohort',
  },
  {
    tag: 'Y2',
    title: 'First Progression',
    body: 'Original cohort advances to Level 2. New cohort begins at Level 1.',
    levels: [1, 2],
    cohorts: '2 active cohorts',
  },
  {
    tag: 'Y3',
    title: 'Parallel Tracks',
    body: 'Multiple cohorts operating simultaneously across three levels.',
    levels: [1, 2, 3],
    cohorts: '3 active cohorts',
  },
  {
    tag: 'Y4+',
    title: 'Full Operation',
    body:
      'Continuous intake and progression. All levels active within the institution.',
    levels: [1, 2, 3, 4, 5, 6, 7, 8],
    cohorts: '8 active cohorts',
  },
];

const STACKING_NOTES = [
  {
    icon: School,
    title: 'Same Institution',
    body:
      'One school, one framework. Multiple cohorts progress through the system simultaneously.',
  },
  {
    icon: RotateCcw,
    title: 'No Reset Required',
    body:
      'Each academic year builds on the previous. No starting over when new cohorts join.',
  },
  {
    icon: GitBranch,
    title: 'Flexible Entry',
    body:
      'Students can enter the system at appropriate levels regardless of when the school adopted the program.',
  },
];

const EXPECTATIONS = [
  {
    icon: Info,
    title: 'A1–A2 Is Not Fluency',
    body:
      'Initial levels establish comprehension and basic communication. These are essential foundations—not end goals. Students at A1–A2 can handle routine exchanges but are not independently proficient.',
  },
  {
    icon: Clock,
    title: 'B1–B2 Requires Time',
    body:
      'Functional independence in a language requires sustained exposure over years, not months. There are no shortcuts to genuine proficiency. Consistency and continuity are the primary factors.',
  },
  {
    icon: GraduationCap,
    title: 'Early Start Matters Most',
    body:
      'Beginning French instruction in early grades yields better long-term results than intensive later introduction. Younger learners develop phonetic sensitivity and natural acquisition patterns.',
  },
  {
    icon: Activity,
    title: 'Acquisition Is Cumulative',
    body:
      'Language proficiency builds through accumulated exposure and practice. Gaps in instruction create setbacks that compound. Consistent, multi-year programs outperform sporadic intensive approaches.',
  },
];

const DELIVERY_LAYERS = [
  {
    step: '1',
    title: 'French',
    tagline: 'Primary instructional content in target language',
    body:
      'All curriculum content, exercises, and assessments presented in French as the medium of instruction.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    step: '2',
    title: 'Pronunciation Guide',
    tagline: 'Phonetic support for accurate delivery',
    body:
      'Systematic pronunciation notation enables teachers to model correct French sounds without native fluency.',
    color: 'from-violet-400 to-fuchsia-500',
  },
  {
    step: '3',
    title: 'English',
    tagline: 'Instructional guidance and explanations',
    body:
      'Teacher notes, concept explanations, and classroom management guidance in English for clarity.',
    color: 'from-pink-400 to-rose-500',
  },
];

const DELIVERY_BENEFITS = [
  {
    icon: CheckCircle2,
    title: 'No French Teacher Required',
    body:
      'English-medium teachers can deliver the curriculum effectively using built-in pronunciation support and structured lesson guides.',
  },
  {
    icon: ShieldCheck,
    title: 'Consistent Quality',
    body:
      'System-led methodology ensures uniform delivery standards regardless of individual teacher background or experience.',
  },
  {
    icon: BookOpenCheck,
    title: 'Reduced Training Burden',
    body:
      'Teachers learn to operate within the system rather than developing independent French teaching methodology.',
  },
  {
    icon: Building,
    title: 'Institutional Resilience',
    body:
      'Teacher transitions do not disrupt program continuity. New teachers integrate into the existing system.',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Curriculum() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <article className="relative isolate">
      <Hero />
      <StructureSection />
      <OutcomesSection />
      <StackingSection />
      <ExpectationsSection />
      <DeliverySection />
      <BottomCTA />
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] bg-mesh opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl"
      />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-soft ring-1 ring-slate-200/70 backdrop-blur transition hover:-translate-x-0.5 hover:text-slate-900"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </motion.div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="pill"
          >
            <Sparkles size={12} className="text-brand-purple" />
            Curriculum Framework
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Levels, Not <span className="gradient-text">Classes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 text-balance text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Our curriculum operates on eight progressive levels—independent of
            rigid grade structures. This allows schools to implement French
            instruction that adapts to institutional realities, not the other
            way around.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#outcomes" className="btn-primary">
              Explore the Levels
              <ArrowDown size={16} />
            </a>
            <Link to="/#contact" className="btn-secondary">
              Request a Proposal
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 1 – Curriculum Structure                                    */
/* ------------------------------------------------------------------ */

function StructureSection() {
  return (
    <section id="structure" className="section-padding relative overflow-hidden">
      <div className="container-page">
        <SectionHead
          eyebrow="Curriculum Structure"
          title="A path of"
          highlight="eight progressive levels"
          description="Structured progression from foundation to fluency readiness — designed to fit the realities of an institution rather than the limits of a calendar."
          align="left"
        />

        {/* Eight Progressive Levels card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-4xl bg-gradient-brand p-px shadow-glow"
        >
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-slate-900 px-6 py-7 sm:px-10 sm:py-10">
            {/* Decorative dots */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-brand opacity-30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-pink/30 opacity-30 blur-3xl"
            />

            <div className="relative flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur">
                <BarChart3 size={22} />
              </span>
              <div>
                <p className="text-base font-bold text-white sm:text-lg">
                  Eight Progressive Levels
                </p>
                <p className="text-xs font-medium text-white/60 sm:text-sm">
                  Structured progression from foundation to fluency readiness
                </p>
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-4 gap-2 sm:grid-cols-8 sm:gap-3">
              {Array.from({ length: 8 }).map((_, i) => {
                const isAdvanced = i >= 6;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className={`grid h-16 w-full place-items-center rounded-2xl text-lg font-extrabold text-white shadow-glow-blue sm:h-20 ${
                        isAdvanced
                          ? 'bg-gradient-to-br from-brand-purple to-brand-purple-deep'
                          : 'bg-gradient-to-br from-brand-blue to-brand-blue-deep'
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                      Level {i + 1}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 3 feature cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STRUCTURE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-glow-blue sm:p-7"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.color}`}
              />
              <span
                className={`inline-grid h-11 w-11 place-items-center rounded-2xl ${card.soft} ${card.accent}`}
              >
                <card.icon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 – Progressive Outcomes                                    */
/* ------------------------------------------------------------------ */

function OutcomesSection() {
  const [openId, setOpenId] = useState(STAGES[0].id);

  return (
    <section
      id="outcomes"
      className="relative overflow-hidden bg-gradient-to-b from-surface-50 via-white to-surface-50 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-mesh opacity-50"
      />
      <div className="container-page">
        <SectionHead
          eyebrow="Progressive Outcomes"
          title="What each"
          highlight="stage develops"
          description="Each level group builds distinct language capabilities. Outcomes are defined by what students can do—not by content coverage."
        />

        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-4">
          {STAGES.map((stage, i) => (
            <StageAccordion
              key={stage.id}
              stage={stage}
              index={i}
              isOpen={openId === stage.id}
              onToggle={() => setOpenId(openId === stage.id ? null : stage.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StageAccordion({ stage, index, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`overflow-hidden rounded-3xl bg-white ring-1 transition ${
        isOpen ? 'shadow-card ring-slate-200' : 'shadow-soft ring-slate-100'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
        aria-expanded={isOpen}
      >
        <span
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${stage.color} text-base font-extrabold text-white shadow-glow-blue sm:h-16 sm:w-16 sm:text-lg`}
        >
          {stage.range}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-xl">
            {stage.title}
          </h3>
          <p className={`mt-0.5 text-xs font-medium sm:text-sm ${stage.accent}`}>
            {stage.summary}
          </p>
        </div>
        <span
          className={`grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-500 transition ${
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-7">
              <p
                className={`text-[11px] font-bold uppercase tracking-wider ${stage.accent}`}
              >
                Language Capabilities
              </p>
              <ul className="mt-3 space-y-2.5">
                {stage.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2
                      size={18}
                      className={`mt-0.5 shrink-0 ${stage.accent}`}
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stage.skills.map((s) => (
                  <div
                    key={s.label}
                    className={`rounded-2xl ${stage.soft} p-4 ring-1 ring-slate-100`}
                  >
                    <p className="text-sm font-bold text-slate-900">{s.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 rounded-2xl border-l-4 bg-slate-50 p-4 ring-1 ring-slate-100`}
                style={{ borderImage: undefined }}
              >
                <div className={`flex gap-3`}>
                  <span
                    className={`mt-0.5 h-5 w-1 shrink-0 rounded-full bg-gradient-to-b ${stage.color}`}
                  />
                  <p className="text-sm leading-relaxed text-slate-700">
                    <span className="font-bold text-slate-900">
                      Confidence Outcome:{' '}
                    </span>
                    {stage.outcome}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 – Year-wise Level Stacking                                */
/* ------------------------------------------------------------------ */

function StackingSection() {
  return (
    <section id="stacking" className="section-padding relative overflow-hidden">
      <div className="container-page">
        <SectionHead
          eyebrow="Implementation Model"
          title="Year-wise"
          highlight="Level Stacking"
          description="Implementation grows organically with your institution. Each year adds capacity without disrupting existing progress."
        />

        {/* Timeline */}
        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {YEARS.map((year, i) => (
            <motion.div
              key={year.tag}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative"
            >
              {/* Connector */}
              {i < YEARS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[calc(50%+1.5rem)] top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-slate-200 via-slate-200 to-transparent lg:block"
                />
              )}

              {/* Tag */}
              <div className="flex justify-center">
                <span
                  className={`relative z-10 grid h-12 w-12 place-items-center rounded-full text-xs font-extrabold text-white shadow-glow-blue ${
                    i === YEARS.length - 1
                      ? 'bg-gradient-brand'
                      : 'bg-slate-800'
                  }`}
                >
                  {year.tag}
                </span>
              </div>

              {/* Card */}
              <div className="mt-4 rounded-3xl bg-white p-5 shadow-card ring-1 ring-slate-100 sm:p-6">
                <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  {year.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {year.body}
                </p>

                <div className="mt-5 grid grid-cols-4 gap-1.5">
                  {year.levels.map((lvl) => (
                    <span
                      key={lvl}
                      className={`grid h-9 place-items-center rounded-lg text-xs font-extrabold text-white ${
                        i === YEARS.length - 1
                          ? 'bg-gradient-brand'
                          : 'bg-gradient-to-br from-brand-blue to-brand-blue-deep'
                      }`}
                    >
                      {lvl}
                    </span>
                  ))}
                </div>

                <p
                  className={`mt-4 text-[11px] font-bold uppercase tracking-wider ${
                    i === YEARS.length - 1
                      ? 'text-brand-purple-deep'
                      : 'text-brand-blue-deep'
                  }`}
                >
                  {year.cohorts}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stacking notes */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {STACKING_NOTES.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-2xl bg-gradient-brand-soft p-5 ring-1 ring-slate-200/60"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow-blue">
                <n.icon size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">{n.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {n.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 – Honest Expectations (dark gradient)                     */
/* ------------------------------------------------------------------ */

function ExpectationsSection() {
  return (
    <section
      id="expectations"
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-[#1B1947] to-slate-900"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-blue/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-purple/30 blur-3xl"
      />

      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              Honest Expectations
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              What proficiency{' '}
              <span className="bg-gradient-to-r from-brand-sky to-brand-pink bg-clip-text text-transparent">
                really means
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 text-balance text-base leading-relaxed text-white/70 sm:text-lg"
            >
              We believe in transparent communication about language acquisition.
              Understanding realistic timelines helps institutions plan
              effectively and set appropriate expectations for students and
              parents.
            </motion.p>

            {/* CEFR Alignment Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/15 backdrop-blur"
            >
              <p className="text-sm font-bold text-white">CEFR Alignment</p>

              <div className="mt-5 space-y-5">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                    <span>Levels 1–4</span>
                    <span className="text-white">A1 → A2</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-brand-sky to-brand-blue" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                    <span>Levels 5–8</span>
                    <span className="text-white">A2 → B1/B2</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink" />
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-white/60">
                Eight levels of consistent instruction build toward functional
                independence.
              </p>
            </motion.div>
          </div>

          {/* Right – list */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {EXPECTATIONS.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/20">
                  <e.icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white sm:text-base">
                    {e.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/70 sm:text-sm">
                    {e.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 5 – Delivery Model                                          */
/* ------------------------------------------------------------------ */

function DeliverySection() {
  return (
    <section id="delivery" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-mesh opacity-50"
      />
      <div className="container-page">
        <SectionHead
          eyebrow="Delivery Model"
          title="System-led, not"
          highlight="teacher-dependent"
          description="The curriculum is designed to be delivered by English-speaking teachers. Built-in support structures eliminate the need for native French instructors."
        />

        {/* Trilingual structure */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mt-12 overflow-hidden rounded-4xl bg-white p-6 shadow-card ring-1 ring-slate-100 sm:p-9"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand-soft text-brand-purple-deep ring-1 ring-slate-200">
              <Languages size={18} />
            </span>
            <p className="text-base font-bold text-slate-900 sm:text-lg">
              Trilingual Curriculum Structure
            </p>
          </div>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {DELIVERY_LAYERS.map((layer, i) => (
              <React.Fragment key={layer.step}>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${layer.color} text-base font-extrabold text-white shadow-glow-blue`}
                  >
                    {layer.step}
                  </span>
                  <p className="mt-4 inline-flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg">
                    {layer.title === 'Pronunciation Guide' && (
                      <Mic size={16} className="text-brand-purple" />
                    )}
                    {layer.title}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-brand-purple-deep">
                    {layer.tagline}
                  </p>
                  <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {layer.body}
                  </p>
                </motion.div>

                {i < DELIVERY_LAYERS.length - 1 && (
                  <div className="hidden items-center justify-center text-slate-300 lg:flex">
                    <span className="h-px w-12 bg-gradient-to-r from-slate-200 to-slate-300" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Benefits grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {DELIVERY_BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-card sm:p-6"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow-blue">
                <b.icon size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900 sm:text-base">
                  {b.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bottom CTA                                                          */
/* ------------------------------------------------------------------ */

function BottomCTA() {
  return (
    <section className="relative pb-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-4xl bg-gradient-brand p-px shadow-glow"
        >
          <div className="rounded-[calc(2rem-1px)] bg-white/95 p-8 sm:p-12">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-bold uppercase tracking-wider text-brand-purple">
                  Bring this system to your school
                </p>
                <h3 className="mt-3 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Ready to evaluate the curriculum for your institution?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Get detailed documentation — curriculum frameworks,
                  implementation timelines, and outcome projections tailored to
                  your school's context.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link to="/#contact" className="btn-primary">
                  Request Proposal
                  <ArrowRight size={16} />
                </Link>
                <Link to="/#contact" className="btn-secondary">
                  Schedule a Conversation
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Local Section Heading (supports left-align with normal width)       */
/* ------------------------------------------------------------------ */

function SectionHead({ eyebrow, title, highlight, description, align = 'center' }) {
  const isLeft = align === 'left';
  return (
    <div
      className={`flex flex-col gap-5 ${
        isLeft ? 'items-start text-left' : 'mx-auto items-center text-center'
      } ${isLeft ? 'max-w-2xl' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="pill"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="text-balance text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
