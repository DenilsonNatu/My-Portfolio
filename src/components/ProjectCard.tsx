import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';
import { getProjectImages } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps<T extends Project = Project> {
  project: T;
  onSelect: (project: T) => void;
}

export const ProjectCard = <T extends Project>({ project, onSelect }: ProjectCardProps<T>): React.ReactElement => {
  const { language, t } = useLanguage();

  const roleText = project.role[language];
  const descriptionText = project.description[language];
  const images = getProjectImages(project);

  const getCategoryLabel = (category?: string) => {
    switch (category) {
      case 'frontend':
        return t.projects.filterFrontend;
      case 'web-dev':
        return t.projects.filterWebDev;
      case 'wordpress':
        return t.projects.filterWordpress;
      case 'shopify':
        return t.projects.filterShopify;
      case 'academic':
        return t.projects.filterAcademic;
      case 'personal':
        return t.projects.filterPersonal;
      default:
        return category || t.projects.filterAcademic;
    }
  };

  return (
    <article className="flex flex-col bg-white dark:bg-[#131c31] rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 group">

      <div className="relative h-[180px] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {images.length > 1 ? (
          <div className="absolute inset-0 flex items-center justify-center p-2">
            {images.map((img, idx) => (
              <div key={idx} className="h-full flex-1 flex items-center justify-center min-w-0">
                <img
                  src={img}
                  alt={`Screenshot ${idx + 1} of ${project.title}`}
                  className="h-full max-h-full max-w-full object-contain rounded-md shadow-xs group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={images[0] || ''}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
            {getCategoryLabel(project.category)}
          </span>

          {project.year && (
            <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-semibold font-mono bg-slate-950/80 backdrop-blur-md text-slate-200 border border-white/10">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-3 lg:p-4">
        <h3 className="text-[15px] lg:text-[17px] font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-[13px] lg:text-[14px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {descriptionText}
        </p>

        {/* ROLE SECTION ON CARD */}
        <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/50 mb-4">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {t.projects.roleLabel}
          </div>
          <div className="text-[12px] font-bold text-blue-600 dark:text-blue-400 flex justify-end">
            {roleText}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Eye size={14} />
            <span>{t.projects.viewDetails}</span>
          </button>

          <div className="flex items-center gap-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={t.projects.githubLink}
                aria-label={`${t.projects.githubLink} for ${project.title}`}
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={t.projects.demoLink}
                aria-label={`${t.projects.demoLink} for ${project.title}`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
