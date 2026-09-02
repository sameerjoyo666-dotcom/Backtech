import React from 'react';
import { ShieldCheck, FileText, UserCheck, Laptop, Headset, LockKeyhole } from 'lucide-react';
import CtaButton from './CtaButton';

export default function SecuritySection({ onOpenBooking }) {
  const securityPillars = [
    {
      icon: FileText,
      title: 'NDA signed before day one',
      desc: 'Legally binding non-disclosure agreements executed before any credential access or onboarding begins.'
    },
    {
      icon: UserCheck,
      title: 'Background-verified, ID-checked talent only',
      desc: 'Comprehensive multi-stage identity verification, background screening, and track record verification.'
    },
    {
      icon: Laptop,
      title: "Backtech's controlled devices, with remote wipe",
      desc: 'Work performed on secured, encrypted enterprise devices equipped with immediate remote wipe capability.'
    },
    {
      icon: Headset,
      title: 'Dedicated account manager, not a ticket queue',
      desc: 'A dedicated point of contact to ensure seamless communication, feedback implementation, and proactive support.'
    },
    {
      icon: LockKeyhole,
      title: 'Institutional-grade security on every tool',
      desc: 'Encrypted credential vaults, strict MFA/2FA access protocols, and least-privilege permission controls.'
    },
  ];

  return (
    <section id="security" className="py-20 sm:py-28 relative bg-bg-surface border-y border-border-color">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#F84B1D]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
            Security &amp; support
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Your Business Stays Yours.{' '}
            <span className="text-[#F84B1D]">We Just Help You Run It.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg">
            Handing over your inbox and calendar takes trust. Here's how we protect it.
          </p>
        </div>

        {/* Security Grid (Mobile Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {securityPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#121216]/95 border border-zinc-800/80 hover:border-[#F84B1D]/40 rounded-2xl p-5 sm:p-7 transition-all duration-300 group shadow-xl backdrop-blur-xl"
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#F84B1D]/10 border border-[#F84B1D]/20 text-[#F84B1D] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 group-hover:bg-[#F84B1D] group-hover:text-white transition-all">
                  <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

          {/* Callout Box */}
          <div className="bg-gradient-to-br from-[#1C120E] to-[#121216] border border-[#F84B1D]/30 rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-xl">
            <div className="space-y-2">
              <span className="text-[11px] sm:text-xs font-bold text-[#F84B1D] uppercase tracking-wider">Peace of Mind</span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">Full Protection &amp; Zero Risk</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                You get executive leverage with institutional safety and a 14-business-day rematch guarantee.
              </p>
            </div>
            <div className="pt-4 sm:pt-5 flex justify-center">
              <CtaButton onClick={onOpenBooking} size="sm" className="w-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

