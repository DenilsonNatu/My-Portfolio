import type { Education } from '../types';

export const educationList: Education[] = [
  {
    id: 'edu-1',
    university: 'Universitas Pendidikan Nasional (UNDIKNAS)',
    major: {
      id: 'Teknologi Informasi',
      en: 'Information Technology',
    },
    degree: {
      id: 'Sarjana Komputer (S.Kom / Bachelor of Computer Science)',
      en: 'Bachelor of Computer Science (B.Comp.Sc.)',
    },
    period: '2022 - 2026',
    description: {
      id: 'Fokus pada Rekayasa Perangkat Lunak, Interaksi Manusia & Komputer (HCI), Struktur Data & Algoritma, serta Pengembangan Aplikasi Web dan Mobile.',
      en: 'Focused on Software Engineering, Human-Computer Interaction (HCI), Data Structures & Algorithms, and Web and Mobile Application Development.',
    },
    relevantCourses: {
      id: [
        'Pemrograman Web',
        'Pemrograman Multi Platform',
        'Konfigurasi dan Administrasi Basis Data',
        'Manajemen Proyek Teknologi Informasi',
        'Artirektur Mikroservis',
        'Proyek Integrasi Sistem',
      ],
      en: [
        'Web Programming',
        'Multi Platform Programming',
        'Database Configuration and Administration',
        'Information Technology Project Management',
        'Microservice Architecture',
        'System Integration Project',
      ],
    },
  },
];
