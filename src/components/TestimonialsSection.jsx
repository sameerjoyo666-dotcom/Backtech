import React, { useRef, useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import CtaButton from './CtaButton';

export default function TestimonialsSection({ onOpenBooking }) {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 'tallywise',
      quote: "I used to spend my Sunday nights prepping for the week, inbox, calendar, all of it. Now my EA has it handled before I even open my laptop Monday morning.",
      highlight: "Handled before I even open my laptop Monday morning.",
      author: "Abid Hussain",
      role: "Founder & CFO",
      company: "Tallywise",
      stat: "20+ hrs/wk saved",
      initials: "AH",
      badgeTitle: "FOUNDER",
      banner: "/case-studies/tallywise.jpg",
      themeColor: "#22C55E",
      themeBg: "rgba(34, 197, 94, 0.08)"
    },
    {
      id: 'nextar',
      quote: "My EA runs my calendar better than I ever did. I haven't double-booked a meeting in four months.",
      highlight: "I haven't double-booked a meeting in four months.",
      author: "Junaid Merchant",
      role: "Founder",
      company: "Nextar Solitaire",
      stat: "0 Double-Bookings",
      initials: "JM",
      badgeTitle: "FOUNDER",
      banner: "/case-studies/nextar-solitaire.jpg",
      themeColor: "#EAB308",
      themeBg: "rgba(234, 179, 8, 0.08)"
    },
    {
      id: 'cellular',
      quote: "I was skeptical about a remote EA handling anything sensitive. Six months in, she knows my business better than most of my team.",
      highlight: "Six months in, she knows my business better than most of my team.",
      author: "Josh Hokit",
      role: "Partner",
      company: "Cellular Operations",
      stat: "6+ Months Active",
      initials: "JH",
      badgeTitle: "PARTNER",
      banner: "/case-studies/cellular-operations.jpg",
      themeColor: "#06B6D4",
      themeBg: "rgba(6, 182, 212, 0.08)"
    },
    {
      id: 'jazz',
      quote: "I used to think I had to do everything myself to keep it done right. Now my EA handles it better than I ever did.",
      highlight: "Now my EA handles it better than I ever did.",
      author: "Sameer Ashraf",
      role: "CEO",
      company: "Jazz Telecom LLC.",
      stat: "100% Delegated",
      initials: "SA",
      badgeTitle: "CEO",
      banner: "/case-studies/jazz-wireless.jpg",
      themeColor: "#3B82F6",
      themeBg: "rgba(59, 130, 246, 0.08)"
    }
  ];

  // Manual smooth horizontal scrolling
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative bg-bg-alt border-y border-border-color overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[400px] sm:h-[500px] bg-[#F84B1D]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-10 sm:space-y-14">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              We Could Say We're Great,{' '}
              <span className="text-[#F84B1D]">But Our Clients Already Did.</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg font-normal">
              Real feedback from the CEOs and founders who hired through BackTech.
            </p>
          </div>

          {/* Navigation Arrows for Slider */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full bg-[#141418] hover:bg-[#1E1E24] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full bg-[#141418] hover:bg-[#1E1E24] border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= CAROUSEL DECK (NO SIDE FADES, CLEAN CARDS) ================= */}
        <div 
          className="relative w-full -mx-4 px-4 sm:mx-0 sm:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrolling Track: Continuous Infinite Loop with Marquee or Horizontal Scroll */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {/* Repeated array for continuous flow */}
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[300px] sm:w-[380px] lg:w-[420px] flex-shrink-0 snap-center rounded-[28px] overflow-hidden bg-[#121216] border border-zinc-800 hover:border-zinc-700/80 shadow-2xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
                style={{
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)'
                }}
              >
                
                {/* 1. TOP CASE STUDY BANNER (CLEAN & UNCUT - 16:9 FULL VIEW WITHOUT OVERLAYS) */}
                <div className="relative w-full bg-[#0A0A0C] border-b border-zinc-800/80 overflow-hidden">
                  <img
                    src={item.banner}
                    alt={`${item.company} Banner`}
                    className="w-full h-auto object-contain block group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* 2. CARD LOWER BODY (Typography & Testimonial Quote) */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    {/* 5 Stars Rating */}
                    <div className="flex items-center gap-1 text-[#F84B1D]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F84B1D]" />
                      ))}
                    </div>

                    {/* Bold Testimonial Quote */}
                    <p className="font-heading font-medium text-sm sm:text-base lg:text-[17px] text-white leading-relaxed tracking-normal">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* 3. CARD FOOTER: ONLY NAME & DESIGNATION (NO PROFILE PIC, NO METRIC TAGS) */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-tight">
                      {item.role}, <span className="text-zinc-200 font-medium">{item.company}</span>
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Micro Helper Text */}
          <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 px-2">
            <span>Scroll or use arrows to view all 4 client case studies</span>
            <span className="hidden sm:inline">Infinite verified client stream</span>
          </div>

        </div>

        {/* ================= 3. HIGH-CONVERSION CTA ================= */}
        <div className="text-center pt-6 flex justify-center">
          <CtaButton onClick={onOpenBooking} size="lg" />
        </div>

      </div>
    </section>
  );
}



