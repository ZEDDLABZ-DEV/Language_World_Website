import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/#features' },
  { label: 'Curriculum', to: '/curriculum' },
  { label: 'Implementation', to: '/implementation' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex w-full max-w-7xl items-center justify-between gap-3 rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 ${
          scrolled
            ? 'bg-white/75 backdrop-blur-xl shadow-soft ring-1 ring-slate-200/60'
            : 'bg-white/40 backdrop-blur-md ring-1 ring-white/40'
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white/80 hover:text-slate-900"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/#download"
            className="btn-primary hidden md:inline-flex !py-2.5 !px-4 text-xs"
          >
            <Download size={16} />
            Download App
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/80 text-slate-800 ring-1 ring-slate-200 backdrop-blur lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-3 right-3 top-[4.5rem] origin-top rounded-3xl bg-white/95 p-4 shadow-card ring-1 ring-slate-200 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    onClick={() => setOpen(false)}
                    to={l.to}
                    className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/#download"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              <Download size={16} />
              Download App
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
