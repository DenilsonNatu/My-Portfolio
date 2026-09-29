import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project, AcademicProject } from '../types';
import { getProjectImages } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | AcademicProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();
  const [activeImagePreview, setActiveImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImagePreview) {
          setActiveImagePreview(null);
        } else {
          onClose();
        }
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, activeImagePreview]);

  if (!project) return null;

  const roleText = project.role[language];
  const descriptionText = project.description[language];
  const details = project.details;
  const images = getProjectImages(project);
  const isMultiple = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#131c31] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 backdrop-blur-md text-white hover:bg-slate-900 transition-colors cursor-pointer"
          aria-label={t.modal.close}
          title={t.modal.close}
        >
          <X size={20} />
        </button>

        {/* Hero image preview (side-by-side if multiple portrait images) */}
        {isMultiple ? (
          <div className="relative w-full h-72 sm:h-[360px] bg-slate-100 dark:bg-slate-800 shrink-0 flex items-center justify-center gap-3 sm:gap-6 p-4 sm:p-3 overflow-x-auto">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImagePreview(img)}
                className="h-full flex-1 max-w-[220px] flex items-center justify-center shrink-0 sm:shrink min-w-0 cursor-pointer group"
                title="Klik untuk memperbesar"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="h-full w-auto max-w-full object-contain rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700/80 bg-white/40 dark:bg-black/20 group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            onClick={() => images[0] && setActiveImagePreview(images[0])}
            className="relative w-full h-56 sm:h-[280px] bg-slate-100 dark:bg-slate-800 shrink-0 flex items-center justify-center cursor-pointer group"
            title="Klik untuk memperbesar"
          >
            <img
              src={images[0] || ''}
              alt={project.title}
              className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-6 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Header Title */}
          <h2 id="project-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {project.title}
          </h2>

          {/* ROLE BANNER */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                {t.projects.roleLabel}
              </span>
              <p className="text-[15px] font-bold text-blue-600 dark:text-blue-400">{roleText}</p>
            </div>
            {'category' in project && (
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-600 text-white uppercase tracking-wider">
                {project.category}
              </span>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              <Sparkles size={18} className="text-blue-500" />
              {t.modal.overview}
            </h3>
            <p className="text-sm sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">{descriptionText}</p>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              <Layers size={18} className="text-blue-500" />
              {t.modal.technologies}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-[13px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed breakdown if available */}
          {details && (
            <>
              {/* Background */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{t.modal.background}</h3>
                <p className="text-sm sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">{details.background[language]}</p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{t.modal.roleAndDuties}</h3>
                <ul className="space-y-1.5 list-disc list-inside text-sm sm:text-[13px] text-slate-600 dark:text-slate-300">
                  {details.responsibilities[language].map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400 mb-2">
                    <AlertCircle size={16} />
                    {t.modal.challenges}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">{details.challenges[language]}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    <CheckCircle2 size={16} />
                    {t.modal.solution}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">{details.solution[language]}</p>
                </div>
              </div>

              {/* Result */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{t.modal.result}</h3>
                <p className="text-sm sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">{details.result[language]}</p>
              </div>
            </>
          )}

          {/* Links Footer */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all"
              >
                <ExternalLink size={16} />
                {t.modal.viewLive}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
              >
                <GithubIcon size={16} />
                {t.modal.viewCode}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Full Image Zoom Lightbox */}
      {activeImagePreview && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            e.stopPropagation();
            setActiveImagePreview(null);
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImagePreview(null);
            }}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label={t.modal.close}
          >
            <X size={24} />
          </button>
          <img
            src={activeImagePreview}
            alt="Full preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
