import React from 'react';
import { useNavigate } from 'react-router-dom';
import CtaButton from './CtaButton';

export default function CloserSection({ onOpenBooking }) {
  const navigate = useNavigate();
  const handleBooking = typeof onOpenBooking === 'function' ? onOpenBooking : () => navigate('/match');

  return (
    <section className="py-24 relative bg-bg-page border-t border-border-color overflow-hidden w-full">
      
      {/* Ambient Backtech Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F84B1D]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="bg-bg-surface border border-[#F84B1D]/40 rounded-3xl p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          
          {/* Top Badge: Get Started */}
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs mb-6">
            Get Started
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-text-heading tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Get your <span className="text-[#F84B1D]">time back?</span>
          </h2>

          {/* Subheading */}
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            Book a discovery call today. We&apos;ll map out your exact operational bottlenecks and match you with the perfect dedicated EA in 14 business days.
          </p>

          {/* Action Button */}
          <div className="pt-8 flex justify-center">
            <CtaButton onClick={handleBooking} size="lg" />
          </div>

        </div>
      </div>
    </section>
  );
}

