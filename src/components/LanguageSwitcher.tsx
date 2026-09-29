import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="inline-flex items-center">
      <button
        type="button"
        onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300/50 dark:border-slate-700/60 transition-all duration-200 shadow-sm cursor-pointer"
        aria-label={t.navbar.langToggle}
        title="Switch language (ID / EN)"
      >
        <Globe size={14} className="text-blue-500 dark:text-blue-400" />
        <span className="font-bold">
          {language === 'id' ? 'ID' : 'EN'}
        </span>
        <span className="text-slate-400 dark:text-slate-500 text-[10px]">
          / {language === 'id' ? 'EN' : 'ID'}
        </span>
      </button>
    </div>
  );
};
