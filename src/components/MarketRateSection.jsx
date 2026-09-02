import React, { useState } from 'react';
import { ArrowRight, Calculator, ShieldCheck } from 'lucide-react';

export default function MarketRateSection({ onOpenBooking }) {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(175); // $175/hr default founder time valuation

  const annualHoursSaved = hoursPerWeek * 50;
  const annualFounderValueSaved = annualHoursSaved * hourlyRate;

  const rateTiers = [
    { label: '$125/hr', value: 125 },
    { label: '$175/hr', value: 175 },
    { label: '$250/hr', value: 250 },
    { label: '$400/hr', value: 400 },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#08080A] border-t border-zinc-800/80 bg-grain-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header Banner */}
        <div className="bg-gradient-to-br from-[#16161B] via-[#121215] to-[#0D0D10] border border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Big Stat Callout */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <span className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
                Massive cost &amp; time efficiency
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                US EAs Cost <span className="text-[#F84B1D]">$54.5K - $100K</span> a Year. BackTech Costs Less, Delivers More.
              </h2>

              <p className="text-zinc-300 text-sm sm:text-lg font-normal leading-relaxed">
                BackTech gets you that same caliber of talent for one flat, predictable subscription — without the salary, the search, or the risk.
              </p>

              <p className="text-xs text-zinc-400 leading-relaxed">
                ZipRecruiter's data on Executive Assistant to the CEO salaries shows the $54,500–$100,000 range you're citing (25th–75th percentile), with top earners hitting $132,000.
              </p>

              <p className="text-xs text-zinc-500">
                Source: ZipRecruiter, Executive Assistant to the CEO Salary data, U.S., 2026.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F84B1D] hover:bg-[#E53D17] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#F84B1D]/30 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Get Matched with your EA Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive ROI Value Card (Mobile Responsive) */}
            <div className="lg:col-span-5 bg-[#0C0C0E]/95 border border-zinc-800/90 rounded-2xl p-5 sm:p-7 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#F84B1D]" />
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">Your Executive ROI</h3>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#F84B1D] bg-[#F84B1D]/10 px-2.5 py-0.5 sm:py-1 rounded-full">
                  Time Multiplier
                </span>
              </div>

              {/* Founder Hourly Rate Selector */}
              <div className="space-y-1.5">
                <span className="text-xs text-zinc-400 font-medium block">How do you value your time?</span>
                <div className="grid grid-cols-4 gap-1.5">
                  {rateTiers.map((tier) => (
                    <button
                      key={tier.value}
                      type="button"
                      onClick={() => setHourlyRate(tier.value)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-colors ${
                        hourlyRate === tier.value
                          ? 'bg-[#F84B1D] text-white'
                          : 'bg-[#18181D] text-zinc-400 hover:text-white border border-zinc-800'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for Hours Delegated */}
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs font-medium text-zinc-300">
                  <span>Hours delegated per week:</span>
                  <span className="font-bold text-[#F84B1D] text-sm">{hoursPerWeek} hrs/week</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#F84B1D] cursor-pointer bg-zinc-800 rounded-lg h-2"
                />
              </div>

              {/* Stat Boxes */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3.5 rounded-xl bg-[#15151A] border border-zinc-800">
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">Annual Hours Saved</p>
                  <p className="font-heading font-black text-xl sm:text-2xl text-white mt-1">
                    {annualHoursSaved}+ <span className="text-xs font-normal text-zinc-400">hrs</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#15151A] border border-zinc-800">
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium">Founder Value Unlocked</p>
                  <p className="font-heading font-black text-xl sm:text-2xl text-emerald-400 mt-1">
                    ${(annualFounderValueSaved / 1000).toFixed(0)}K+
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] sm:text-xs text-zinc-300 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F84B1D] flex-shrink-0 mt-0.5" />
                <span>Zero recruiting fees, zero equipment costs, 100% managed compliance.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

