import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BrandPattern from './BrandPattern';

export default function CloserSection({ onOpenBooking }) {
  const navigate = useNavigate();
  const handleBooking = typeof onOpenBooking === 'function' ? onOpenBooking : () => navigate('/match');

  return (
    <section className="py-24 relative bg-bg-page border-t border-border-color overflow-hidden w-full">
      
      {/* Background orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F84B1D]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="bg-gradient-to-b from-[#1C120E] via-[#141215] to-[#0F0F12] border border-[#F84B1D]/40 rounded-3xl p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden backdrop-blur-xl">
          
          {/* Subtle Brand Pattern Watermark in Background */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-15 pointer-events-none">
            <BrandPattern className="w-full h-full" darkVariant={false} />
          </div>

          {/* Top Badge: Brand orange, no icon, capital first letter, generous padding */}
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs mb-6">
            Limited executive cohort available
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Get Your <span className="text-[#F84B1D]">Time Back?</span>
          </h2>

          {/* Subheading */}
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            Book a free 20-minute discovery call and get matched with your Top 1% Executive Assistant in 14 business days.
          </p>

          {/* Action Button */}
          <div className="pt-8">
            <button
              onClick={handleBooking}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#F84B1D] hover:bg-[#E53D17] text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider shadow-2xl shadow-[#F84B1D]/40 hover:shadow-[#F84B1D]/60 transition-all duration-200 transform hover:-translate-y-1"
            >
              <span>Get Matched with your EA Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust note */}
          <p className="text-xs sm:text-sm text-zinc-400 mt-4">
            No obligation. No hard sell. Just a candid assessment of what's eating your time.
          </p>

        </div>
      </div>
    </section>
  );
}

