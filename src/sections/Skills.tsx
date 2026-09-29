import React from 'react';
import { Code2, Layers3, Wrench, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { skillGroups } from '../data/skills';

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 size={20} />;
      case 'frameworks':
        return <Layers3 size={20} />;
      case 'tools':
        return <Wrench size={20} />;
      case 'other':
      default:
        return <Sparkles size={20} />;
    }
  };

  return (
    <section id="skills" className="py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white dark:bg-[#131c31] p-4 lg:p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/60">
                <div className="rounded-lg text-blue-600 dark:text-blue-400">
                  {getCategoryIcon(group.id)}
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900 dark:text-white">
                  {group.title[language]}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-500/40 transition-colors"
                  >
                    <span className="text-[12px] sm:text-[14px]">{skill.name}</span>
                    {skill.badge && (
                      <span className="text-[10px] sm:text-[12px] px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
