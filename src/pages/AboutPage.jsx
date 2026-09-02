import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  Cpu, 
  Search, 
  CheckCircle2, 
  UserCheck, 
  ArrowRight,
  Compass,
  Award
} from 'lucide-react';

import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import BookingModal from '../components/BookingModal';
import CtaButton from '../components/CtaButton';

export default function AboutPage() {
  const navigate = useNavigate();
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBooking = () => {
    navigate('/match');
  };

  const philosophyPillars = [
    {
      icon: Zap,
      title: 'Systematic Execution',
      desc: "We don't rely on guesswork. We build strong internal systems that anticipate needs and execute flawlessly."
    },
    {
      icon: ShieldCheck,
      title: 'Centralized Accountability',
      desc: 'We handle all the headaches—from payroll to HR. If a problem arises, BackTech owns it.'
    },
    {
      icon: MessageSquare,
      title: 'Seamless Communication',
      desc: 'Clear, proactive communication is our lifeblood. Your EA is trained on how founders think.'
    },
    {
      icon: Cpu,
      title: 'Managed Reliability',
      desc: 'We are dedicated to providing consistent quality through internal training, network stability, and active management.'
    }
  ];

  const vettingSteps = [
    {
      step: '01',
      icon: Search,
      title: 'Precision Sourcing',
      desc: 'We scan thousands of applicants to identify top-tier administrative and operational talent.'
    },
    {
      step: '02',
      icon: CheckCircle2,
      title: 'Comprehensive Evaluation',
      desc: 'Only the top 1% pass intensive assessments and deep interviews ensuring founder-level alignment.'
    },
    {
      step: '03',
      icon: UserCheck,
      title: 'Your Dedicated EA',
      desc: 'Ready to integrate seamlessly into your workflow and start buying back your time on day one.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-page text-text-main font-sans selection:bg-[#F84B1D] selection:text-white overflow-x-hidden antialiased flex flex-col justify-between">
      
      {/* Universal Sticky Navbar */}
      <Navbar onOpenBooking={handleBooking} activePage="about" />

      {/* ================= 1. HERO SECTION / MANIFESTO ================= */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden bg-bg-page bg-backtech-mesh">
        {/* Atmospheric ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F84B1D]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 sm:space-y-8">
          
          {/* Eyebrow Badge */}
          <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
            About BackTech
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-heading leading-[1.12]">
            The Future of Executive Support is{' '}
            <span className="text-[#F84B1D]">Managed.</span>
          </h1>

          {/* Subheadline / Tagline */}
          <p className="text-base sm:text-xl text-text-muted max-w-3xl mx-auto font-normal leading-relaxed">
            We provide Founders and CEOs with fully managed, Top 1% Executive Assistants to buy back their time, scale operations, and focus on growth.
          </p>

          {/* Hero Action Button */}
          <div className="pt-4 flex justify-center">
            <CtaButton onClick={handleBooking} size="md" />
          </div>

        </div>
      </section>

      {/* ================= 2. OUR ORIGIN STORY ================= */}
      <section id="origin-story" className="py-20 sm:py-28 relative bg-bg-alt border-y border-border-color">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
            <span className="inline-block px-5 py-2 rounded-full bg-[#F84B1D]/15 text-[#F84B1D] text-xs font-bold tracking-wide uppercase">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-heading">
              Our Origin Story
            </h2>
          </div>

          <div className="bg-bg-surface border border-border-color rounded-3xl p-6 sm:p-12 shadow-xl space-y-6 sm:space-y-8 text-left">
            <p className="text-base sm:text-lg font-semibold text-text-heading leading-relaxed">
              We built BackTech because the standard remote work model for executive support was broken.
            </p>

            <p className="text-sm sm:text-base text-text-main leading-relaxed">
              Founders don&apos;t just need a &ldquo;virtual assistant&rdquo; to do basic data entry or manage an overflowing inbox. They need elite operators who take extreme ownership, combined with robust internal systems and managed HR. We realized the market was flooded with gig workers and unreliable platforms that created more work for founders, rather than taking it off their plates.
            </p>

            <div className="p-6 rounded-2xl bg-[#F84B1D]/10 border border-[#F84B1D]/25">
              <p className="text-sm sm:text-base text-text-main font-medium leading-relaxed">
                So, we engineered a recruitment and management engine capable of rescuing any overwhelmed founder. What started out of necessity has become the trusted backbone for hundreds of businesses globally.
              </p>
            </div>

            <p className="text-sm sm:text-base text-text-main leading-relaxed">
              BackTech isn&apos;t a freelance platform; we source, vet, train, and manage top 1% Executive Assistants internally, so you just get the results.
            </p>
          </div>

        </div>
      </section>

      {/* ================= 3. OUR PHILOSOPHY ================= */}
      <section id="philosophy" className="py-20 sm:py-28 relative bg-bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-14 sm:mb-18">
            <span className="inline-block px-5 py-2 rounded-full bg-[#F84B1D]/15 text-[#F84B1D] text-xs font-bold tracking-wide uppercase">
              Core Principles
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-heading">
              Our Philosophy
            </h2>
          </div>

          {/* Mission & Vision Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
            
            {/* Mission */}
            <div className="bg-bg-alt border border-border-color rounded-3xl p-7 sm:p-9 shadow-lg space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#F84B1D]/15 flex items-center justify-center text-[#F84B1D]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-heading">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-text-main leading-relaxed">
                To raise the standard of executive support globally by providing founders with a reliable, fully managed infrastructure of elite talent.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-bg-alt border border-border-color rounded-3xl p-7 sm:p-9 shadow-lg space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#F84B1D]/15 flex items-center justify-center text-[#F84B1D]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-heading">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-text-main leading-relaxed">
                To be the global standard for dedicated, executive-level remote operations.
              </p>
            </div>

          </div>

          {/* 4 Execution Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-bg-alt border border-border-color rounded-2xl p-6 space-y-4 shadow-sm hover:border-[#F84B1D]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F84B1D]/15 flex items-center justify-center text-[#F84B1D]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-text-heading">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. OUR VETTING PROCESS ================= */}
      <section id="vetting" className="py-20 sm:py-28 relative bg-bg-alt border-y border-border-color">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-14 sm:mb-18">
            <span className="inline-block px-5 py-2 rounded-full bg-[#F84B1D]/15 text-[#F84B1D] text-xs font-bold tracking-wide uppercase">
              Top 1% Talent
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-heading">
              Our Vetting Process
            </h2>
            <p className="text-sm sm:text-lg text-text-muted">
              We source, vet, and train your EA — so you never have to. Only the top 1% make it through.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vettingSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-bg-surface border border-border-color rounded-3xl p-7 sm:p-9 shadow-lg space-y-5 relative group hover:border-[#F84B1D]/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F84B1D]/15 flex items-center justify-center text-[#F84B1D]">
                      <StepIcon className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-black text-3xl text-zinc-400/40">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-text-heading">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 5. CLOSING CALL TO ACTION ================= */}
      <section className="py-24 relative bg-bg-page overflow-hidden">
        
        {/* Ambient Backtech Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F84B1D]/12 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="bg-bg-surface border border-[#F84B1D]/40 rounded-3xl p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
            
            <div className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs mb-6">
              Get Started
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-text-heading tracking-tight leading-tight max-w-3xl mx-auto">
              Ready to Get your <span className="text-[#F84B1D]">time back?</span>
            </h2>

            <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
              Book a discovery call today. We&apos;ll map out your exact operational bottlenecks and match you with the perfect dedicated EA in 14 business days.
            </p>

            <div className="pt-8 flex justify-center">
              <CtaButton onClick={handleBooking} size="lg" />
            </div>

          </div>
        </div>
      </section>

      {/* Universal Footer */}
      <FooterSection />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

    </div>
  );
}

