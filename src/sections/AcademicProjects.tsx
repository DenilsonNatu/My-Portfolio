import React, { useState } from 'react';
import type { AcademicProject } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { academicProjects } from '../data/academicProjects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';

export const AcademicProjects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<AcademicProject | null>(null);

  return (
    <section id="academic" className="py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            {t.academicProjects.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
            {t.academicProjects.sectionSubtitle}
          </p>
        </div>

        {/* Academic Projects Grid */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {academicProjects.map((proj) => (
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

        {/* Modal viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
