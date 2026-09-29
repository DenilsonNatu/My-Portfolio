import React from 'react';
import { Target, Zap, Users, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/personalInfo';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  const traitIcons = [
    <Target key="target" size={20} />,
    <Zap key="zap" size={20} />,
    <Users key="users" size={20} />,
    <Code key="code" size={20} />,
  ];

  return (
    <section id="about" className="py-12 bg-slate-100/60 dark:bg-[#111827]/70 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            {t.about.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
            {t.about.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-5 items-start">
          {/* Left: Bio & Highlights */}
          <div className="lg:col-span-7 bg-white dark:bg-[#131c31] p-4 lg:p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm space-y-3">
            {personalInfo.about.paragraphs[language].map((para, index) => (
              <p key={index} className="text-[13px] sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Quick Facts Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3 pt-4 mt-6 border-t border-slate-200 dark:border-slate-800">
              {personalInfo.about.highlights.map((item, i) => (
                <div key={i} className="p-2 lg:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                  <span className="text-[11px] lg:text-[13px] font-medium text-slate-500 dark:text-slate-400 block mb-1">
                    {item.label[language]}
                  </span>
                  <p className="text-[13px] lg:text-[15px] font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Work Traits & Value Props */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3 lg:gap-5">
            {t.about.traits.map((trait, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 lg:p-5 rounded-2xl bg-white dark:bg-[#131c31] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200 group"
              >
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shrink-0">
                  {traitIcons[idx % traitIcons.length]}
                </div>
                <div>
                  <h3 className="font-bold text-[13px] sm:text-[15px] text-slate-900 dark:text-white mb-1">
                    {trait.title}
                  </h3>
                  <p className="text-[13px] sm:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {trait.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
