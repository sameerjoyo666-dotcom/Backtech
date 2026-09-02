import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

export default function ComparisonSection({ onOpenBooking }) {
  const comparisonData = [
    {
      feature: 'Vetting Process',
      averageVA: 'Self-reported experience, no verification',
      backtech: 'Top 1% — tested on logic, communication, and ops',
    },
    {
      feature: 'Skill Level',
      averageVA: 'General task support',
      backtech: 'Executive-level: EA to founders/CEOs',
    },
    {
      feature: 'Training',
      averageVA: 'You train them from scratch',
      backtech: 'Pre-trained on modern tech stacks (Microsoft M365, G-Suite)',
    },
    {
      feature: 'HR, Taxes & Payroll',
      averageVA: 'You manage it',
      backtech: 'We handle 100%',
    },
    {
      feature: 'Reliability',
      averageVA: 'High turnover, disappears without notice',
      backtech: 'Dedicated, accountable, performance-tracked',
    },
    {
      feature: 'Replacement',
      averageVA: 'Start your search over',
      backtech: 'Free rematch within 14 days*',
    },
    {
      feature: 'Security & Confidentiality',
      averageVA: 'Unverified, no NDA enforcement',
      backtech: 'Background-verified with confidentiality agreements',
    },
    {
      feature: 'Cost Predictability',
      averageVA: 'Variable hourly billing',
      backtech: 'One flat subscription',
    },
  ];

  return (
    <section id="comparison" className="py-20 sm:py-28 relative bg-[#09090C] border-t border-zinc-800/80 bg-grain-texture">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[400px] bg-[#F84B1D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
            Why backtech is different
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            An Average VA and a BackTech EA{' '}
            <span className="text-[#F84B1D]">Aren't the Same Hire.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg">
            One costs less up front. The other actually gives you your time back. Here's the difference.
          </p>
        </div>

        {/* Mobile View: Stacked Comparison Cards (< 768px) */}
        <div className="md:hidden space-y-4 mb-8">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="bg-[#121216]/95 border border-zinc-800 rounded-2xl p-4 space-y-3 shadow-lg"
            >
              <h4 className="text-sm font-bold text-white border-b border-zinc-800/80 pb-2">
                {row.feature}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-zinc-400 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-zinc-500 block">Average VA</span>
                  <div className="flex items-start gap-1.5">
                    <X className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0 mt-0.5" />
                    <span>{row.averageVA}</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F84B1D]/10 border border-[#F84B1D]/30 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase text-[#F84B1D] block">BackTech EA</span>
                  <div className="flex items-start gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#F84B1D] flex-shrink-0 mt-0.5" />
                    <span>{row.backtech}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="text-xs text-zinc-500 text-center">* business days</p>
          <div className="text-center pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-full bg-[#F84B1D] hover:bg-[#E53D17] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#F84B1D]/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Matched with your EA Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop View: Full Side-by-Side Matrix (>= 768px) */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-[760px] rounded-3xl border border-zinc-800 bg-[#121215]/95 overflow-hidden shadow-2xl backdrop-blur-xl comparison-table-card">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#16161A] border-b border-zinc-800 py-5 px-6 items-center comparison-table-header">
              <div className="col-span-4 font-heading font-bold text-sm tracking-wider uppercase text-zinc-400">
                Features
              </div>
              <div className="col-span-4 font-heading font-bold text-sm tracking-wider uppercase text-zinc-400 text-center">
                Average VA
              </div>
              <div className="col-span-4 font-heading font-black text-sm tracking-wider uppercase text-white text-center bg-[#F84B1D] py-2.5 px-4 rounded-xl shadow-lg shadow-[#F84B1D]/30 flex items-center justify-center">
                <span>BackTech EA</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-zinc-800/70">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 py-4 sm:py-5 px-6 items-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-4 font-semibold text-sm text-white pr-4">
                    {row.feature}
                  </div>

                  <div className="col-span-4 text-xs sm:text-sm text-zinc-400 px-4 flex items-center gap-2">
                    <X className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                    <span>{row.averageVA}</span>
                  </div>

                  <div className="col-span-4 text-xs sm:text-sm text-white font-medium px-4 py-2 rounded-lg bg-[#F84B1D]/10 border border-[#F84B1D]/25 flex items-center gap-2 shadow-inner">
                    <Check className="w-4 h-4 text-[#F84B1D] flex-shrink-0 font-bold" />
                    <span>{row.backtech}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="p-6 bg-[#16161A]/80 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 comparison-table-footer">
              <span className="text-xs text-zinc-400">
                * business days. Free rematch within 14 business days.
              </span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F84B1D] hover:bg-[#E53D17] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#F84B1D]/30 transition-all"
              >
                <span>Get Matched with your EA Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

