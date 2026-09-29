import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = t.contact.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.errors.emailRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = t.contact.errors.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.errors.messageMinLength;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on input
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-[#131c31] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
        <div className="text-center py-10 px-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {t.contact.successTitle}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto mb-8 leading-relaxed">
            {t.contact.successDesc}
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            <RotateCcw size={16} />
            <span>{t.contact.sendAnother}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#131c31] p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
      <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white mb-5">
        <Send size={18} className="text-blue-500" />
        {t.contact.formTitle}
      </h3>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name input */}
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            {t.contact.nameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.contact.namePlaceholder}
            className={`w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 text-[13px] focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? 'border-red-500 focus:ring-red-500/30'
                : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500'
            }`}
            disabled={isSubmitting}
            autoComplete="name"
          />
          {errors.name && (
            <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
              <AlertCircle size={13} />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email input */}
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            {t.contact.emailLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.contact.emailPlaceholder}
            className={`w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 text-[13px] focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? 'border-red-500 focus:ring-red-500/30'
                : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500'
            }`}
            disabled={isSubmitting}
            autoComplete="email"
          />
          {errors.email && (
            <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
              <AlertCircle size={13} />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Message input */}
        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            {t.contact.messageLabel} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contact.messagePlaceholder}
            className={`w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border text-slate-900 dark:text-white placeholder-slate-400 text-[13px] focus:outline-none focus:ring-2 transition-all resize-y ${
              errors.message
                ? 'border-red-500 focus:ring-red-500/30'
                : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500/30 focus:border-blue-500'
            }`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
              <AlertCircle size={13} />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={16} />
          <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
        </button>
      </form>
    </div>
  );
};
