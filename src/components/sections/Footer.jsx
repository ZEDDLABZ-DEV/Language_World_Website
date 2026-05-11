import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

const LINKS = [
  {
    title: 'Product',
    items: [
      { label: 'Features', to: '/#features' },
      { label: 'Curriculum', to: '/curriculum' },
      { label: 'Implementation', to: '/implementation' },
      { label: 'Screenshots', to: '/#screenshots' },
      { label: 'Download', to: '/#download' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', to: '/#about' },
      { label: 'Contact', to: '/#contact' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'FAQ', to: '/#faq' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
];

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="relative isolate overflow-hidden bg-slate-50/60 pt-16 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-white to-transparent"
      />
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Language World Canada is the modern, school-friendly French
              learning app loved by 25,000+ students and teachers worldwide.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {LINKS.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        to={it.to}
                        className="text-sm font-semibold text-slate-700 transition hover:text-brand-purple"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Language World Canada. All rights reserved.
          </p>
          <div
            className="flex items-center gap-4 text-xs text-slate-500"
            key={pathname}
          >
            <Link to="/privacy" className="hover:text-slate-800">
              Privacy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-slate-800">
              Terms
            </Link>
            <span>·</span>
            <Link to="/privacy#cookies" className="hover:text-slate-800">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
