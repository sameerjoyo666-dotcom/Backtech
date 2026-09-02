import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'What actually is a BackTech EA, and how is it different from a freelancer?',
    a: 'A BackTech EA is a full-time, dedicated executive operator employed and managed by us. Unlike unvetted freelancers on Upwork or Fiverr, our EAs are tested on logic, communication, and executive operations. They come pre-trained on M365 and Google Workspace, backed by BackTech managers, and covered by ironclad NDAs.',
  },
  {
    q: 'How fast can I get matched and onboarded with my dedicated EA?',
    a: 'Our placement sprint takes 14 business days or less. We take your exact operational bottlenecks, match you with the top 1% candidate specifically suited for your workflow, and manage the full onboarding and handover protocol.',
  },
  {
    q: 'What if my EA isn\'t the right cultural or operational fit?',
    a: 'We offer a 100% Free Rematch Guarantee. If within the first 14 business days you feel the match isn\'t ideal, we will rematch and onboard a new executive assistant at zero additional charge, zero friction.',
  },
  {
    q: 'How do you ensure data security, privacy, and confidentiality?',
    a: 'Security is paramount. Every BackTech EA signs a legally binding non-disclosure agreement before seeing a single credential. We implement enterprise credential management (LastPass/1Password), enforce hardware security protocols, and back all operations with remote wipe capability.',
  },
  {
    q: 'What tasks can I immediately offload to my BackTech EA?',
    a: 'Inbox triage, high-stakes calendar management, travel itineraries, client follow-ups, CRM updates, invoice drafting, meeting agendas and summaries, research, and standard operating procedures (SOPs). If it’s an operational task you do repeatedly, your EA can own it.',
  },
  {
    q: 'What are the pricing terms and contract commitments?',
    a: 'BackTech operates on a simple, predictable monthly subscription ($1,800/month flat). No hourly tracking, no unexpected overtime bills, no payroll taxes, and no long-term restrictive lock-ins.',
  },
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
        isDark ? 'bg-[#0E121E] shadow-lg' : 'bg-white shadow-sm'
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
            ? 'border-white/10' 
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
        className="relative z-10 w-full py-5 px-5 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
      >
        <span
          className={`font-heading font-bold text-sm sm:text-base lg:text-lg transition-colors duration-200 ${
            isOpen
              ? 'text-[#F84B1D]'
              : isDark
                ? isHovered
                  ? 'text-white'
                  : 'text-zinc-100'
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
                  : 'bg-zinc-800 text-zinc-300'
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
              className={`px-5 sm:px-7 pb-6 pt-1 text-xs sm:text-sm lg:text-base font-normal leading-relaxed ${
                isDark
                  ? 'text-zinc-300 border-t border-white/10'
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

export default function FaqSection({ onOpenBooking, theme }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isLight, setIsLight] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('light');
    }
    return false;
  });

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const isDark = theme ? theme === 'dark' : !isLight;

  return (
    <section 
      id="faq" 
      className="py-20 sm:py-28 relative bg-bg-surface border-y border-border-color"
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
            ? 'bg-[#0E121E] border-white/10 text-zinc-300' 
            : 'bg-white border-zinc-200 text-zinc-600'
        }`}>
          <span>Have a specific operational scenario or custom workflow? </span>
          <button
            onClick={onOpenBooking}
            className="text-[#F84B1D] font-bold hover:underline inline-flex items-center gap-1 ml-1 cursor-pointer"
          >
            <span>Ask us on a 20-min intro call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
