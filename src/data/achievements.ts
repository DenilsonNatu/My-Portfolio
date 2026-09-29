import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'cert-1',
    title: {
      id: 'Frontend Web Developer Specialist Certificate',
      en: 'Frontend Web Developer Specialist Certificate',
    },
    issuer: 'Tech Academy / Coursera / Dicoding (YOUR ISSUER)',
    year: '2025',
    category: 'certificate',
    description: {
      id: 'Sertifikasi kompetensi pemrograman frontend meliputi fundamental web, modular JavaScript, arsitektur React, serta implementasi PWA.',
      en: 'Certification covering core web fundamentals, modular JavaScript, React application architecture, and PWA implementations.',
    },
    credentialUrl: 'https://example.com/credential/cert-1',
  },
  {
    id: 'cert-2',
    title: {
      id: 'Responsive Web Design & Modern CSS Architecture',
      en: 'Responsive Web Design & Modern CSS Architecture',
    },
    issuer: 'freeCodeCamp / Udacity (YOUR ISSUER)',
    year: '2024',
    category: 'training',
    description: {
      id: 'Pelatihan intensif teknik flexbox, CSS Grid, tipografi adaptif, aksesibilitas WCAG, dan prinsip mobile-first styling.',
      en: 'Intensive coursework in flexbox, CSS Grid, fluid typography, WCAG accessibility, and mobile-first responsive design principles.',
    },
    credentialUrl: 'https://example.com/credential/cert-2',
  },
  {
    id: 'cert-3',
    title: {
      id: 'Juara / Finalis Kompetisi Web Development Mahasiswa',
      en: 'Finalist / Winner - National Student Web Development Hackathon',
    },
    issuer: 'National University Tech Fair (YOUR ORGANIZER)',
    year: '2024',
    category: 'competition',
    description: {
      id: 'Membangun purwarupa aplikasi web interaktif dalam waktu 24 jam bersama tim, dinilai berdasarkan inovasi antarmuka dan kerapian kode.',
      en: 'Built a collaborative interactive web prototype within a 24-hour hackathon, evaluated on UI execution and code quality.',
    },
  },
];
