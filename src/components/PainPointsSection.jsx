import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import stressedHeroImg from '/pain-points.jpg';

export default function PainPointsSection({ onOpenBooking }) {
  // First item open or all closed; start with 0 so the user immediately sees the soothing design
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: 'inbox',
      title: 'Your Inbox',
      subtitle: "You're Still Your Own Admin",
      points: [
        'Waking up to 70+ unread emails every single morning',
        'Back-and-forth email tag just to schedule a 30-minute sync',
        'Critical vendor invoices or client messages buried under newsletters',
        'Spending your peak productive morning hours acting as a secretary',
        'Flagging emails to handle "later" that never actually get handled',
        'Searching 15 minutes for an attachment sent 3 months ago',
        'Unsubscribing from cold pitch lists you never signed up for',
        'Filtering spam calendar invites and meeting updates manually'
      ]
    },
    {
      id: 'business',
      title: 'Your Business',
      subtitle: 'You Became the Bottleneck',
      points: [
        'Team members waiting on your approval for routine operational decisions',
        'Sales leads slipping through the cracks because follow-ups got delayed',
        'Drafting contracts, NDAs, and recurring reports yourself',
        'Context-switching 20 times a day between strategic growth and administrative chores',
        'Strategic initiatives pushed to "next quarter" for three quarters in a row',
        'Managing travel logistics, bookings, and flight changes mid-day',
        'Preparing slide decks and briefing docs at midnight before board meetings'
      ]
    },
    {
      id: 'life',
      title: 'Your Life',
      subtitle: 'It Follows You Home',
      points: [
        "Missing your kid's games, again",
        'Hobbies on hold, indefinitely',
        'No room left for personal time',
        'Working through family vacations and weekends',
        'Answering urgent messages during dinner',
        'Constant mental fatigue that never turns off',
        'Canceling evening plans due to work fires',
        'Sacrificing sleep to catch up on admin work',
        'Waking up at 3 AM checking Slack',
        'Forgetting personal errands and family birthdays'
      ]
    }
  ];

  return (
    <section id="pain-points" className="py-20 sm:py-28 bg-bg-alt border-y border-border-color text-white relative overflow-hidden">
      
      {/* Subtle Grid / Texture Background */}
      <div className="absolute inset-0 bg-grain-texture opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14 sm:mb-20">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.2]">
            You're Losing Your Inbox, Your Business,<br className="hidden sm:inline" />
            and <span className="text-[#F84B1D]">Yourself</span> – All at Once.
          </h2>

          <div className="w-20 h-0.5 bg-[#F84B1D]/60 mx-auto" />

          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-2xl mx-auto font-normal">
            Tasks you refuse to hand off still run through your mind, costing you more than time.
          </p>
        </div>

        {/* 2-Column Split: Image on Left, Expandable Checklist on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: User's New Photo + Orange Accent */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-zinc-800/90 bg-[#141416] shadow-2xl relative group">
              <img
                src={stressedHeroImg}
                alt="Overwhelmed founder dealing with endless admin tasks"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
              />
              
              {/* Bottom Orange Accent Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#F84B1D] via-[#FF7A50] to-[#F84B1D]" />

              {/* Caption Box */}
              <div className="p-5 sm:p-6 bg-[#121215] text-center border-t border-zinc-800/80">
                <p className="text-sm sm:text-base font-medium text-zinc-200 leading-relaxed italic">
                  &ldquo;You didn't build a company to spend your days on other people's to-do lists.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Divider-style Expandable List with Soothing Animation */}
          <div className="lg:col-span-6 space-y-2">
            <div>
              {categories.map((cat, idx) => {
                const isOpen = activeTab === idx;
                return (
                  <div
                    key={cat.id}
                    className="border-b border-zinc-800/80 py-5 transition-colors"
                  >
                    {/* Header Row */}
                    <button
                      type="button"
                      onClick={() => setActiveTab(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                    >
                      <div className="space-y-1">
                        <h3 className={`font-heading font-bold text-xl sm:text-2xl transition-colors duration-200 ${
                          isOpen ? 'text-[#F84B1D]' : 'text-white group-hover:text-zinc-200'
                        }`}>
                          {cat.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                          {cat.subtitle}
                        </p>
                      </div>

                      <div className={`transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#F84B1D]' : 'text-zinc-400 group-hover:text-zinc-300'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {/* Soothing Expandable Checklist with Framer Motion */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 space-y-3">
                            {cat.points.map((pt, i) => (
                              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-normal">
                                <div className="w-5 h-5 rounded-full border-2 border-[#F84B1D] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#F84B1D]">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className="leading-snug pt-0.5">{pt}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* CTA Button matching Image 3 */}
            <div className="pt-5">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-[#161618] hover:bg-[#202024] text-[#F84B1D] border border-zinc-800 hover:border-[#F84B1D]/40 font-heading font-bold text-sm tracking-wide transition-all shadow-md focus:outline-none cursor-pointer"
              >
                Get Matched with your EA
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

