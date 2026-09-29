import React, { useState } from 'react';
import { Filter, Inbox } from 'lucide-react';
import type { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 bg-slate-100/60 dark:bg-[#111827]/70 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            {t.projects.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="flex-none w-[85%] sm:w-[300px] lg:w-[30%] snap-start"
              >
                <ProjectCard
                  project={proj}
                  onSelect={(p) => setSelectedProject(p)}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-6 bg-white dark:bg-[#131c31] rounded-2xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto shadow-sm">
            <Inbox size={40} className="text-slate-400 dark:text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t.projects.emptyTitle}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{t.projects.emptyDesc}</p>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <Filter size={14} />
              <span>{t.projects.resetFilter}</span>
            </button>
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
