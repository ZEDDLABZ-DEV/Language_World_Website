# ParleFrançais — French Learning App Landing Website

A modern, premium landing website for the **ParleFrançais** French learning mobile app, built with **React.js**, **Tailwind CSS**, **Framer Motion** and **Lucide React**.

The design language mirrors the mobile app — soft blue & purple gradients, rounded white glassmorphism cards, floating gradient blobs, and gentle animations.

## ✨ Highlights

- Fully responsive (mobile-first)
- Sticky blurred glass navbar with mobile hamburger menu
- Hero with native phone mockup that recreates the in-app dashboard
- 8-feature grid with animated hover-lift cards
- Curriculum section with **4 levels**, accordion chapters, and PDF / Audio / Lesson / Quiz cards
- Mobile screenshot carousel with multiple in-app screens
- Why Choose Us info cards + stats strip
- FAQ accordion with smooth height animations
- Download CTA with App Store + Google Play buttons
- Glassmorphism contact form
- Footer with quick links, social icons, newsletter
- Loading transition, smooth scrolling, SEO meta

## 🛠 Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3 (custom theme, fonts, animations)
- Framer Motion 11
- Lucide React icons

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in your terminal (default `http://localhost:5173`).

## 🏗 Build for production

```bash
npm run build
npm run preview
```

## 📁 Project structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Curriculum.jsx
│   │   ├── Screenshots.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── FAQ.jsx
│   │   ├── DownloadCTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── GradientBlobs.jsx
│       ├── Logo.jsx
│       ├── PhoneMockup.jsx
│       └── SectionHeading.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Theme tokens

- `brand.blue` `#4F8EF7`
- `brand.purple` `#8B5CF6`
- `brand.pink` `#F472B6`
- `brand.sky` `#BAE6FD`
- `surface.50` `#FAFBFE` — page background

All gradient utilities (`bg-gradient-brand`, `bg-mesh`) and animations (`animate-blob`, `animate-float`) are defined in `tailwind.config.js`.

## 📦 Notes

- Phone mockups are 100% built in React/Tailwind, so no image asset is required.
- Curriculum content structure is inspired by language curricula but original wording — feel free to edit any chapter, level or topic in `src/components/sections/Curriculum.jsx`.
- All copy is editable in one place per section file.
