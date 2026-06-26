'use client';

import React, { useState, useEffect } from 'react';

type TrialModalProps = {
  isOpen: boolean;
  onClose: () => void;
  locale: 'en' | 'de';
};

export function TrialModal({ isOpen, onClose, locale }: TrialModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const labels = locale === 'en' ? {
    title: "Start your 14-day free trial",
    subtitle: "Get full access to Fahrly's operational dashboard. No credit card required.",
    firstName: "First Name",
    lastName: "Last Name",
    company: "Company / Amazon DSP Name",
    email: "Business Email",
    phone: "Phone Number",
    submit: "Apply for Trial",
    successTitle: "Awaiting activation",
    successMsg: "Thanks for your interest. A Fahrly representative will contact you shortly to activate your account and verify your DSP credentials.",
    close: "Close"
  } : {
    title: "Starten Sie Ihren 14-tägigen Test",
    subtitle: "Vollständiger Zugriff auf das Fahrly-Dashboard. Keine Kreditkarte erforderlich.",
    firstName: "Vorname",
    lastName: "Nachname",
    company: "Firma / Amazon-DSP-Name",
    email: "Geschäftliche E-Mail",
    phone: "Telefonnummer",
    submit: "Testzugang anfordern",
    successTitle: "Aktivierung ausstehend",
    successMsg: "Vielen Dank für Ihr Interesse. Ein Fahrly-Mitarbeiter wird Sie in Kürze kontaktieren, um Ihren Account zu aktivieren und Ihre DSP-Daten zu verifizieren.",
    close: "Schließen"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('https://script.google.com/macros/s/AKfycbw9Um8mVWHrJh-GktaY2acdwgh4tbu7EZR2_81bemPicUADqcXud7DWoHMGeW5I0lrrXA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Synthetic delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSuccess(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A0A0F]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 ring-blue-500 rounded-full p-1"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-10">
          {!isSuccess ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {labels.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
                {labels.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{labels.firstName}</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ring-blue-500 transition-all"
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{labels.lastName}</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ring-blue-500 transition-all"
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{labels.company}</label>
                  <input 
                    required
                    type="text"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ring-blue-500 transition-all"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{labels.email}</label>
                  <input 
                    required
                    type="email"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ring-blue-500 transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{labels.phone}</label>
                  <input 
                    required
                    type="tel"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ring-blue-500 transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full mt-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : labels.submit}
                </button>
              </form>
            </>
          ) : (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto border border-green-500/20">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{labels.successTitle}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {labels.successMsg}
              </p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-bold rounded-xl transition-all"
              >
                {labels.close}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
