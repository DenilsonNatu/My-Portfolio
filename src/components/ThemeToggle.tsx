import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-200/70 hover:bg-slate-300/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300/50 dark:border-slate-700/60 transition-all duration-200 shadow-sm cursor-pointer"
      aria-label={t.navbar.themeToggle}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        <>
          <Sun size={16} className="text-amber-400" />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={16} className="text-indigo-600" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
};
