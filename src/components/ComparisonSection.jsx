import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function ComparisonSection({ onOpenBooking }) {
  const comparisonData = [
    {
      feature: 'Vetting Process',
      averageVA: 'Self-reported, no verification',
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
      backtech: 'Pre-trained on M365 & G-Suite',
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
    <section id="comparison" className="py-20 sm:py-28 relative bg-bg-page border-y border-border-color">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[400px] bg-[#F84B1D]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            An Average VA and a BackTech EA{' '}
            <span className="text-[#F84B1D]">Aren't the Same Hire.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg">
            One costs less up front. The other actually gives you your time back. Here's the difference.
          </p>
        </div>

        {/* Minimalist Comparison Table Card (Matching User's Reference) */}
        <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-[#0A0A0C] p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden comparison-table-card">
          
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              
              {/* Table Column Headers */}
              <div className="grid grid-cols-12 pb-5 mb-2 border-b border-zinc-800/90 text-xs font-bold tracking-wider uppercase">
                <div className="col-span-4 text-zinc-500">
                  FEATURE
                </div>
                <div className="col-span-4 text-zinc-500">
                  AVERAGE VA
                </div>
                <div className="col-span-4 text-[#F84B1D]">
                  BACKTECH EA
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-zinc-800/60">
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 py-4 sm:py-5 items-start gap-2 hover:bg-white/[0.015] transition-colors"
                  >
                    {/* Feature Title */}
                    <div className="col-span-4 font-bold text-sm sm:text-base text-white pr-3">
                      {row.feature}
                    </div>

                    {/* Average VA Description */}
                    <div className="col-span-4 text-xs sm:text-sm text-zinc-400 pr-3 leading-relaxed">
                      {row.averageVA}
                    </div>

                    {/* BackTech EA with Orange Checkmark */}
                    <div className="col-span-4 text-xs sm:text-sm text-white font-normal leading-relaxed flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#F84B1D] stroke-[2.5] flex-shrink-0 mt-0.5" />
                      <span>{row.backtech}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Footnote */}
          <div className="pt-6 border-t border-zinc-800/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-500">
              * business days
            </span>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F84B1D] hover:bg-[#E03E12] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#F84B1D]/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Get Matched with your EA Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}


