import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: {
      id: 'Bahasa Pemrograman',
      en: 'Programming Languages',
    },
    skills: [
      { name: 'TypeScript', badge: 'Primary' },
      { name: 'Dart', badge: 'Primary' },
      { name: 'JavaScript (ES6+)', badge: 'Basic' },
      { name: 'HTML5', badge: 'Standard' },
      { name: 'CSS3', badge: 'Standard' },
    ],
  },

  {
    id: 'frameworks',
    title: {
      id: 'Framework & Technologies',
      en: 'Frameworks & Technologies',
    },
    skills: [
      { name: 'Flutter', badge: 'Primary' },
      { name: 'Tailwind CSS', badge: 'Primary' },
      { name: 'React', badge: 'Standard' },
      { name: 'WordPress', badge: 'Standard' },
      { name: 'Shopify', badge: 'Standard' },
      { name: 'Liquid Template', badge: 'Standard' },
      { name: 'Responsive Web Design', badge: 'Standard' },
    ],
  },

  {
    id: 'tools',
    title: {
      id: 'Tools & Workflow',
      en: 'Tools & Workflow',
    },
    skills: [
      { name: 'Git', badge: 'Standard' },
      { name: 'GitHub', badge: 'Standard' },
      { name: 'VS Code', badge: 'Standard' },
      { name: 'Figma', badge: 'Standard' },
      { name: 'RESTful API', badge: 'Standard' },
      { name: 'n8n', badge: 'Standard' },
      { name: 'MySQL', badge: 'Basic' },
      { name: 'Node.js', badge: 'Basic' },
      { name: 'Express.js', badge: 'Basic' },
    ],
  },

  {
    id: 'other',
    title: {
      id: 'Keahlian Pendukung & Soft Skills',
      en: 'Supporting Skills & Soft Skills',
    },
    skills: [
      { name: 'UI Design', badge: 'Standard' },
      { name: 'Graphic Design', badge: 'Standard' },
      { name: 'Problem Solving', badge: 'Standard' },
      { name: 'Teamwork', badge: 'Standard' },
      { name: 'Communication', badge: 'Standard' },
      { name: 'Adaptability', badge: 'Standard' },
      { name: 'Fast Learning', badge: 'Standard' },
    ],
  },
];