import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FaqSection from '../components/FaqSection';
import CloserSection from '../components/CloserSection';
import FooterSection from '../components/FooterSection';

export default function PricingPage() {
  const navigate = useNavigate();

  const planFeatures = [
    'One dedicated, full-time Executive Assistant per founder',
    'Vetted, trained, and fully managed by BackTech',
    'Matched to your business, not just your calendar',
    'Ongoing performance tracking, included'
  ];

  const caseStudyStats = [
    {
      label: 'Monthly overhead savings',
      stat: '$3,500+'
    },
    {
      label: 'Tasks fully delegated',
      stat: '40+'
    },
    {
      label: 'Backtech EA hired',
      stat: '1'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-900 font-sans selection:bg-[#F84B1D] selection:text-white antialiased flex flex-col justify-between">
      
      {/* Top Navbar */}
      <Navbar activePage="pricing" onOpenBooking={() => navigate('/match')} />

      {/* Main Pricing Content on Crisp Ivory Canvas */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-24 w-full">
        
        {/* Header with Eyebrow Badge & Headline */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12 sm:mb-16">
          
          {/* Pricing Badge: Brand orange, no icon, no caps, generous padding */}
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs mb-1">
            Pricing
          </div>

          {/* Headline: in Brand Orange */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#F84B1D] tracking-tight leading-tight">
            One Flat Rate. Zero Surprises.
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base font-normal">
            A transparent investment for top-tier executive support. Sourced, vetted, and trained for maximum leverage.
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ================= LEFT CARD: PRICING CARD (DARK) ================= */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-[#141416] text-white border border-[#F84B1D]/30 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            {/* Ambient Reddish Orange Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F84B1D]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Header: Sourced, vetted, and trained heading (no AI icon) */}
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight leading-snug text-white">
                  Sourced, vetted, and trained. All handled by BackTech.
                </h3>
              </div>

              {/* Divider */}
              <div className="border-b border-zinc-800" />

              {/* Flat Price Display */}
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-none">
                  $1,800
                </span>
                <span className="text-zinc-400 font-medium text-sm sm:text-base">
                  / per month
                </span>
              </div>

              {/* Primary CTA Button */}
              <div>
                <button
                  onClick={() => navigate('/match')}
                  className="w-full py-4 px-6 rounded-xl bg-white hover:bg-[#F84B1D] text-zinc-950 hover:text-white font-heading font-bold text-sm sm:text-base tracking-wide transition-all shadow-md text-center block focus:outline-none"
                >
                  Get Matched With Your EA
                </button>
              </div>

              {/* Feature Checklist: with exact orange circular checkmarks */}
              <div className="space-y-3.5 pt-2">
                {planFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <div className="w-5 h-5 rounded-full border-2 border-[#F84B1D] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#F84B1D]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="leading-snug pt-0.5">{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Fine Print */}
            <div className="pt-6 mt-6 border-t border-zinc-800/80 text-[11px] text-zinc-400 text-center">
              Flat monthly rate after your matching period.
            </div>

          </div>

          {/* ================= RIGHT CARD: FOUNDER CASE STUDY & STATS ================= */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-10 bg-white border border-[#E5E0D8] shadow-xs flex flex-col justify-between text-left">
            
            <div className="space-y-7">
              
              {/* Headline, Quote & Attribution */}
              <div className="space-y-4 pb-6 border-b border-zinc-100">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-zinc-900 tracking-tight leading-snug">
                  Why Executives Trust Our EAs with Daily Operations
                </h3>
                <div className="space-y-2">
                  <p className="text-zinc-700 text-sm sm:text-base italic leading-relaxed">
                    &ldquo;I used to think I had to do everything myself to keep it done right. Now my EA handles it better than I ever did.&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900">
                    Sameer Ashraf, <span className="text-[#F84B1D] font-bold">CEO, Jazz Telecom LLC</span>
                  </p>
                </div>
              </div>

              {/* 3 Stat Rows with Large Bold Numbers (No Circle Progress) */}
              <div className="space-y-6 sm:space-y-7">
                {caseStudyStats.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between gap-4 pb-5 ${
                      idx < caseStudyStats.length - 1 ? 'border-b border-zinc-100' : ''
                    }`}
                  >
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-zinc-800 leading-snug block">
                      {item.label}
                    </span>

                    {/* Large Bold Stat Value */}
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#F84B1D] tracking-tight flex-shrink-0">
                      {item.stat}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Verified Case Study Note */}
            <div className="pt-6 mt-6 border-t border-zinc-100 text-xs text-zinc-500 italic">
              Verified Founder Case Study — Jazz Telecom LLC
            </div>

          </div>

        </div>

        {/* ================= BOTTOM STAT BAR (NO YELLOW FILL, NO ICON) ================= */}
        <div className="mt-8 sm:mt-10 rounded-2xl border border-[#F84B1D]/25 bg-transparent p-5 sm:p-6 text-center">
          <p className="text-zinc-800 text-sm sm:text-base font-semibold leading-relaxed">
            <span className="text-[#F84B1D] font-bold">1 in 4 founders</span> has high delegator talent. The rest just haven't found the right EA yet.
          </p>
        </div>

        {/* ================= UNIFIED FAQS ACCORDION (SAME AS HOMEPAGE) ================= */}
        <FaqSection onOpenBooking={() => navigate('/match')} theme="light" />

      </main>

      {/* Closer CTA Section across both Home & Pricing */}
      <CloserSection onOpenBooking={() => navigate('/match')} />

      {/* Universal Footer Component */}
      <FooterSection onOpenBooking={() => navigate('/match')} />

    </div>
  );
}


