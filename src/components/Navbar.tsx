import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { personalInfo } from '../data/personalInfo';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'academic',
        'education',
        'contact',
      ];

      const header = document.querySelector('header') as HTMLElement | null;
      const headerHeight = header?.getBoundingClientRect().height ?? 80;

      const scrollPosition = window.scrollY + headerHeight + 10;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.navbar.home, href: '#home' },
    { id: 'about', label: t.navbar.about, href: '#about' },
    { id: 'skills', label: t.navbar.skills, href: '#skills' },
    { id: 'projects', label: t.navbar.projects, href: '#projects' },
    { id: 'academic', label: t.navbar.academicProjects, href: '#academic' },
    { id: 'education', label: t.navbar.education, href: '#education' },
    { id: 'contact', label: t.navbar.contact, href: '#contact' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    const target = document.querySelector(href) as HTMLElement | null;

    if (!target) return;

    const header = document.querySelector('header') as HTMLElement | null;
    const headerHeight = header?.getBoundingClientRect().height ?? 80;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    });

    window.history.pushState(null, '', href);
};

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-4">
        <div className="flex items-center justify-between h-[60px] sm:h-[80px]">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 text-slate-900 dark:text-white group">
            <span className="font-bold text-base sm:text-[18px] tracking-tight">{personalInfo.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-2 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === link.id
                      ? 'text-blue-600 dark:text-blue-400 text-xs font-semibold'
                      : ' text-xs text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-2 sm:gap-3">

            <button
              type="button"
              className=" p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={t.navbar.menuToggle}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#131c31]/95 backdrop-blur-lg ${mobileMenuOpen ? 'max-h-[500px] opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
          }`}
      >
        <ul className="flex flex-col space-y-1.5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === link.id
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/15 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-end gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
