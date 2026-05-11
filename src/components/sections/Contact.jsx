import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const WHATSAPP_MESSAGE =
  'Hello, I would like to know more about your French learning program and how to get started.';

const CONTACTS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Info@languageworld.ca',
    href: 'mailto:Info@languageworld.ca',
    cta: 'Write to us',
    iconBg: 'bg-blue-100 text-blue-600',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+91 98886 00394',
    href: `https://wa.me/919888600394?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    cta: 'Chat on WhatsApp',
    external: true,
    iconBg: 'bg-emerald-100 text-emerald-600',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: MapPin,
    label: 'Office',
    value:
      "BHIVE Workspace – No. 112, AKR Tech Park, 'B' Block, 7th Mile Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068",
    href: 'https://maps.google.com/?q=BHIVE+Workspace+AKR+Tech+Park+B+Block+Kudlu+Gate+Bengaluru+560068',
    cta: 'Open in Maps',
    external: true,
    iconBg: 'bg-violet-100 text-violet-600',
    accent: 'from-violet-500 to-fuchsia-500',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-mesh opacity-50"
      />
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's stay in"
          highlight="touch"
          description="Have a question, partnership idea or need help for your classroom? Reach out — we reply within 24 hours."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {CONTACTS.map((c, i) => (
            <ContactCard key={c.label} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  cta,
  external,
  iconBg,
  accent,
  index,
}) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.a
      href={href}
      {...linkProps}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-100 transition"
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-2xl transition duration-500 group-hover:opacity-30`}
      />

      <div className="flex items-center justify-between">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl ${iconBg}`}>
          <Icon size={22} />
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-50 text-slate-400 transition group-hover:bg-slate-900 group-hover:text-white">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <p className="mt-6 text-[11px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <p className="mt-1.5 text-sm font-bold leading-relaxed text-slate-800">
        {value}
      </p>

      <div className="mt-6 flex items-center gap-2 text-xs font-bold">
        <span className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
          {cta}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
      </div>
    </motion.a>
  );
}
