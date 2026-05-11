import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', size = 'md' }) {
  const sizes = {
    sm: { img: 'h-12 w-12', title: 'text-base', tag: 'text-[10px]' },
    md: { img: 'h-16 w-16 sm:h-[72px] sm:w-[72px]', title: 'text-lg sm:text-xl', tag: 'text-[10px] sm:text-[11px]' },
    lg: { img: 'h-20 w-20', title: 'text-2xl', tag: 'text-xs' },
  };
  const s = sizes[size] ?? sizes.md;

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <img
        src="/Language%20world.svg"
        alt="Language World Canada logo"
        className={`${s.img} shrink-0 object-contain drop-shadow-sm`}
      />
      <span className="flex flex-col leading-tight">
        <span className={`${s.title} font-extrabold tracking-tight text-slate-900`}>
          Language <span className="gradient-text">World</span>
        </span>
        <span className={`${s.tag} font-semibold uppercase tracking-[0.18em] text-slate-400`}>
          Learn · Speak · Grow
        </span>
      </span>
    </Link>
  );
}
