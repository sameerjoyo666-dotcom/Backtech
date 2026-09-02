import React from 'react';
import { Clock, Briefcase, Check, Search, Award, UserCheck } from 'lucide-react';
import solutionHeroImg from '/solution-ea.jpg';

export default function SolutionSection({ onOpenBooking }) {
  const checklistItems = [
    'Already trained on how founders think',
    'Pre-trained on US Market Standard Tools',
    'One dedicated EA per founder'
  ];

  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: 'Precision Sourcing',
      desc: 'We scan thousands of applicants to identify top-tier administrative and operational talent globally.'
    },
    {
      step: 2,
      icon: Award,
      title: 'Comprehensive Evaluation',
      desc: 'Only the top 1% pass intensive assessments and deep interviews ensuring founder-level alignment.'
    },
    {
      step: 3,
      icon: UserCheck,
      title: 'Your Dedicated EA',
      desc: 'Ready to integrate seamlessly into your workflow and start buying back your time on day one.'
    }
  ];

  return (
    <section id="solution" className="py-20 sm:py-28 bg-bg-surface relative overflow-hidden">
      
      {/* Background Ambience Texture */}
      <div className="absolute inset-0 bg-grain-texture opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#F84B1D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-20 sm:space-y-24">
        
        {/* ================= TOP CARD: YOU DON'T TRAIN YOUR EA. WE DO. ================= */}
        <div className="bg-[#121214] border border-zinc-800/90 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Column: Headline, Divider, Subtext & Study Callout */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center space-y-6 sm:space-y-8">
              
              <div className="space-y-5 sm:space-y-6">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.15]">
                  You Don't Train Your EA.<br />
                  <span className="text-[#F84B1D] block mt-1">We Do.</span>
                </h2>

                {/* Orange Horizontal Accent Line */}
                <div className="w-44 h-0.5 bg-[#F84B1D]" />

                <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                  We source, vet, and train your EA<br className="hidden sm:inline" /> so you never have to.
                </p>
              </div>

              {/* Study Callout Box */}
              <div 
                onClick={onOpenBooking}
                className="p-5 sm:p-6 rounded-2xl bg-[#1C1614] border border-[#F84B1D]/25 shadow-xl flex items-center gap-4 sm:gap-5 cursor-pointer hover:border-[#F84B1D]/45 transition-all group"
              >
                {/* Clock & Briefcase Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center flex-shrink-0 relative group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-[#F84B1D] text-white flex items-center justify-center shadow-xs">
                    <Briefcase className="w-3 h-3" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                    Reclaim 500+ hours annually
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Executives save up to 12.4 hours a week with dedicated EA support
                  </p>
                  <span className="text-xs sm:text-sm font-semibold text-[#F84B1D] block pt-0.5">
                    -Stealth Agents Study
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Image with BackTech Laptop & Stats Bar (Never Cut) */}
            <div className="lg:col-span-6 flex items-center justify-center overflow-hidden bg-[#101012]">
              <img
                src={solutionHeroImg}
                alt="BackTech Executive Assistant with Dedicated Laptop"
                className="w-full h-auto object-contain block select-none"
              />
            </div>

          </div>
        </div>

        {/* ================= BOTTOM SECTION: WHAT YOU ACTUALLY GET ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading + 3 Checklist Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.2]">
              What You<br />
              <span className="text-[#F84B1D]">Actually Get</span>
            </h3>

            <div className="space-y-3 pt-2">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#121215] border border-zinc-800/80 flex items-center gap-3.5 shadow-sm hover:border-zinc-700 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-[#F84B1D] flex items-center justify-center flex-shrink-0 text-[#F84B1D]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-zinc-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Numbered Steps matching Reference */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {processSteps.map((stepItem) => {
              const IconComp = stepItem.icon;
              return (
                <div key={stepItem.step} className="relative pt-2">
                  {/* Number Badge on Top-Left Corner */}
                  <div className="absolute -left-2.5 -top-1 w-8 h-8 rounded-full bg-[#F84B1D] text-white font-heading font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-lg shadow-[#F84B1D]/30 z-10">
                    {stepItem.step}
                  </div>

                  {/* Step Card */}
                  <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#131316] border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-center gap-5 sm:gap-6 shadow-md pl-8 sm:pl-9">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#1C1C22] border border-zinc-700/60 text-white flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-[#F84B1D]">
                        {stepItem.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}


