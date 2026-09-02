import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: "How is this different from a freelance VA on Upwork or Fiverr?",
    a: "Freelance platforms give you access to a marketplace, we give you a fully vetted, trained, and managed EA. We handle sourcing, testing, and ongoing accountability. You just tell us what needs doing."
  },
  {
    q: "What if my EA isn't the right fit?",
    a: "You get a free rematch within 14 business days, no questions asked. We'd rather fix the match than leave you stuck with someone who isn't working out."
  },
  {
    q: "How do you handle confidentiality and data security?",
    a: "Every EA signs an NDA before day one and passes a background and ID verification check. We also use institutional-grade security across every tool your EA touches."
  },
  {
    q: "What tasks can my EA actually handle?",
    a: "Inbox and calendar management, vendor and invoice coordination, meeting prep, travel booking, personal scheduling, and more — most founders start with inbox and calendar, then hand off more as trust builds."
  },
  {
    q: "How much does it cost?",
    a: "One flat monthly subscription — no hourly billing, no surprise invoices, one straight subscription."
  },
  {
    q: "How fast can I get matched with an EA?",
    a: "Most founders are matched within 14 business days of their discovery call."
  }
];

function FaqItem({ faq, isOpen, onToggle, isDark }) {
  const [isHovered, setIsHovered] = useState(false);

  // Stroke progress:
  // 100 = 0% drawn (invisible at start point)
  // 50  = 50% drawn (smoothly traces halfway around perimeter on hover)
  // 0   = 100% drawn (fully traces the full rectangle on active/click)
  const strokeOffset = isOpen ? 0 : isHovered ? 50 : 100;
  const isStrokeVisible = isOpen || isHovered;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className={`relative rounded-2xl transition-all duration-300 ${
        isDark ? 'bg-[#121215]/90' : 'bg-white'
      } ${
        isOpen
          ? 'shadow-xl shadow-[#F84B1D]/15'
          : 'hover:shadow-md'
      }`}
    >
      {/* Base Subtle Border */}
      <div 
        className={`absolute inset-0 rounded-2xl border pointer-events-none transition-colors duration-300 ${
          isDark 
            ? 'border-zinc-800/80' 
            : 'border-zinc-200/90'
        }`} 
      />

      {/* Animated SVG Progress Stroke (Starts from 1 point, traces halfway on hover, fully fills on click) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
        style={{ borderRadius: '16px' }}
      >
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="15"
          ry="15"
          fill="none"
          stroke="#F84B1D"
          strokeWidth="1.5"
          pathLength="100"
          strokeLinecap="round"
          style={{
            strokeDasharray: 100,
            strokeDashoffset: strokeOffset,
            opacity: isStrokeVisible ? 1 : 0,
            transition: 'stroke-dashoffset 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease'
          }}
        />
      </svg>

      {/* Button */}
      <button
        type="button"
        onClick={onToggle}
        className="relative z-10 w-full py-4.5 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
      >
        <span
          className={`font-heading font-bold text-sm sm:text-base lg:text-lg transition-colors duration-200 ${
            isOpen
              ? 'text-[#F84B1D]'
              : isDark
                ? isHovered
                  ? 'text-white'
                  : 'text-zinc-200'
                : isHovered
                  ? 'text-zinc-950'
                  : 'text-zinc-900'
          }`}
        >
          {faq.q}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
            isOpen
              ? 'bg-[#F84B1D] text-white rotate-180 shadow-xs'
              : isDark
                ? isHovered
                  ? 'bg-[#F84B1D]/20 text-[#F84B1D]'
                  : 'bg-zinc-800 text-zinc-400'
                : isHovered
                  ? 'bg-[#F84B1D]/15 text-[#F84B1D]'
                  : 'bg-zinc-100 text-zinc-500'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Smooth Expanding Animation with Framer Motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden relative z-10"
          >
            <div
              className={`px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm lg:text-base font-normal leading-relaxed ${
                isDark
                  ? 'text-zinc-300 border-t border-zinc-800/60'
                  : 'text-zinc-600 border-t border-zinc-100'
              }`}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection({ onOpenBooking, theme = 'dark' }) {
  // Default closed (null) so no question is open by default
  const [openIndex, setOpenIndex] = useState(null);
  const isDark = theme === 'dark';

  return (
    <section 
      id="faq" 
      className={`py-20 sm:py-28 relative ${
        isDark 
          ? 'bg-[#09090C] border-t border-zinc-800/80 bg-grain-texture' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
            Frequently asked questions
          </span>
          <h2 className={`font-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            What Every Founder Wants To Know
          </h2>
          <p className={`text-sm sm:text-lg ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}>
            Everything you need to know about getting your time back with BackTech.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Bottom prompt */}
        <div className={`mt-10 sm:mt-12 text-center p-5 sm:p-6 rounded-2xl border text-xs sm:text-sm ${
          isDark 
            ? 'bg-[#121216]/90 border-zinc-800 text-zinc-400' 
            : 'bg-white border-zinc-200 text-zinc-600 shadow-xs'
        }`}>
          Have a specific operational workflow question?{' '}
          <button
            onClick={onOpenBooking}
            className="text-[#F84B1D] hover:underline font-semibold focus:outline-none"
          >
            Speak directly with our executive team &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}


