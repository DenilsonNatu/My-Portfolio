export type Language = 'id' | 'en';
export type Theme = 'light' | 'dark';

export interface LocalizedString {
  id: string;
  en: string;
}

export interface LocalizedStringArray {
  id: string[];
  en: string[];
}

export interface PersonalInfo {
  name: string;
  role: LocalizedString;
  headline: LocalizedString;
  summary: LocalizedString;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  about: {
    paragraphs: LocalizedStringArray;
    highlights: {
      label: LocalizedString;
      value: string;
    }[];
  };
}

export type ProjectCategoryKey = 'all' | 'frontend' | 'web-dev' | 'wordpress' | 'shopify' | 'academic' | 'personal';

export interface ProjectDetail {
  background: LocalizedString;
  responsibilities: LocalizedStringArray;
  challenges: LocalizedString;
  solution: LocalizedString;
  result: LocalizedString;
}

export interface Project {
  id: string;
  title: string;
  description: LocalizedString;
  role: LocalizedString;
  category: ProjectCategoryKey;
  technologies: string[];
  image: string | string[];
  images?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  details?: ProjectDetail;
  year?: string;
  course?: LocalizedString;
}

export const getProjectImages = (project?: { image?: string | string[]; images?: string[] } | null): string[] => {
  if (!project) return [];
  if (Array.isArray(project.images) && project.images.length > 0) {
    return project.images.filter(Boolean);
  }
  if (Array.isArray(project.image)) {
    return project.image.filter(Boolean);
  }
  return project.image ? [project.image] : [];
};

export interface AcademicProject extends Project {
  year: string;
  course: LocalizedString;
}

export interface Experience {
  id: string;
  company: string;
  position: LocalizedString;
  period: string;
  location?: string;
  description: LocalizedString;
  responsibilities: LocalizedStringArray;
  achievements?: LocalizedStringArray;
  technologies: string[];
}

export interface SkillItem {
  name: string;
  badge?: string;
}

export interface SkillGroup {
  id: string;
  title: LocalizedString;
  skills: SkillItem[];
}

export interface Education {
  id: string;
  university: string;
  major: LocalizedString;
  degree: LocalizedString;
  period: string;
  description?: LocalizedString;
  relevantCourses?: LocalizedStringArray;
}

export interface Achievement {
  id: string;
  title: LocalizedString;
  issuer: string;
  year: string;
  category: 'certificate' | 'award' | 'training' | 'competition';
  description?: LocalizedString;
  credentialUrl?: string;
}
