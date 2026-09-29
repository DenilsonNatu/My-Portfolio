import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'COMPANY NAME / TECH STARTUP',
    position: {
      id: 'Junior Frontend Developer',
      en: 'Junior Frontend Developer',
    },
    period: '2025 - Present',
    location: 'Jakarta, Indonesia (Hybrid / Remote)',
    description: {
      id: 'Bertanggung jawab dalam pengembangan dan pemeliharaan modul antarmuka web aplikasi utama menggunakan React dan TypeScript.',
      en: 'Responsible for developing and maintaining user interface modules of the core web application using React and TypeScript.',
    },
    responsibilities: {
      id: [
        'Membangun komponen antarmuka modular yang dapat digunakan kembali (reusable components) dengan TypeScript.',
        'Menerapkan integrasi REST API dan mengelola state aplikasi secara efisien.',
        'Bekerja sama dengan UI/UX Designer untuk merealisasikan rancangan antarmuka Figma ke dalam kode nyata.',
        'Mengoptimalkan performa halaman dan memastikan tampilan responsif di seluruh variasi ukuran layar.',
      ],
      en: [
        'Built reusable, modular UI components utilizing React and TypeScript.',
        'Integrated RESTful APIs and managed predictable client-side application states.',
        'Collaborated closely with UI/UX designers to translate Figma design systems into production code.',
        'Optimized page load speeds and ensured pixel-perfect responsiveness across mobile and desktop devices.',
      ],
    },
    achievements: {
      id: [
        'Membantu meningkatkan skor Core Web Vitals pada halaman landing sebesar 25%.',
        'Mengurangi duplikasi kode CSS dengan membangun sistem token desain internal.',
      ],
      en: [
        'Assisted in elevating landing page Core Web Vitals performance scores by 25%.',
        'Reduced CSS duplication by introducing an internal design token system.',
      ],
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'REST API'],
  },
  {
    id: 'exp-2',
    company: 'DIGITAL AGENCY / SOFTWARE HOUSE',
    position: {
      id: 'Frontend Developer Intern',
      en: 'Frontend Developer Intern',
    },
    period: '2024 - 2025',
    location: 'Indonesia',
    description: {
      id: 'Magang pengembangan web dengan fokus pada slicing desain Figma ke HTML/CSS/JavaScript dan pembuatan website CMS klien.',
      en: 'Web development internship focused on slicing Figma designs into HTML/CSS/JS and delivering client CMS storefronts.',
    },
    responsibilities: {
      id: [
        'Melakukan slicing desain antarmuka dari Figma menjadi kode HTML5, CSS3, dan JavaScript yang semantik.',
        'Membantu kustomisasi tema WordPress dan Shopify untuk berbagai klien UMKM dan brand lokal.',
        'Melakukan uji coba kompatibilitas lintas browser (Chrome, Firefox, Safari, Edge) serta pengujian mobile.',
        'Menangani perbaikan bug antarmuka (UI fixes) sesuai feedback dari tim QA dan klien.',
      ],
      en: [
        'Sliced mockups from Figma into clean, semantic HTML5, CSS3, and JavaScript code.',
        'Assisted in theme customization for WordPress and Shopify client storefronts.',
        'Conducted cross-browser compatibility and mobile responsiveness testing across platforms.',
        'Resolved UI defects and styling inconsistencies based on QA and client issue tickets.',
      ],
    },
    achievements: {
      id: [
        'Menyelesaikan 4 proyek slicing landing page klien tepat waktu dengan feedback kepuasan tinggi.',
      ],
      en: [
        'Successfully delivered 4 client landing page projects ahead of schedule with zero defect regressions.',
      ],
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Shopify', 'Git'],
  },
];
