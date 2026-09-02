import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  Cpu 
} from 'lucide-react';

import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import BookingModal from '../components/BookingModal';

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const vettingSteps = [
    {
      step: '01',
      title: 'Internal Sourcing',
      desc: 'We actively filter through thousands of global profiles to check English fluency, logical reasoning, and past experience.',
      badge: 'Hundreds Evaluated'
    },
    {
      step: '02',
      title: 'Systems Testing',
      desc: 'Candidates execute timed, real-world tasks to verify their capability with modern communication and work systems.',
      badge: 'Top 15% Pass'
    },
    {
      step: '03',
      title: 'Live Interviews',
      desc: 'Our internal HR team conducts rigorous live interviews probing for culture fit, communication nuances, and proactive problem solving.',
      badge: 'Top 5% Pass'
    },
    {
      step: '04',
      title: 'Staffed & Assigned',
      desc: 'We hire them onto our internal payroll, manage their HR, and assign them directly to you for final task training.',
      badge: 'Dedicated to You',
      highlight: true
    }
  ];

  const teamMembers = [
    {
      name: 'Muhammad',
      role: 'Co-Founder',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Adnan',
      role: 'Co-Founder',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Farhan',
      role: 'Co-Founder',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop'
    },
    {
      name: 'Omer',
      role: 'Head of HR',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop'
    }
  ];

  const principles = [
    {
      icon: Zap,
      title: 'Systematic Execution',
      desc: "We don't rely on guesswork. We build strong internal systems that anticipate needs and execute flawlessly."
    },
    {
      icon: ShieldCheck,
      title: 'Centralized Accountability',
      desc: 'We handle all the headaches—from payroll to HR. If a problem arises, BackTech owns it. No excuses.'
    },
    {
      icon: MessageSquare,
      title: 'Seamless Communication',
      desc: 'Clear, proactive communication is our lifeblood. We keep every update, deadline, and expectation crystal clear across every time zone.'
    },
    {
      icon: Cpu,
      title: 'Managed Reliability',
      desc: 'We are dedicated to providing consistent quality through internal training, network stability, and active management.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080A] text-white selection:bg-[#F84B1D]/20 selection:text-[#F84B1D] overflow-x-hidden">
      
      {/* Universal Sticky Navbar */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} activePage="about" />

      {/* ================= HERO: MANIFESTO ================= */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
        {/* Background Ambience Texture */}
        <div className="absolute inset-0 bg-grain-texture opacity-40 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F84B1D]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FF7A50]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          {/* Eyebrow Badge */}
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
            Our manifesto
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.12]">
            The Future of Work is<br />
            <span className="text-[#F84B1D]">Managed.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We didn&apos;t just build a staffing agency — we are a remote managed staffing BPO helping founders buy back their time and scale with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#story"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F84B1D] hover:bg-[#E03E12] text-white text-sm font-bold tracking-wide shadow-lg shadow-[#F84B1D]/25 transition-all text-center"
            >
              Read Our Story
            </a>
            <Link
              to="/match"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141418] hover:bg-[#1A1A22] border border-zinc-700/80 hover:border-zinc-500 text-zinc-200 hover:text-white text-sm font-semibold tracking-wide transition-all text-center"
            >
              Source The Talent
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: THE ORIGIN STORY ================= */}
      <section id="story" className="py-20 sm:py-28 bg-[#0D0D10] border-y border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image with Floating Stat Badge */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-zinc-800/90 bg-[#121215] shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="BackTech leadership planning session"
                  className="w-full h-auto object-cover aspect-[4/5] filter grayscale contrast-105 group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Floating Metric Badge */}
                <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-[#161619]/95 backdrop-blur-md border border-zinc-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F84B1D]/15 border border-[#F84B1D]/30 flex items-center justify-center text-xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-2xl text-white">50+</div>
                    <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Founders Rescued</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Origin Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
                The origin story
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
                We built BackTech because the standard remote work model was broken.
              </h2>

              {/* Founder Quote Callout */}
              <div className="relative pl-6 border-l-4 border-[#F84B1D] bg-[#141418]/60 p-5 rounded-r-2xl border-y border-r border-zinc-800/80">
                <p className="text-base sm:text-lg text-zinc-200 font-medium italic leading-relaxed">
                  &ldquo;With an engineering background, our leadership started by managing operations for a single company that had remote employees scattered everywhere. There were communication gaps, no centralized systems, and tracking daily work was a nightmare.&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                <p>
                  Founders don&apos;t just need &ldquo;a body in a seat&rdquo; overseas. They need robust internal systems, managed HR, and elite operators who take extreme ownership. So, we pushed to consolidate all remote operations into one centralized infrastructure with strict HR and operational checks.
                </p>
                <p>
                  Once we scaled that initial operation to 30+ people, we realized we hadn&apos;t just solved our own problem—we had engineered a recruitment and management engine capable of rescuing any overwhelmed founder.
                </p>
                <p>
                  What started out of necessity has become the trusted backbone for hundreds of businesses globally. BackTech isn&apos;t a freelance platform; we hire staff and manage elite professionals internally, so you just get the results.
                </p>
              </div>

              {/* Leadership Signoff Box */}
              <div className="pt-2">
                <div className="p-5 rounded-2xl bg-[#141418] border border-zinc-800 inline-block">
                  <div className="font-heading font-bold text-lg text-white">The Founding Team</div>
                  <div className="text-xs font-semibold text-[#F84B1D] tracking-wider uppercase">Leadership, BackTech</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 3: PHILOSOPHY & PRINCIPLES ================= */}
      <section className="py-20 sm:py-28 bg-[#08080A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
              Philosophy
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What Drives Us Forward
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              These four principles dictate every internal hire we make and every client we partner with — they are the operating system behind every professional we place.
            </p>
          </div>

          {/* Mission & Vision Bento Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 1: Mission (8 cols) */}
            <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-[#121215] border border-zinc-800 relative overflow-hidden flex flex-col justify-end min-h-[300px] sm:min-h-[360px] group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="BackTech team collaboration"
                className="absolute right-0 bottom-0 w-full sm:w-2/3 h-full object-cover opacity-10 filter grayscale mix-blend-luminosity group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-[#121215]/80 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-4 max-w-xl">
                <div className="flex items-center gap-2 text-[#F84B1D] font-bold text-xs uppercase tracking-widest">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                  To raise the reputation of remote work globally by providing businesses with a reliable, fully managed staffing infrastructure.
                </h3>
              </div>
            </div>

            {/* Card 2: Vision (4 cols) */}
            <div className="lg:col-span-4 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F84B1D] to-[#CF380F] text-white relative overflow-hidden flex flex-col justify-end min-h-[300px] sm:min-h-[360px] shadow-xl group">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2 text-white/90 font-bold text-xs uppercase tracking-widest">
                  <Zap className="w-4 h-4" />
                  Our Vision
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                  To be the global standard for dedicated remote business operations.
                </h3>
              </div>
            </div>

          </div>

          {/* 4 Operating Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#121215] border border-zinc-800/90 hover:border-zinc-700 transition-all space-y-5 shadow-sm group"
                >
                  <div className="w-13 h-13 rounded-2xl bg-[#18181D] border border-zinc-700/60 flex items-center justify-center text-[#F84B1D] group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: INTERNAL VETTING GAUNTLET ================= */}
      <section id="vetting" className="py-20 sm:py-28 bg-[#0D0D10] border-y border-zinc-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
              Internal vetting
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              How We Staff Our Operations
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Our internal hiring process isn&apos;t just about finding people; it&apos;s about testing, training, and managing them. When you subscribe to BackTech, you bypass this entire gauntlet.
            </p>
          </div>

          {/* 4 Connected Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {vettingSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#121215] border border-zinc-800/90 flex flex-col justify-between space-y-6 relative group hover:border-zinc-700 transition-all shadow-md"
              >
                <div className="space-y-4">
                  {/* Step Number Badge */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-extrabold text-sm border ${
                    step.highlight 
                      ? 'bg-[#F84B1D] text-white border-[#F84B1D] shadow-lg shadow-[#F84B1D]/25' 
                      : 'bg-[#18181D] text-zinc-300 border-zinc-700'
                  }`}>
                    {step.step}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <span className={`inline-block px-3.5 py-1.5 rounded-full text-[11px] font-semibold border ${
                    step.highlight
                      ? 'bg-[#F84B1D]/15 text-[#F84B1D] border-[#F84B1D]/30'
                      : 'bg-[#18181D] text-zinc-300 border-zinc-700/60'
                  }`}>
                    {step.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: THE LEADERSHIP TEAM ================= */}
      <section className="py-20 sm:py-28 bg-[#08080A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
          
          <div className="text-center max-w-xl mx-auto space-y-4">
            <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
              The leadership team
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Engineered by Operators, for Business Owners.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#121215] border border-zinc-800/90 overflow-hidden group hover:border-zinc-700 transition-all shadow-md"
              >
                <div className="w-full aspect-square overflow-hidden bg-[#161619]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-105 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6 text-center space-y-1">
                  <h4 className="font-heading font-bold text-lg text-white">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#F84B1D] tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Borderless Network Callout Banner */}
          <div className="rounded-3xl bg-[#121215] border border-zinc-800/90 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl space-y-10">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <div className="inline-block px-6 py-2 rounded-full bg-[#1A1A20] text-zinc-300 text-xs font-semibold border border-zinc-700">
                Global impact
              </div>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                A Truly Borderless Network
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                We source from emerging tech hubs globally and handle all the internal structuring, ensuring you get world-class talent with overlapping time zones without the headache of compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4 relative z-10 border-t border-zinc-800">
              <div className="space-y-1">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#F84B1D]">70+</div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Active Remote Professionals</div>
              </div>
              <div className="space-y-1">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#F84B1D]">100%</div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Fully Managed HR</div>
              </div>
              <div className="space-y-1">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#F84B1D]">24/7</div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Coverage Capability</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: CLOSER CTA ================= */}
      <section className="py-20 sm:py-28 bg-[#0D0D10] border-t border-zinc-800/80 relative text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Build The Team That<br />
            <span className="text-[#F84B1D]">Buys Back Your Time.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto font-normal leading-relaxed">
            Book a discovery call today. We&apos;ll map out your exact operational bottlenecks and match you with the perfect dedicated professional.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F84B1D] hover:bg-[#E03E12] text-white text-sm font-bold tracking-wide shadow-lg shadow-[#F84B1D]/25 transition-all cursor-pointer"
            >
              Book Your Discovery Call
            </button>
            <Link
              to="/match"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141418] hover:bg-[#1A1A22] border border-zinc-700/80 hover:border-zinc-500 text-zinc-200 hover:text-white text-sm font-semibold tracking-wide transition-all cursor-pointer"
            >
              Get Matched With Your EA
            </Link>
          </div>

        </div>
      </section>

      {/* Universal Footer */}
      <FooterSection onOpenBooking={() => setBookingOpen(true)} />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

    </div>
  );
}
