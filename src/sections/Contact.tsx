import React from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/personalInfo';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const channels = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/denilsonnatu',
      href: personalInfo.linkedin,
    },
    {
      icon: <GithubIcon size={20} />,
      label: 'GitHub',
      value: 'https://github.com/DenilsonNatu',
      href: personalInfo.github,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
          {/* Left: Contact Info Channels */}
          <div className="lg:col-span-5 bg-white dark:bg-[#131c31] p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white mb-3">
                <MessageSquare size={18} className="text-blue-500" />
                {t.contact.directContactTitle}
              </h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.contact.directContactDesc}
              </p>
            </div>

            <div className="space-y-3">
              {channels.map((channel, i) => {
                const Content = (
                  <div className="flex items-center gap-4 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200 group">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shrink-0">
                      {channel.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                        {channel.label}
                      </span>
                      <p className="text-[13px] font-semibold text-slate-900 dark:text-white truncate">
                        {channel.value}
                      </p>
                    </div>
                  </div>
                );

                return channel.href ? (
                  <a
                    key={i}
                    href={channel.href}
                    target={channel.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={i}>{Content}</div>
                );
              })}
            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
