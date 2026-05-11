import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Calendar, ShieldCheck } from 'lucide-react';

/**
 * Shared layout for legal pages (Privacy Policy, Terms of Service).
 * Renders a hero, a sticky table-of-contents sidebar, and the section body.
 *
 * Sections shape:
 *   [{ id: 'intro', title: 'Introduction', body: <p>...</p> }, ...]
 */
export default function LegalPage({
  eyebrow,
  title,
  highlight,
  description,
  lastUpdated,
  sections = [],
}) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 1] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const tocItems = useMemo(
    () => sections.map((s) => ({ id: s.id, title: s.title })),
    [sections]
  );

  const handleAnchor = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <article className="relative isolate">
      {/* Hero */}
      <section className="relative overflow-hidden pb-12 pt-32 sm:pt-36 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-mesh opacity-70"
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

          <div className="mx-auto mt-8 max-w-3xl text-center">
            {eyebrow && (
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="pill"
              >
                <ShieldCheck size={12} className="text-brand-purple" />
                {eyebrow}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {title}{' '}
              {highlight && <span className="gradient-text">{highlight}</span>}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="mt-5 text-balance text-base leading-relaxed text-slate-600 sm:text-lg"
              >
                {description}
              </motion.p>
            )}

            {lastUpdated && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-slate-500 ring-1 ring-slate-200/70 backdrop-blur"
              >
                <Calendar size={12} />
                Last updated · {lastUpdated}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl bg-white/70 p-5 shadow-soft ring-1 ring-slate-200/70 backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  On this page
                </p>
                <ul className="mt-4 space-y-1">
                  {tocItems.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleAnchor(e, item.id)}
                          className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                            isActive
                              ? 'bg-gradient-brand-soft text-brand-purple-deep'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <ChevronRight
                            size={14}
                            className={`shrink-0 transition ${
                              isActive
                                ? 'translate-x-0.5 text-brand-purple'
                                : 'text-slate-300 group-hover:text-slate-500'
                            }`}
                          />
                          <span>{item.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-100 sm:p-10"
              >
                <div className="legal-prose">
                  {sections.map((section, idx) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className={`scroll-mt-28 ${
                        idx !== 0
                          ? 'mt-12 border-t border-slate-100 pt-10'
                          : ''
                      }`}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-brand text-xs font-bold text-white shadow-glow-blue">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                          {section.title}
                        </h2>
                      </div>
                      <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
                        {section.body}
                      </div>
                    </section>
                  ))}
                </div>
              </motion.div>

              {/* Contact callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-6 overflow-hidden rounded-3xl bg-gradient-brand p-px shadow-glow"
              >
                <div className="rounded-[calc(1.5rem-1px)] bg-white/95 p-6 sm:p-8">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-brand-purple">
                        Need clarification?
                      </p>
                      <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                        Our team replies within 24 hours.
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Email us anytime at{' '}
                        <a
                          href="mailto:Info@languageworld.ca"
                          className="font-bold text-brand-purple-deep underline decoration-brand-purple/30 underline-offset-4 hover:decoration-brand-purple"
                        >
                          Info@languageworld.ca
                        </a>
                      </p>
                    </div>
                    <Link to="/#contact" className="btn-primary">
                      Contact us
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
