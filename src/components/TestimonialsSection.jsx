import React from 'react';
import { Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection({ onOpenBooking }) {
  const testimonials = [
    {
      quote: "I used to spend my Sunday nights prepping for the week, inbox, calendar, all of it. Now my EA has it handled before I even open my laptop Monday morning.",
      author: "Abid Hussain",
      role: "Founder & CFO",
      company: "Tallywise",
      stat: "15+ hrs/wk saved",
      initials: "AH",
      image: "/Case Study 02.jpg"
    },
    {
      quote: "My EA runs my calendar better than I ever did. I haven't double-booked a meeting in four months.",
      author: "Junaid Merchant",
      role: "Founder",
      company: "Nextar Solitaire",
      stat: "0 Double-bookings",
      initials: "JM",
      image: "/Case Study 03.jpg"
    },
    {
      quote: "I was skeptical about a remote EA handling anything sensitive. Six months in, she knows my business better than most of my team.",
      author: "Josh Hokit",
      role: "Partner",
      company: "Cellular Operations",
      stat: "6+ Months Active",
      initials: "JH",
      image: "/Case Study 03-01.jpg"
    },
    {
      quote: "I used to think I had to do everything myself to keep it done right. Now my EA handles it better than I ever did.",
      author: "Andrew Wilson",
      role: "CEO",
      company: "Jazz Wireless",
      stat: "100% Delegated",
      initials: "AW",
      image: "/Case Study 03-04.jpg"
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative bg-[#08080A] border-t border-zinc-800/80 bg-grain-texture">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header (v4 Copy) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
            What founders say
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            We Could Say We're Great,{' '}
            <span className="text-[#F84B1D]">But Our Clients Already Did.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg">
            Real feedback from the CEOs and founders who hired through BackTech.
          </p>
        </div>

        {/* 4 Testimonials Grid (2x2 Grid on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121216]/95 border border-zinc-800/90 hover:border-[#F84B1D]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group backdrop-blur-xl relative overflow-hidden"
            >
              {/* Subtle top image preview */}
              <div className="h-32 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden relative border-b border-zinc-800/80">
                <img
                  src={item.image}
                  alt={`${item.company} Case Study`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-[#121216]/60 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-400 bg-black/80 px-2.5 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md">
                    {item.stat}
                  </span>
                </div>
                <div className="absolute bottom-2 left-4 font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F84B1D]" />
                  {item.company}
                </div>
              </div>

              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#F84B1D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F84B1D]" />
                  ))}
                </div>

                {/* Quote text (Exact v4 copy) */}
                <p className="text-zinc-200 text-sm sm:text-base font-normal leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1C1C22] border border-zinc-700 flex items-center justify-center font-heading font-bold text-xs sm:text-sm text-[#F84B1D] flex-shrink-0">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                      {item.author}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {item.role}, <span className="text-zinc-300 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F84B1D]" />
                  <span>Verified Hire</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar below testimonials */}
        <div className="text-center mb-12">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F84B1D] hover:bg-[#E53D17] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#F84B1D]/30 transition-all transform hover:-translate-y-0.5"
          >
            <span>Get Matched with your EA Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Social Proof Stats Banner */}
        <div className="bg-[#121216]/95 border border-zinc-800/80 rounded-2xl p-5 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center shadow-xl backdrop-blur-xl">
          <div>
            <p className="font-heading font-extrabold text-2xl sm:text-4xl text-[#F84B1D]">Top 1%</p>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase tracking-wider">Vetted Talent Selection</p>
          </div>
          <div>
            <p className="font-heading font-extrabold text-2xl sm:text-4xl text-white">14 Days</p>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase tracking-wider">Business Day Match</p>
          </div>
          <div>
            <p className="font-heading font-extrabold text-2xl sm:text-4xl text-white">500+ hrs</p>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase tracking-wider">Reclaimed Per Year</p>
          </div>
          <div>
            <p className="font-heading font-extrabold text-2xl sm:text-4xl text-emerald-400">98.4%</p>
            <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase tracking-wider">Client Retention Rate</p>
          </div>
        </div>

      </div>
    </section>
  );
}

