import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Sparkles,
  TrendingDown,
  Briefcase,
  Scale,
  RotateCcw,
  GraduationCap,
  Network,
  KeyRound,
  Video,
  CalendarCheck,
  Mic,
  Activity,
  Handshake,
  PlayCircle,
  Target,
  Rocket,
  Building2,
  Layers,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  Users,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const REALITY_ITEMS = [
  {
    icon: TrendingDown,
    title: 'Teacher attrition is structural',
    body:
      'Language teachers—particularly in French—face persistent market demand. Competitive offers from private institutions, international schools, and corporate training create ongoing pressure on retention.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: Briefcase,
    title: 'Private sector poaching is routine',
    body:
      'Trained language instructors represent immediate value to competitors. Schools invest in development only to see returns captured elsewhere. This is not disloyalty—it is market mechanics.',
    color: 'from-violet-400 to-fuchsia-500',
  },
  {
    icon: Scale,
    title: 'Accountability falls on institutions',
    body:
      'When program quality suffers due to personnel changes, parents do not distinguish between institutional decisions and individual teacher departures. The school bears reputational risk regardless of cause.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: RotateCcw,
    title: 'Replacement cycles compound disruption',
    body:
      'Each teacher transition requires recruitment, onboarding, and methodology alignment. Students experience discontinuity. Cumulative knowledge is lost. The cycle repeats.',
    color: 'from-amber-400 to-orange-500',
  },
];

const DELIVERY_ITEMS = [
  {
    icon: GraduationCap,
    title: 'English Teachers Deliver French',
    body:
      'The curriculum is structured for delivery by your existing English-medium faculty. Built-in pronunciation guides and instructional frameworks eliminate the requirement for native French speakers or specialist hires.',
  },
  {
    icon: Network,
    title: 'No Single Point of Failure',
    body:
      'When delivery capability is distributed across multiple staff members operating within a documented system, no individual departure can destabilize program continuity. The system persists regardless of personnel changes.',
  },
  {
    icon: KeyRound,
    title: 'Institutional Ownership',
    body:
      'Your school owns the delivery infrastructure. Teacher training, curriculum materials, and assessment frameworks become institutional assets—not dependencies on external vendors or individual expertise.',
  },
];

const TRAINING_ITEMS = [
  {
    step: '1',
    icon: Video,
    title: 'Daily Live Sessions',
    body:
      'Online training sessions conducted every working day. Teachers join when their schedule permits. Sessions cover pronunciation practice, lesson execution, and classroom management in French instruction contexts.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    step: '2',
    icon: CalendarCheck,
    title: 'Flexible Attendance Model',
    body:
      'No mandatory attendance tracking. Teachers participate based on their development needs and availability. Recorded sessions available for asynchronous review when live attendance is not possible.',
    color: 'from-violet-400 to-fuchsia-500',
  },
  {
    step: '3',
    icon: Mic,
    title: 'Pronunciation & Delivery Focus',
    body:
      'Primary emphasis on accurate French pronunciation and effective classroom delivery techniques. Teachers build confidence through repeated practice with immediate correction and guidance.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    step: '4',
    icon: Activity,
    title: 'Continuous Development',
    body:
      'Training is not a one-time onboarding event. The system provides ongoing support throughout the academic year. Teachers refine their capability progressively, not in isolated workshops.',
    color: 'from-amber-400 to-orange-500',
  },
];

const TIMELINE = [
  {
    label: 'Day 1–3',
    title: 'Agreement & Setup',
    body:
      'Institutional agreement finalized. Teacher roster received. Training access provisioned.',
    icon: Handshake,
  },
  {
    label: 'Week 1',
    title: 'Initial Training',
    body:
      'Teachers begin daily live sessions. Pronunciation foundations established. Curriculum materials distributed.',
    icon: PlayCircle,
  },
  {
    label: 'Week 2–3',
    title: 'Classroom Preparation',
    body:
      'Teachers practice lesson delivery. Assessment familiarity developed. Classroom readiness confirmed.',
    icon: Target,
  },
  {
    label: 'Week 4+',
    title: 'Active Instruction',
    body:
      'French instruction begins in classrooms. Ongoing training continues in parallel. Support available throughout.',
    icon: Rocket,
  },
];

const COMMERCIAL_ITEMS = [
  {
    icon: Building2,
    title: 'Institutional Pricing Structure',
    body:
      'Pricing is determined at the institutional level based on scope of implementation, number of teachers trained, and grade coverage. This is not a per-student or per-seat model.',
  },
  {
    icon: Layers,
    title: 'Curriculum-Wide Adoption Benefits',
    body:
      'Schools implementing French across all eligible grades receive structural advantages in pricing and support allocation. Comprehensive adoption is incentivized over partial implementation.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership, Not Transaction',
    body:
      'The commercial relationship is framed around multi-year partnership. This is not a one-time purchase. Ongoing training, support, and curriculum updates are integral to the model.',
  },
];

const COMMERCIAL_CHECKLIST = [
  "Assessment of your institution's implementation scope and timeline",
  'Clarification of teacher training requirements and support needs',
  'Transparent breakdown of what is included and what is optional',
  'Written proposal for board-level review and approval',
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Implementation() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <article className="relative isolate">
      <Hero />
      <RealitySection />
      <DeliverySection />
      <TrainingSection />
      <TimelineSection />
      <CommercialSection />
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
            Implementation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            A French program built to{' '}
            <span className="gradient-text">remain functional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 text-balance text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            From the operational reality of teacher attrition to a delivery
            model your institution actually owns — here is how the system gets
            into your classrooms and stays there.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#reality" className="btn-primary">
              See the Model
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
/* Section 1 – The Operational Reality                                 */
/* ------------------------------------------------------------------ */

function RealitySection() {
  return (
    <section id="reality" className="section-padding relative overflow-hidden">
      <div className="container-page">
        <SectionHead
          eyebrow="The Operational Reality"
          title="Teacher risk is not a personnel problem."
          highlight="It is a structural one."
          description="Before discussing solutions, we acknowledge what every school administrator already knows. These are not criticisms—they are observations about how language instruction markets function."
          align="left"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {REALITY_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative flex items-start gap-4 overflow-hidden rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-card sm:p-7"
            >
              <div
                className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${item.color}`}
              />
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-glow-blue`}
              >
                <item.icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-base font-bold text-slate-900 sm:text-lg">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-10 rounded-3xl bg-gradient-brand-soft p-6 ring-1 ring-slate-200/60 sm:p-7"
        >
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            The question is not whether these dynamics will affect your
            institution. The question is whether your French program is
            designed to remain functional when they do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 – The Delivery Model (with Capability diagram)            */
/* ------------------------------------------------------------------ */

function DeliverySection() {
  return (
    <section
      id="delivery"
      className="relative overflow-hidden bg-gradient-to-b from-surface-50 via-white to-surface-50 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-mesh opacity-50"
      />
      <div className="container-page">
        <SectionHead
          eyebrow="The Delivery Model"
          title="In-house capability,"
          highlight="not external dependency"
          align="left"
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left – three points */}
          <div className="flex flex-col gap-6">
            {DELIVERY_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow-blue">
                  <item.icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-base font-bold text-slate-900 sm:text-lg">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right – Capability Model diagram */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-4xl bg-white p-6 shadow-card ring-1 ring-slate-100 sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-brand opacity-15 blur-3xl"
            />
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-purple">
              Capability Model
            </p>

            {/* Your Institution box */}
            <div className="mt-4 rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200/70 sm:p-5">
              <p className="text-sm font-bold text-slate-900">
                Your Institution
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {['Teacher A', 'Teacher B', 'Teacher C'].map((t) => (
                  <div
                    key={t}
                    className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center ring-1 ring-slate-200/70"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand-soft text-brand-purple-deep">
                      <Users size={14} />
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {t}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-brand p-px shadow-glow-blue">
                <div className="rounded-[calc(1rem-1px)] bg-white p-4 text-center">
                  <p className="text-sm font-extrabold text-slate-900">
                    Curriculum System
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-slate-500">
                    Materials · Training · Assessments
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="my-4 flex justify-center text-slate-400">
              <ArrowDown size={20} />
            </div>

            {/* Output */}
            <div className="rounded-3xl bg-gradient-brand-soft p-4 text-center ring-1 ring-slate-200/70 sm:p-5">
              <p className="text-sm font-extrabold text-slate-900 sm:text-base">
                Consistent French Instruction
              </p>
              <p className="mt-1 text-xs font-medium text-slate-600">
                Independent of individual teacher tenure
              </p>
            </div>

            <div className="mt-5 rounded-2xl border-l-4 border-brand-purple bg-slate-50 p-4">
              <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                <span className="font-bold text-brand-purple-deep">
                  Key principle:{' '}
                </span>
                Teachers operate within the system. The system does not depend
                on any single teacher.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 – Teacher Preparation                                     */
/* ------------------------------------------------------------------ */

function TrainingSection() {
  return (
    <section id="training" className="section-padding relative overflow-hidden">
      <div className="container-page">
        <SectionHead
          eyebrow="Teacher Preparation"
          title="Live training,"
          highlight="not just materials"
          description="Curriculum materials alone do not create capable instructors. Our model includes structured, ongoing training that builds actual classroom readiness."
          align="left"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {TRAINING_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-glow-blue sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${item.color} text-sm font-extrabold text-white shadow-glow-blue`}
                >
                  {item.step}
                </span>
                <span
                  className={`inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700 ring-1 ring-slate-100`}
                >
                  <item.icon size={12} />
                  {item.title}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:p-7"
        >
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            <span className="font-bold text-brand-purple-deep">
              Operational note:{' '}
            </span>
            Training sessions are delivered by our team. Your institution
            provides teachers; we provide the development infrastructure. This
            division of responsibility ensures neither party bears
            disproportionate burden.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 – Implementation Speed (Timeline)                         */
/* ------------------------------------------------------------------ */

function TimelineSection() {
  return (
    <section
      id="timeline"
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
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
            Implementation Speed
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            From decision to{' '}
            <span className="bg-gradient-to-r from-brand-sky to-brand-pink bg-clip-text text-transparent">
              delivery
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 text-balance text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Implementation does not require extended planning cycles. Teachers
            can begin training immediately upon agreement. Classroom
            instruction follows within weeks.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              {i < TIMELINE.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[calc(50%+1.75rem)] top-6 hidden h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-white/30 via-white/15 to-transparent lg:block"
                />
              )}

              <div className="flex justify-center">
                <span
                  className={`relative z-10 grid h-14 w-14 place-items-center rounded-full text-white shadow-glow-blue ring-1 ring-white/20 ${
                    i === TIMELINE.length - 1
                      ? 'bg-gradient-brand'
                      : 'bg-gradient-to-br from-brand-blue to-brand-blue-deep'
                  }`}
                >
                  <t.icon size={20} />
                </span>
              </div>

              <div className="mt-5 rounded-3xl bg-white/5 p-5 text-center ring-1 ring-white/10 backdrop-blur sm:p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20">
                  {t.label}
                </span>
                <p className="mt-3 text-base font-bold text-white sm:text-lg">
                  {t.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                  {t.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-10 rounded-3xl bg-white/5 p-6 ring-1 ring-white/15 backdrop-blur sm:p-7"
        >
          <p className="text-sm leading-relaxed text-white/80 sm:text-base">
            <span className="font-bold text-white">
              Year-round availability:{' '}
            </span>
            There is no fixed enrollment window. Implementation can begin at
            any point in the academic calendar. The system accommodates
            mid-year starts without curriculum disruption.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 5 – Commercial Model                                        */
/* ------------------------------------------------------------------ */

function CommercialSection() {
  return (
    <section
      id="commercial"
      className="section-padding relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-mesh opacity-50"
      />
      <div className="container-page">
        <SectionHead
          eyebrow="Commercial Model"
          title="How we work with"
          highlight="institutions"
          description="Our commercial model is designed for institutional decision-making, not retail comparison. Pricing discussions occur in the context of specific school requirements and implementation scope."
          align="left"
        />

        <div className="mt-12 grid gap-5">
          {COMMERCIAL_ITEMS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-5 rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-glow-blue sm:p-7"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow-blue">
                <c.icon size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold text-slate-900 sm:text-lg">
                  {c.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why no public pricing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-8 overflow-hidden rounded-3xl border-l-4 border-brand-purple bg-gradient-brand-soft p-6 ring-1 ring-slate-200/60 sm:p-7"
        >
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            <span className="font-bold text-brand-purple-deep">
              Why no public pricing:{' '}
            </span>
            Each institution has distinct requirements—student population,
            grade levels, existing language programs, teacher availability. A
            standardized rate card would either overcharge smaller
            implementations or undervalue comprehensive ones. We prefer to
            scope accurately rather than quote generically.
          </p>
        </motion.div>

        {/* What to expect checklist */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:p-7"
        >
          <p className="text-sm font-extrabold text-slate-900 sm:text-base">
            What to expect in a commercial discussion
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {COMMERCIAL_CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-purple-deep"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
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
                  Start a commercial discussion
                </p>
                <h3 className="mt-3 text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  Ready to scope implementation for your institution?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  We will assess your scope, clarify training requirements,
                  outline what is included, and prepare a written proposal for
                  board-level review.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link to="/#contact" className="btn-primary">
                  Request Proposal
                  <ArrowRight size={16} />
                </Link>
                <Link to="/curriculum" className="btn-secondary">
                  View Curriculum
                  <ChevronRight size={16} />
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
/* Local Section Heading                                               */
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
