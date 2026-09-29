import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { educationList } from '../data/education';
import educationBg from '../assets/undiknas.png';

export const Education: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section 
      id="education" 
      className="relative py-16 flex items-center"
      style={{
        backgroundImage: `url(${educationBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-100/70 dark:bg-[#111827]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-10 lg:px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            {t.education.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
            {t.education.sectionSubtitle}
          </p>
        </div>

        <div className="space-y-6">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-[#131c31] p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {edu.degree[language]}
                    </h3>
                    <p className="text-[13px] font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                      {edu.university} • {edu.major[language]}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit shrink-0">
                  {edu.period}
                </span>
              </div>

              {edu.description && (
                <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mt-4 mb-6">
                  {edu.description[language]}
                </p>
              )}

              {edu.relevantCourses && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <h4 className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    <BookOpen size={14} className="text-blue-500" />
                    {t.education.relevantCourses}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses[language].map((course, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[13px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
