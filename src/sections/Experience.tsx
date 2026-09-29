import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { experiences } from '../data/experience';

export const Experience: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-slate-100/60 dark:bg-[#111827]/70 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            {t.experience.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3">
            {t.experience.sectionSubtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10 ml-2 sm:ml-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-50 dark:border-[#0b0f19] group-hover:scale-125 transition-transform duration-200" />

              <div className="bg-white dark:bg-[#131c31] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200">
                {/* Header: Position & Company & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.position[language]}
                    </h3>
                    <p className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      <Briefcase size={15} />
                      <span>{exp.company}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Location */}
                {exp.location && (
                  <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description[language]}
                </p>

                {/* Responsibilities */}
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 mt-4">
                  {t.experience.responsibilities}
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside mb-4">
                  {exp.responsibilities[language].map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* Key Achievements if present */}
                {exp.achievements && exp.achievements[language].length > 0 && (
                  <>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 mt-4">
                      {t.experience.achievements}
                    </h4>
                    <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside mb-4">
                      {exp.achievements[language].map((ach, i) => (
                        <li key={i} className="leading-relaxed">
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
