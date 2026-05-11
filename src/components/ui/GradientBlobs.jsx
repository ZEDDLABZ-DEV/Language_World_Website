import React from 'react';

export default function GradientBlobs({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-purple/30 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-pink/20 blur-3xl animate-blob [animation-delay:-8s]" />
      <div className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-sky/40 blur-3xl animate-blob [animation-delay:-12s]" />
    </div>
  );
}
