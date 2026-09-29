import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/personalInfo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.navbar.home, href: '#home' },
    { label: t.navbar.about, href: '#about' },
    { label: t.navbar.skills, href: '#skills' },
    { label: t.navbar.experience, href: '#experience' },
    { label: t.navbar.projects, href: '#projects' },
    { label: t.navbar.academicProjects, href: '#academic' },
    { label: t.navbar.education, href: '#education' },
    { label: t.navbar.contact, href: '#contact' },
  ];

  return (
    <footer className="py-14 bg-slate-50 dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {t.hero.role}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.footer.socials}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={16} />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>
            © {currentYear} {personalInfo.name}. {t.footer.rights}
          </p>
          <p>{t.footer.designedWith}</p>
        </div>
      </div>
    </footer>
  );
};
