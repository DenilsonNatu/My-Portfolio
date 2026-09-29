import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { achievements } from '../data/achievements';

export const Achievements: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="achievements" className="py-20 bg-slate-100/60 dark:bg-[#111827]/70 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            {t.achievements.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-3">
            {t.achievements.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white dark:bg-[#131c31] p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {item.category}
                </span>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                  {item.year}
                </span>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.issuer}
                  </p>
                </div>
              </div>

              {item.description && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description[language]}
                </p>
              )}

              {item.credentialUrl && (
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <ShieldCheck size={14} className="text-blue-500" />
                    <span>{t.achievements.viewCredential}</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
