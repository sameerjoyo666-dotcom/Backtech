import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Shield, Clock, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialRole = 'Entrepreneur/founder' }) {
  const [role, setRole] = useState(initialRole);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState('Inbox & Calendar Mastery');
  const [timeZone, setTimeZone] = useState('US - Central Time (CT)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
    }
  }, [initialRole]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#F84B1D', '#FFA082', '#FFFFFF', '#141416']
      });
    } catch (err) {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg bg-[#121216]/95 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden animate-in zoom-in-95 duration-200 backdrop-blur-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/60 hover:bg-zinc-800 transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-2">
              <span className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
                Discovery call scheduling
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Match with Your <span className="text-[#F84B1D]">Top 1% EA</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Tell us about your operational bottleneck. We'll curate matched candidate profiles within 14 business days.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Your Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-[#18181D] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F84B1D]"
                  >
                    <option value="Entrepreneur/founder">Entrepreneur / Founder</option>
                    <option value="Business owner">Business Owner</option>
                    <option value="VP/Executive/C-Suite">VP / Executive / C-Suite</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Primary Focus Area
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="w-full bg-[#18181D] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#F84B1D]"
                  >
                    <option value="Inbox & Calendar Mastery">Inbox &amp; Calendar Mastery</option>
                    <option value="Travel & Executive Logistics">Travel &amp; Executive Logistics</option>
                    <option value="Ops & Workflow Automation">Ops &amp; Workflow Automation</option>
                    <option value="Full Executive Leverage">Full Executive Leverage (All-in-one)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#18181D] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#F84B1D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme AI"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#18181D] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#F84B1D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#18181D] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#F84B1D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Your Primary Timezone
                </label>
                <select
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="w-full bg-[#18181D] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F84B1D]"
                >
                  <option value="US - Eastern Time (ET)">US - Eastern Time (ET)</option>
                  <option value="US - Central Time (CT)">US - Central Time (CT)</option>
                  <option value="US - Mountain Time (MT)">US - Mountain Time (MT)</option>
                  <option value="US - Pacific Time (PT)">US - Pacific Time (PT)</option>
                  <option value="UK / Europe (GMT/CET)">UK / Europe (GMT/CET)</option>
                  <option value="Other">Other Global Timezone</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#F84B1D] hover:bg-[#E53D17] text-white font-heading font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#F84B1D]/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Confirm &amp; Schedule Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-400 pt-1">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-[#F84B1D]" /> 100% Confidential</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#F84B1D]" /> 20-Min Intro</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#F84B1D]" /> 14-Day Match</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Discovery Call Confirmed!
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-white">{fullName || 'Founder'}</strong>. Our executive matching team has received your priority request for <strong className="text-white">{company || 'your company'}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#18181D] border border-zinc-800 text-xs text-zinc-300 text-left space-y-2">
              <p className="text-white font-semibold">
                What happens next?
              </p>
              <p className="text-zinc-400">1. We review your role (<span className="text-white font-medium">{role}</span>) and timezone ({timeZone}).</p>
              <p className="text-zinc-400">2. A calendar invitation has been sent to <span className="text-[#F84B1D] font-medium">{email || 'your email'}</span>.</p>
              <p className="text-zinc-400">3. We present your curated top 1% candidate profiles.</p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

