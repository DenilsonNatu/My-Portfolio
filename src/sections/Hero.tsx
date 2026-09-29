import React from 'react';
import { ArrowRight, Mail,} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/personalInfo';
import avatarImg from '../assets/avatar.jpeg';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="home" className="py-12">
      {/* Subtle Background Glow */}

      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-8">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Role Header */}
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-2">
              {t.hero.role}
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              {t.hero.greeting}{' '}
              <span className="text-blue-500">{personalInfo.name}</span>
            </h1>

            {/* Tagline / Professional Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personalInfo.summary[language]}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Mail size={18} />
                <span>{t.hero.contactMe}</span>
              </a>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-md">
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-mono text-slate-900 dark:text-white">2</p>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">{t.hero.stats.projects}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-mono text-slate-900 dark:text-white">3</p>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">{t.hero.stats.collegeProjects}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Avatar Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative p-2 sm:p-3 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/20 border border-blue-500/30 shadow-2xl backdrop-blur-sm group">
              <img
                src={avatarImg}
                alt={`${personalInfo.name}`}
                className="w-56 h-56 sm:w-64 sm:h-80 lg:w-80 lg:h-[380px] object-cover object-[center_20%] rounded-2xl transition-transform duration-500 group-hover:scale-[1.05]"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
