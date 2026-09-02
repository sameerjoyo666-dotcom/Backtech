import React, { useState } from 'react';
import BrandPattern from './BrandPattern';

export default function HeroSection({ onOpenBooking, setSelectedRole }) {
  const [activeRole, setActiveRole] = useState('Entrepreneur/founder');

  const roleOptions = [
    { id: 'Entrepreneur/founder', label: 'Entrepreneur/founder' },
    { id: 'Business owner', label: 'Business owner' },
    { id: 'VP/Executive/C-Suite', label: 'VP/Executive/C-Suite' },
    { id: 'Other', label: 'Other' },
  ];

  const handleRoleSelect = (roleId) => {
    setActiveRole(roleId);
    if (setSelectedRole) {
      setSelectedRole(roleId);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (setSelectedRole) {
      setSelectedRole(activeRole);
    }
    onOpenBooking();
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden bg-grain-texture">
      
      {/* Background Ambience & Reddish Orange Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[680px] lg:w-[850px] h-[350px] sm:h-[500px] bg-[#F84B1D]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#F84B1D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: FIGMA HEADLINE & COPY ================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Main Headline (Exact Copy from Figma Image 1) */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.14]">
              Get Your Time Back<br className="hidden sm:inline" />
              and Scale Faster with<br />
              <span className="text-[#F84B1D]">Top 1% EAs</span> for<br className="hidden sm:inline" />
              Founders &amp; CEOs
            </h1>

            {/* Subheadline with Left Accent Bar */}
            <div className="flex items-stretch gap-3 sm:gap-4 pt-1">
              <div className="w-1 bg-[#F84B1D] rounded-full flex-shrink-0" />
              <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed">
                Vetted. Trained. Managed. Your EA is ready to work inside your business in days, not months.
              </p>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: FIGMA ROLE CARD ================= */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-2 lg:mt-0">
            <div className="relative w-full max-w-md">
              
              {/* Brand Geometric Shape Pattern Backdrop */}
              <div className="absolute -inset-6 sm:-inset-10 pointer-events-none flex items-center justify-center opacity-30 sm:opacity-40 transition-opacity duration-300">
                <BrandPattern
                  className="w-[120%] h-[120%] transform -rotate-1 scale-105"
                  darkVariant={false}
                />
              </div>

              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#F84B1D]/25 via-transparent to-[#F84B1D]/10 rounded-[28px] blur-xl opacity-60 pointer-events-none" />

              {/* Card Container (Exact Figma Styling from Image 1) */}
              <div className="relative hero-form-card bg-[#141416]/95 border border-[#F84B1D]/40 hover:border-[#F84B1D]/60 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl transition-all duration-300">
                
                {/* Header */}
                <div className="space-y-1.5 mb-5 sm:mb-6">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Get Matched With Your EA
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                    What Best Describes Your Role?
                  </p>
                </div>

                {/* 4 Role Options Vertical Stack */}
                <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="space-y-2 sm:space-y-2.5">
                    {roleOptions.map((option) => {
                      const isSelected = activeRole === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => handleRoleSelect(option.id)}
                          className={`w-full text-left px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between border ${
                            isSelected
                              ? 'hero-role-btn-selected bg-[#2A2A30] border-[#F84B1D] text-white shadow-lg shadow-[#F84B1D]/15'
                              : 'hero-role-btn bg-[#212124] border-zinc-700/50 text-zinc-300 hover:bg-[#28282D] hover:border-zinc-600'
                          }`}
                        >
                          <span>{option.label}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors flex-shrink-0 ml-2 ${
                              isSelected
                                ? 'border-[#F84B1D] bg-[#F84B1D]'
                                : 'border-zinc-500 bg-transparent'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Primary CTA Button (Exact Copy from Figma Image 1) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-[#F84B1D] hover:bg-[#E03E12] text-white font-heading font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#F84B1D]/30 hover:shadow-[#F84B1D]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                    >
                      Get Matched With Your EA
                    </button>
                  </div>

                  {/* Trust Micro-copy (Exact Copy from Figma Image 1) */}
                  <p className="text-[11px] sm:text-[12px] text-zinc-400 text-center pt-1 leading-relaxed">
                    Get matched with a vetted EA in 14 business days. Free consultation.
                  </p>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
