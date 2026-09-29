import type { Project } from '../types';
import artistikgalery from '../assets/artistikgalery.png';
import somya from '../assets/somya.png';

export const projects: Project[] = [
  {
    id: 'artistik-galery',
    title: 'Artistik Galery - Shopify Website',
    description: {
      id: 'Pengembangan dan penyesuaian website e-commerce berbasis Shopify untuk penjualan lukisan dan karya seni secara online.',
      en: 'Development and customization of a Shopify-based e-commerce website for selling paintings and artworks online.',
    },
    role: {
      id: 'Frontend / Web Developer',
      en: 'Frontend / Web Developer',
    },
    category: 'shopify',
    technologies: [
      'Shopify',
      'Liquid',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    image: artistikgalery,
    github: '',
    demo: 'https://www.artistikgaleri.com/',
    featured: true,

    details: {
      background: {
        id: 'Artistik Galeri membutuhkan platform e-commerce untuk menampilkan dan menjual berbagai lukisan serta karya seni secara online.',
        en: 'Artistik Galeri required an e-commerce platform to showcase and sell paintings and artworks online.',
      },

      responsibilities: {
        id: [
          'Mengembangkan dan menyesuaikan tampilan website menggunakan Shopify.',
          'Membuat dan menyesuaikan section website menggunakan Liquid.',
          'Mengatur struktur dan tampilan halaman menggunakan HTML dan CSS.',
          'Menyesuaikan tampilan website agar responsif pada berbagai ukuran perangkat.',
        ],
        en: [
          'Developed and customized the website interface using Shopify.',
          'Created and customized website sections using Liquid.',
          'Structured and styled website pages using HTML and CSS.',
          'Adjusted the website interface to provide a responsive experience across different screen sizes.',
        ],
      },

      challenges: {
        id: 'Menyesuaikan tampilan website dengan kebutuhan galeri tanpa hanya bergantung pada tampilan bawaan tema Shopify.',
        en: 'Customizing the website interface according to the gallery requirements instead of relying only on the default Shopify theme.',
      },

      solution: {
        id: 'Melakukan penyesuaian section dan struktur tampilan menggunakan Liquid, HTML, dan CSS agar tampilan website lebih sesuai dengan kebutuhan.',
        en: 'Customized website sections and layout using Liquid, HTML, and CSS to better match the project requirements.',
      },

      result: {
        id: 'Menghasilkan website e-commerce berbasis Shopify yang responsif untuk menampilkan dan menjual lukisan serta karya seni secara online.',
        en: 'Delivered a responsive Shopify-based e-commerce website for showcasing and selling paintings and artworks online.',
      },
    },
  },

  {
    id: 'somya',
    title: 'Somya - Company Website',
    description: {
      id: 'Pengembangan website perusahaan menggunakan WordPress untuk menampilkan informasi perusahaan dan layanan pengolahan limbah makanan.',
      en: 'Development of a company website using WordPress to present company information and food waste processing services.',
    },
    role: {
      id: 'Web Developer',
      en: 'Web Developer',
    },
    category: 'wordpress',
    technologies: [
      'WordPress',
      'Elementor',
      'HTML',
      'CSS',
      'SEO',
    ],
    image: somya,
    github: '',
    demo: 'https://somya.id/',
    featured: true,

    details: {
      background: {
        id: 'Somya membutuhkan website perusahaan untuk menyampaikan informasi mengenai perusahaan dan solusi mesin pengolahan limbah makanan kepada calon pelanggan.',
        en: 'Somya required a company website to present information about the company and its food waste processing machine solutions to potential customers.',
      },

      responsibilities: {
        id: [
          'Mengembangkan dan menyesuaikan website perusahaan menggunakan WordPress.',
          'Membangun dan menata beberapa halaman website menggunakan Elementor.',
          'Menyesuaikan layout, typography, spacing, dan elemen visual agar sesuai dengan kebutuhan website.',
          'Membuat dan menyelesaikan 6 halaman website perusahaan.',
          'Melakukan penyesuaian elemen SEO dasar seperti meta title dan meta description.',
        ],
        en: [
          'Developed and customized the company website using WordPress.',
          'Built and structured multiple website pages using Elementor.',
          'Customized layouts, typography, spacing, and visual elements according to the website requirements.',
          'Created and completed 6 pages for the company website.',
          'Implemented basic SEO elements such as meta titles and meta descriptions.',
        ],
      },

      challenges: {
        id: 'Menyusun beberapa halaman dengan informasi perusahaan dan layanan yang berbeda agar tetap memiliki struktur dan tampilan visual yang konsisten.',
        en: 'Structuring multiple pages with different company and service information while maintaining a consistent visual layout.',
      },

      solution: {
        id: 'Menggunakan WordPress dan Elementor untuk membangun struktur halaman serta menerapkan elemen visual yang konsisten di seluruh halaman website.',
        en: 'Used WordPress and Elementor to build the page structure and maintain consistent visual elements across the website.',
      },

      result: {
        id: 'Berhasil menyelesaikan website perusahaan dengan 6 halaman yang digunakan untuk menyampaikan informasi perusahaan dan layanan kepada pengunjung.',
        en: 'Successfully completed a 6-page company website used to present company information and services to visitors.',
      },
    },
  },
];