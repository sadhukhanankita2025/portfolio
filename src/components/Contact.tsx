import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechLogo } from './TechLogo';
import {
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  MessageSquare,
  Tag,
  Loader2,
  RotateCcw
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactLinks = [
    {
      name: 'GitHub',
      handle: 'sadhukhanankita2025',
      href: PERSONAL_INFO.github,
      icon: <TechLogo name="GitHub" className="w-6 h-6" />,
      color: 'from-purple-600 to-indigo-600',
      glow: 'shadow-purple-500/20 hover:shadow-purple-500/50',
      border: 'border-purple-500/30 hover:border-purple-400',
      textColor: 'text-purple-300',
    },
    {
      name: 'LinkedIn',
      handle: 'ankita-sadhukhan',
      href: PERSONAL_INFO.linkedin,
      icon: <TechLogo name="LinkedIn" className="w-6 h-6" />,
      color: 'from-cyan-600 to-blue-600',
      glow: 'shadow-cyan-500/20 hover:shadow-cyan-500/50',
      border: 'border-cyan-500/30 hover:border-cyan-400',
      textColor: 'text-cyan-300',
    },
    {
      name: 'Naukri',
      handle: 'ankitasadhukhan',
      href: PERSONAL_INFO.naukri,
      icon: <TechLogo name="Naukri" className="w-6 h-6" />,
      color: 'from-amber-600 to-orange-600',
      glow: 'shadow-amber-500/20 hover:shadow-amber-500/50',
      border: 'border-amber-500/30 hover:border-amber-400',
      textColor: 'text-amber-300',
    },
    {
      name: 'Email',
      handle: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: <Mail className="w-6 h-6" />,
      color: 'from-pink-600 to-rose-600',
      glow: 'shadow-pink-500/20 hover:shadow-pink-500/50',
      border: 'border-pink-500/30 hover:border-pink-400',
      textColor: 'text-pink-300',
    },
    {
      name: 'Phone',
      handle: '+91 6290216493',
      href: 'tel:+916290216493',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-emerald-600 to-teal-600',
      glow: 'shadow-emerald-500/20 hover:shadow-emerald-500/50',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      textColor: 'text-emerald-300',
    },
    {
      name: 'Location',
      handle: PERSONAL_INFO.location || 'Chakdaha, WB, India',
      href: 'https://maps.google.com/?q=Chakdaha,West+Bengal,India',
      icon: <MapPin className="w-6 h-6" />,
      color: 'from-indigo-600 to-purple-600',
      glow: 'shadow-indigo-500/20 hover:shadow-indigo-500/50',
      border: 'border-indigo-500/30 hover:border-indigo-400',
      textColor: 'text-indigo-300',
    },
  ];

  // Validation function
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;

      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return undefined;

      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return undefined;

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;

      default:
        return undefined;
    }
  };

  const validateAll = (): FormErrors => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Re-validate if touched
    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-pink-300 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-lg shadow-purple-500/10"
          >
            <span>Say Hello</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4"
          >
            Get In <span className="text-gradient-primary">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-sans"
          >
            Have a project in mind, an opportunity, or just want to connect? Send me a message using the form below or reach out via socials.
          </motion.p>
        </div>

        {/* Dual Column Layout: Contact Form & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  <p className="text-xs font-mono text-slate-400">I usually reply within 24 hours</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">No Solicitations</span>
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-4 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4 shadow-lg shadow-emerald-500/20 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white mb-2">Message Sent!</h4>
                <p className="text-slate-300 max-w-md text-sm mb-6 leading-relaxed">
                  Thank you, <span className="text-purple-300 font-bold">{formData.name}</span>! Your message has been sent successfully. I'll get back to you at <span className="text-cyan-300 font-mono">{formData.email}</span> as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs tracking-wider flex items-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-purple-400" />
                  <span>Send Another Message</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-purple-400" />
                        <span>Your Name *</span>
                      </span>
                      {touched.name && !errors.name && formData.name && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. John Doe"
                        className={`w-full bg-slate-950/80 border text-sm text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none transition-all ${
                          touched.name && errors.name
                            ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                            : touched.name && !errors.name && formData.name
                            ? 'border-emerald-500/60 focus:border-emerald-400'
                            : 'border-slate-800 focus:border-purple-500/80'
                        }`}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Your Email *</span>
                      </span>
                      {touched.email && !errors.email && formData.email && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. john@example.com"
                        className={`w-full bg-slate-950/80 border text-sm text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none transition-all ${
                          touched.email && errors.email
                            ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                            : touched.email && !errors.email && formData.email
                            ? 'border-emerald-500/60 focus:border-emerald-400'
                            : 'border-slate-800 focus:border-purple-500/80'
                        }`}
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-amber-400" />
                      <span>Subject *</span>
                    </span>
                    {touched.subject && !errors.subject && formData.subject && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Project Inquiry / Collaboration"
                      className={`w-full bg-slate-950/80 border text-sm text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none transition-all ${
                        touched.subject && errors.subject
                          ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                          : touched.subject && !errors.subject && formData.subject
                          ? 'border-emerald-500/60 focus:border-emerald-400'
                          : 'border-slate-800 focus:border-purple-500/80'
                      }`}
                    />
                  </div>
                  {touched.subject && errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
                      <span>Message *</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Hello Ankita, I would like to discuss..."
                      className={`w-full bg-slate-950/80 border text-sm text-white placeholder-slate-500 rounded-xl px-4 py-3 focus:outline-none transition-all resize-none ${
                        touched.message && errors.message
                          ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10'
                          : touched.message && !errors.message && formData.message
                          ? 'border-emerald-500/60 focus:border-emerald-400'
                          : 'border-slate-800 focus:border-purple-500/80'
                      }`}
                    />
                  </div>
                  {touched.message && errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Links Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-6"
          >
            <div className="bg-slate-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Prefer direct communication? Connect on social platforms or via email:
              </p>

              <div className="grid grid-cols-2 gap-4">
                {contactLinks.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex flex-col p-4 rounded-2xl bg-slate-950/80 border ${item.border} ${item.glow} transition-all duration-300 relative group`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white border border-slate-800 group-hover:bg-gradient-to-br ${item.color} transition-all`}>
                        {item.icon}
                      </div>
                      {item.href.startsWith('http') && (
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <span className={`text-xs font-bold ${item.textColor} group-hover:text-white transition-colors`}>
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 truncate block mt-0.5">
                      {item.handle}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Resume & Location Card */}
            <div className="bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/30 border border-purple-500/30 rounded-3xl p-6 backdrop-blur-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400 font-bold block mb-1">
                  Based In
                </span>
                <h4 className="text-sm font-bold text-white">Chakdaha, West Bengal, India</h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Available for Remote & Hybrid Roles</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
                <MapPin className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



