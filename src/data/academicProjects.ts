import type { AcademicProject } from '../types';
import trialimg from '../assets/trial.png';
import travoraImg from '../assets/travora.png';
import travora1Img from '../assets/travora1.png';
import eldifyImg from '../assets/eldify.png';
import eldify1Img from '../assets/eldify1.png';

export const academicProjects: AcademicProject[] = [
  {
    id: 'academic-lms',
    title: 'Learning Management System (LMS)',
    category: 'academic',
    year: '2025',
    course: {
      id: 'Proyek Trial / Pengembangan Aplikasi Web',
      en: 'Trial Project / Web Application Development',
    },
    description: {
      id: 'Website Learning Management System (LMS) yang membantu proses belajar mengajar dengan menyediakan fitur untuk admin, pengajar, dan mahasiswa dalam mengelola kelas, materi, tugas, dan data pengguna.',
      en: 'A Learning Management System (LMS) web application designed to support teaching and learning activities through features for administrators, instructors, and students to manage classes, materials, assignments, and user data.',
    },
    role: {
      id: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: trialimg,
    github: 'https://github.com/Arfiannn/TRIAL/tree/main/app',
    demo: '',
    details: {
      background: {
        id: 'Proyek trial untuk membangun website LMS yang dapat membantu mengelola proses belajar mengajar secara terstruktur melalui tiga jenis pengguna, yaitu admin, pengajar, dan mahasiswa.',
        en: 'A trial project to build an LMS website that supports structured teaching and learning activities through three types of users: administrators, instructors, and students.',
      },
      responsibilities: {
        id: [
          'Mengembangkan antarmuka LMS menggunakan React dan TypeScript.',
          'Membangun tampilan dan komponen yang berbeda berdasarkan hak akses admin, pengajar, dan mahasiswa.',
          'Membuat tampilan admin untuk mengelola data mahasiswa dan pengajar, termasuk proses penerimaan, penolakan, dan penghapusan data.',
          'Membangun antarmuka pengelolaan mata kuliah, termasuk pengaturan jurusan, program studi, dan pengajar yang mengampu mata kuliah.',
          'Membangun tampilan pengajar untuk melihat kelas yang diajar serta menambahkan materi dan tugas.',
          'Membangun tampilan mahasiswa untuk melihat kelas, pengajar, materi, dan tugas serta mengumpulkan tugas.',
          'Menerapkan Tailwind CSS untuk membuat tampilan antarmuka yang responsif dan konsisten.',
        ],
        en: [
          'Developed the LMS user interface using React and TypeScript.',
          'Built different interfaces based on the access roles of administrators, instructors, and students.',
          'Created admin interfaces for managing student and instructor data, including approval, rejection, and deletion processes.',
          'Built course management interfaces including department, study program, and instructor assignments.',
          'Developed instructor interfaces for viewing assigned classes and adding learning materials and assignments.',
          'Developed student interfaces for viewing classes, instructors, materials, and assignments, as well as submitting assignments.',
          'Used Tailwind CSS to create a responsive and consistent user interface.',
        ],
      },
      challenges: {
        id: 'Membuat satu aplikasi dengan alur dan tampilan yang berbeda untuk admin, pengajar, dan mahasiswa sesuai dengan kebutuhan masing-masing pengguna.',
        en: 'Designing a single application with different interfaces and workflows for administrators, instructors, and students based on their respective needs.',
      },
      solution: {
        id: 'Membagi antarmuka berdasarkan role pengguna dan membuat komponen UI yang dapat digunakan kembali menggunakan React dan TypeScript. Tailwind CSS digunakan untuk mengatur layout, responsivitas, dan konsistensi tampilan.',
        en: 'Separated interfaces based on user roles and created reusable UI components using React and TypeScript. Tailwind CSS was used to handle layout, responsiveness, and visual consistency.',
      },
      result: {
        id: 'Menghasilkan website LMS trial yang menyediakan alur pembelajaran dari pengelolaan pengguna dan mata kuliah hingga aktivitas kelas, materi, tugas, dan pengumpulan tugas.',
        en: 'Produced a trial LMS website covering the learning workflow from user and course management to class activities, learning materials, assignments, and assignment submissions.',
      },
    },
  },

  {
    id: 'academic-travora',
    title: 'Travora - Ubud Travel Information Platform',
    category: 'academic',
    year: '2026',
    course: {
      id: 'Proyek Pengembangan Aplikasi Mobile',
      en: 'Mobile Application Development Project',
    },
    description: {
      id: 'Platform informasi wisata dan event di Ubud yang terdiri dari aplikasi mobile untuk pengguna, website utama, dan sistem admin. Bertanggung jawab pada pengembangan aplikasi mobile dan antarmuka admin menggunakan Flutter.',
      en: 'A travel and event information platform for Ubud consisting of a mobile application, main website, and admin system. Responsible for developing the mobile application and admin interface using Flutter.',
    },
    role: {
      id: 'Frontend Developer (Mobile & Admin)',
      en: 'Frontend Developer (Mobile & Admin)',
    },
    technologies: ['Flutter', 'Dart'],
    image: [travoraImg, travora1Img],
    github: 'https://github.com/NgurahRio/Capstone2025-Undiknas/tree/main/frontend',
    demo: '',
    details: {
      background: {
        id: 'Proyek pengembangan platform informasi wisata dan event di Ubud yang membantu pengguna mendapatkan informasi mengenai berbagai tempat wisata dan event, sekaligus menyediakan sistem admin untuk mengelola data yang ditampilkan pada platform.',
        en: 'A travel and event information platform project for Ubud that helps users discover attractions and events while providing an admin system for managing the data displayed across the platform.',
      },

      responsibilities: {
        id: [
          'Mengembangkan antarmuka aplikasi mobile Travora menggunakan Flutter dan Dart.',
          'Membangun halaman beranda untuk menampilkan rekomendasi tempat wisata dan event.',
          'Membuat kategori perjalanan seperti Solo Trip, Group Trip, dan Romantic Trip.',
          'Membangun halaman detail tempat wisata dan event yang menampilkan harga, fasilitas, lokasi, serta informasi yang boleh dan tidak boleh dilakukan.',
          'Menyediakan informasi pendukung seperti lokasi rumah sakit dan puskesmas terdekat.',
          'Mengembangkan antarmuka admin menggunakan Flutter untuk mengelola data yang digunakan pada platform Travora.',
          'Membuat fitur admin untuk menambahkan, mengubah, dan menghapus data tempat wisata dan event.',
          'Mengelola data pendukung seperti kategori, fasilitas, lokasi, serta informasi lainnya yang berkaitan dengan tempat wisata dan event.',
          'Membuat fitur untuk melihat dan mengelola review dari pengguna.',
          'Memastikan kebutuhan dan kelengkapan data yang ditampilkan pada aplikasi dapat dikelola melalui sistem admin.',
        ],
        en: [
          'Developed the Travora mobile application interface using Flutter and Dart.',
          'Built the home page to display recommended attractions and events.',
          'Created travel categories such as Solo Trip, Group Trip, and Romantic Trip.',
          'Developed attraction and event detail pages containing pricing, facilities, location, and do-and-don’t information.',
          'Provided supporting information such as nearby hospitals and community health centers.',
          'Developed the admin interface using Flutter to manage data used across the Travora platform.',
          'Built admin features for adding, editing, and deleting attraction and event data.',
          'Managed supporting data such as categories, facilities, locations, and other information related to attractions and events.',
          'Created features for viewing and managing user reviews.',
          'Ensured that the information displayed in the application could be properly managed through the admin system.',
        ],
      },

      challenges: {
        id: 'Mengembangkan dua antarmuka dengan kebutuhan berbeda, yaitu aplikasi mobile untuk pengguna dan sistem admin untuk mengelola berbagai data wisata dan event.',
        en: 'Developing two interfaces with different requirements: a mobile application for users and an admin system for managing various travel and event data.',
      },

      solution: {
        id: 'Membagi kebutuhan antarmuka berdasarkan fungsi pengguna dan admin, kemudian membangun komponen serta halaman yang terstruktur menggunakan Flutter agar pengembangan kedua sisi dapat dilakukan secara konsisten.',
        en: 'Separated interface requirements based on user and admin functions, then developed structured components and pages using Flutter to maintain consistency across both sides of the system.',
      },

      result: {
        id: 'Menghasilkan aplikasi mobile Travora dan sistem admin yang membantu pengguna mendapatkan informasi wisata dan event di Ubud serta membantu admin mengelola data tempat wisata, event, review, dan informasi pendukung lainnya.',
        en: 'Delivered the Travora mobile application and admin system, helping users access travel and event information in Ubud while enabling administrators to manage attractions, events, reviews, and supporting information.',
      },
    },
  },

  {
  id: 'academic-eldify',

  title: 'Eldify - Elderly Companion Service & Education Platform',

  category: 'academic',

  year: '2026',

  course: {
    id: 'Skripsi / Tugas Akhir',
    en: 'Thesis / Final Project',
  },

  description: {
    id: 'Aplikasi mobile penyedia jasa pendamping lansia yang memungkinkan keluarga atau kerabat lansia memesan jasa pendamping untuk menemani lansia dalam berbagai aktivitas. Eldify juga dilengkapi chatbot edukasi untuk membantu keluarga dan lansia mengenali serta memahami penanganan awal yang tepat terkait gangguan mobilitas pada lansia.',

    en: 'A mobile application that provides elderly companion services, allowing family members or relatives to book caregivers to accompany elderly individuals in various activities. Eldify also includes an educational chatbot to help families and elderly users recognize and understand appropriate initial responses to mobility issues in older adults.',
  },

  role: {
    id: 'Fullstack Developer',
    en: 'Fullstack Developer',
  },

  technologies: [
    'Flutter',
    'Dart',
    'Golang',
    'RESTful API',
    'MySQL',
    'n8n',
    'Webhook',
  ],

  image: [eldifyImg, eldify1Img],

  github: 'https://github.com/DenilsonNatu/Eldify-Skripsi',
  demo: '',

  details: {

    background: {
      id: 'Eldify dikembangkan sebagai aplikasi mobile yang membantu keluarga atau kerabat lansia dalam mendapatkan jasa pendamping untuk menemani lansia dalam berbagai aktivitas. Selain layanan pendamping, aplikasi menyediakan chatbot edukasi yang membantu pengguna memperoleh informasi mengenai gangguan mobilitas pada lansia dan langkah penanganan awal yang tepat.',

      en: 'Eldify was developed as a mobile application to help families or relatives find companion services for elderly individuals during various activities. In addition to companion services, the application provides an educational chatbot that helps users learn about mobility issues in older adults and appropriate initial steps for handling them.',
    },

    responsibilities: {

      id: [
        'Mengembangkan aplikasi mobile Eldify menggunakan Flutter dan Dart.',

        'Membangun antarmuka untuk proses registrasi dan login pengguna.',

        'Mengembangkan fitur pengelolaan data lansia yang dapat digunakan oleh pengguna atau kerabat.',

        'Membangun fitur pencarian dan pemilihan pendamping lansia berdasarkan kebutuhan pengguna.',

        'Mengembangkan fitur rekomendasi pendamping berdasarkan rating.',

        'Membangun alur pemesanan jasa pendamping lansia dari pemilihan pendamping hingga proses booking selesai.',

        'Mengembangkan fitur booking code dan riwayat pemesanan untuk memudahkan pengguna melihat status layanan.',

        'Mengembangkan fitur notifikasi untuk informasi pemesanan dan pembatalan layanan.',

        'Mengembangkan RESTful API menggunakan Golang untuk menangani proses komunikasi antara aplikasi mobile dan server.',

        'Mengimplementasikan database MySQL untuk menyimpan dan mengelola data pengguna, lansia, pendamping, review, serta pemesanan.',

        'Mengintegrasikan chatbot edukasi menggunakan n8n dan Webhook sebagai penghubung antara aplikasi mobile dan alur chatbot.',

        'Mengimplementasikan chatbot edukasi untuk memberikan informasi mengenai gangguan mobilitas pada lansia dan penanganan awal yang sesuai.',

        'Mengelola penyimpanan riwayat percakapan chatbot pada aplikasi menggunakan local storage.',

        'Mengintegrasikan seluruh komponen frontend, backend, database, dan chatbot agar dapat berjalan sebagai satu sistem.',
      ],

      en: [
        'Developed the Eldify mobile application using Flutter and Dart.',

        'Built the user registration and login interfaces.',

        'Developed elderly profile management features for users or family members.',

        'Built features for searching and selecting elderly companions based on user needs.',

        'Developed companion recommendation features based on ratings.',

        'Built the elderly companion booking flow from companion selection to booking completion.',

        'Developed booking code and booking history features to help users track their services.',

        'Implemented notifications for booking and cancellation updates.',

        'Developed RESTful APIs using Golang to handle communication between the mobile application and server.',

        'Implemented MySQL as the database for managing users, elderly profiles, companions, reviews, and bookings.',

        'Integrated the educational chatbot using n8n and Webhook as the connection between the mobile application and chatbot workflow.',

        'Implemented an educational chatbot that provides information about mobility issues in older adults and appropriate initial responses.',

        'Managed chatbot conversation history using local storage within the mobile application.',

        'Integrated the frontend, backend, database, and chatbot components into a unified system.',
      ],

    },

    challenges: {
      id: 'Mengembangkan satu aplikasi yang menggabungkan layanan pemesanan pendamping lansia dengan chatbot edukasi, sekaligus memastikan komunikasi antara aplikasi mobile, backend, database, dan alur chatbot dapat berjalan dengan baik.',

      en: 'Developing an application that combines elderly companion booking services with an educational chatbot while ensuring proper communication between the mobile application, backend, database, and chatbot workflow.',
    },

    solution: {
      id: 'Membangun aplikasi mobile menggunakan Flutter, menyediakan RESTful API menggunakan Golang untuk menangani proses bisnis dan komunikasi dengan database MySQL, serta menggunakan n8n dan Webhook untuk menghubungkan aplikasi dengan chatbot edukasi.',

      en: 'Developed the mobile application using Flutter, implemented RESTful APIs with Golang to handle business processes and communication with the MySQL database, and used n8n and Webhook to connect the application with the educational chatbot.',
    },

    result: {
      id: 'Menghasilkan aplikasi mobile Eldify yang memungkinkan keluarga atau kerabat lansia memesan jasa pendamping untuk menemani lansia dalam berbagai aktivitas serta menyediakan chatbot edukasi untuk membantu memahami gangguan mobilitas dan penanganan awal yang tepat.',

      en: 'Delivered the Eldify mobile application, enabling families or relatives to book elderly companion services for various activities while providing an educational chatbot to help users understand mobility issues and appropriate initial responses.',
    },

  },
},
];