import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Calendar as CalendarIcon,
  CheckCircle2,
  Quote
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Logo from '../components/Logo';

export default function MatchFlowPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRoleParam = searchParams.get('role');

  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    role: initialRoleParam || '',
    firstEaExperience: '',
    weekStructure: '',
    handoffTasks: [],
    notGettingDone: '',
    worthItReason: '',
    hesitation: '',
    timeline: '',
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: ''
  });

  const totalQuestions = 9;

  // Strict Question Definitions:
  // - Engagement lines ONLY where provided by user (no self-generated text)
  // - Testimonials placed in the engagement space when engagement line is missing
  const questions = [
    // Step 0: Question 1 (Has engagement line)
    {
      id: 'role',
      type: 'single',
      question: 'What best describes your role',
      subhead: 'Tell us how you lead, and we’ll find the EA to handle the rest.',
      options: [
        'Entrepreneur/founder',
        'Business owner',
        'CEO/C-Suite',
        'Other'
      ],
      engagement: "Four quick questions, then we'll show you what to hand off first.",
      testimonial: null
    },
    // Step 1: Question 2 (Has engagement line)
    {
      id: 'firstEaExperience',
      type: 'single',
      question: 'Would this be your first EA, or have you hired one before?',
      subhead: null,
      options: [
        'Never hired one',
        "I have one now, but it's not working",
        'Hired one before, no longer active',
        'Currently have one, happy with them'
      ],
      engagement: 'However you answered, the next few questions shape exactly who you get matched with.',
      testimonial: null
    },
    // Step 2: Question 3 (No engagement line -> Testimonial 1 placed in engagement space)
    {
      id: 'weekStructure',
      type: 'single',
      question: 'From an external perspective, how is your typical week structured?',
      subhead: null,
      options: [
        'Constant firefighting, nothing feels caught up',
        "Full plate, but I'm handling it",
        'Things slipping through the cracks',
        'Actually pretty manageable'
      ],
      engagement: null,
      testimonial: {
        quote: "I was hesitant to hire help, unsure of what to offload. Within two weeks, my BackTech EA took over scheduling, travel coordination, and weekly prep seamlessly.",
        author: "Josh Hokit",
        role: "Partner",
        company: "Nextstar Solutions",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
      }
    },
    // Step 3: Question 4 (No engagement line -> Testimonial 2 placed in engagement space)
    {
      id: 'handoffTasks',
      type: 'multi',
      question: 'If you could hand off one thing today, what would it be?',
      subhead: 'Select as many as apply.',
      options: [
        'Being the one who has to remember everything',
        "Owning follow-ups until they're actually closed out",
        'Prepping and coordinating before big meetings or decisions',
        'Managing vendors, contracts, and outside relationships',
        "Keeping projects moving when you're not in the room",
        'Honestly, most of it'
      ],
      engagement: null,
      testimonial: {
        quote: "I used to spend my Sunday nights prepping for the week. Now my EA has it handled before I open my laptop Monday.",
        author: "Abid Hussain",
        role: "Founder",
        company: "TallyWise",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      }
    },
    // Step 4: Question 5 (Has engagement line)
    {
      id: 'notGettingDone',
      type: 'single',
      question: "What's actually not getting done because of all this?",
      subhead: null,
      options: [
        'The strategic stuff keeps getting pushed to "next week"',
        'Deals or growth work move slower than they should',
        "I know I'm capable of more than this"
      ],
      engagement: 'None of this shows up on a calendar. It just quietly adds up.',
      testimonial: null
    },
    // Step 5: Question 6 (No engagement line & no testimonial)
    {
      id: 'worthItReason',
      type: 'single',
      question: 'What would make this worth it',
      subhead: null,
      options: [
        'Someone reliable',
        'Can handle real complexity',
        'Thinks ahead instead of waiting to be told',
        'Backed by a real company'
      ],
      engagement: null,
      testimonial: null
    },
    // Step 6: Question 7 (No engagement line & no testimonial)
    {
      id: 'hesitation',
      type: 'single',
      question: "what's making you hesitate?.",
      subhead: null,
      options: [
        'Trusting someone with sensitive information',
        'Not sure this fits the budget',
        "Don't know what I'd even hand off",
        'Burned by a VA or freelancer before'
      ],
      engagement: null,
      testimonial: null
    },
    // Step 7: Question 8 (Has engagement line)
    {
      id: 'timeline',
      type: 'single',
      question: 'When do you want this off your plate?',
      subhead: null,
      options: [
        'Yesterday, honestly',
        'Within the month',
        'Next quarter or so',
        "Just seeing what's out there"
      ],
      engagement: "We'll move at your pace. Clients are matched within days",
      testimonial: null
    },
    // Step 8: Question 9 (Has engagement line)
    {
      id: 'contact',
      type: 'form',
      question: 'Almost there.',
      subhead: null,
      engagement: "Next step, pick a time and we'll walk you through your first match.",
      testimonial: null
    }
  ];

  const currentQ = questions[currentStep];

  // Auto-advance mechanism for single-select
  const handleSingleSelect = (option) => {
    const qId = currentQ.id;
    setFormData((prev) => ({ ...prev, [qId]: option }));

    setTimeout(() => {
      if (currentStep < totalQuestions - 1) {
        setDirection(1);
        setCurrentStep((prev) => prev + 1);
      }
    }, 220);
  };

  const handleMultiToggle = (option) => {
    setFormData((prev) => {
      const currentList = prev.handoffTasks || [];
      if (option === 'Honestly, most of it') {
        if (currentList.includes(option)) {
          return { ...prev, handoffTasks: [] };
        }
        return { ...prev, handoffTasks: [option] };
      }

      const filtered = currentList.filter(item => item !== 'Honestly, most of it');
      const exists = filtered.includes(option);
      const updated = exists ? filtered.filter(item => item !== option) : [...filtered, option];
      return { ...prev, handoffTasks: updated };
    });
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (currentStep < totalQuestions - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#F84B1D', '#111827', '#FF8A65', '#FFFFFF']
        });
      } catch (err) {}
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate('/');
    }
  };

  // Keyboard navigation for power users (keys 1-9)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentQ && currentQ.type === 'single') {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= currentQ.options.length) {
          handleSingleSelect(currentQ.options[num - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, currentQ]);

  // Circular gauge calculations (Desktop)
  const radius = 54;
  const circumference = 2 * Math.PI * radius; // approx 339.29
  const progressPercentage = Math.round(((currentStep + 1) / totalQuestions) * 100);
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  // Small circular gauge calculations (Mobile Header Bar)
  const mobileRadius = 13;
  const mobileCircumference = 2 * Math.PI * mobileRadius; // approx 81.68
  const mobileStrokeDashoffset = mobileCircumference - (progressPercentage / 100) * mobileCircumference;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 25 : -25,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      x: direction > 0 ? -25 : 25,
      opacity: 0,
      transition: { duration: 0.15, ease: 'easeIn' }
    })
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-900 font-sans flex flex-col justify-between selection:bg-[#F84B1D] selection:text-white antialiased">
      
      {/* Top Header with BackTech Logo & Mobile-Optimized Process Indicator */}
      <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-zinc-200/80 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Square Back Arrow Button */}
            <button
              onClick={handleBack}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF4F0] hover:bg-[#FFE7DF] text-[#F84B1D] border border-[#F84B1D]/20 flex items-center justify-center transition-colors focus:outline-none shadow-xs"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Brand Logo with light theme */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 focus:outline-none"
            >
              <Logo theme="light" />
            </button>
          </div>

          {/* Right Area: Mobile Compact Progress Indicator + Exit */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Mobile-Only Compact Process Ring inside Header Bar */}
            {!isCompleted && (
              <div className="flex lg:hidden items-center gap-2 bg-white px-2.5 py-1.5 rounded-full border border-zinc-200/80 shadow-xs">
                <div className="flex flex-col items-end leading-none">
                  <span className="text-[10px] font-bold text-zinc-900">
                    {currentStep + 1}/{totalQuestions}
                  </span>
                  <span className="text-[8px] font-semibold text-zinc-400">
                    {progressPercentage}%
                  </span>
                </div>
                {/* Micro SVG Ring */}
                <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 32 32">
                    <circle
                      cx="16"
                      cy="16"
                      r={mobileRadius}
                      className="text-zinc-100"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r={mobileRadius}
                      strokeWidth="2.5"
                      strokeDasharray={mobileCircumference}
                      strokeDashoffset={mobileStrokeDashoffset}
                      strokeLinecap="round"
                      stroke="#F84B1D"
                      fill="transparent"
                      className="transition-all duration-300 ease-out"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Exit Button */}
            <button
              onClick={() => navigate('/')}
              className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-zinc-200/60"
            >
              Exit
            </button>
          </div>

        </div>
      </header>

      {/* Main Split Layout Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 my-auto">
        <div className="w-full max-w-5xl mx-auto py-2 sm:py-6">
          
          {!isCompleted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              
              {/* Left Column: Question, Options & Form */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-7">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-5 sm:space-y-6"
                  >
                    
                    {/* Question Headline */}
                    <div className="space-y-2">
                      <div className="inline-block px-4 py-1.5 rounded-full bg-[#F84B1D] text-white text-[11px] font-semibold shadow-xs mb-1">
                        Step {currentStep + 1} of {totalQuestions}
                      </div>
                      <h1 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-zinc-900 leading-[1.25] tracking-tight">
                        {currentQ.question}
                      </h1>
                      {currentQ.subhead && (
                        <p className="text-zinc-500 text-sm sm:text-base font-normal leading-relaxed">
                          {currentQ.subhead}
                        </p>
                      )}
                    </div>

                    {/* Single-Select List: Tap/Click automatically advances (NO Next Button) */}
                    {currentQ.type === 'single' && (
                      <div className="space-y-3 pt-1">
                        {currentQ.options.map((option, index) => {
                          const isSelected = formData[currentQ.id] === option;
                          return (
                            <div
                              key={option}
                              onClick={() => handleSingleSelect(option)}
                              className={`p-4 sm:p-4.5 rounded-2xl border transition-all duration-150 flex items-center justify-between cursor-pointer select-none group ${
                                isSelected
                                  ? 'bg-[#FFF5F2] border-[#F84B1D] shadow-sm ring-1 ring-[#F84B1D]/30'
                                  : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:bg-zinc-50/70 hover:shadow-xs'
                              }`}
                            >
                              <div className="flex items-center gap-3.5">
                                {/* Radio Circle */}
                                <div
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                                    isSelected
                                      ? 'border-[#F84B1D] bg-[#F84B1D]'
                                      : 'border-zinc-300 group-hover:border-[#F84B1D] bg-white'
                                  }`}
                                >
                                  {isSelected && (
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                  )}
                                </div>

                                {/* Label */}
                                <span
                                  className={`text-base sm:text-lg font-medium transition-colors ${
                                    isSelected ? 'text-[#F84B1D] font-bold' : 'text-zinc-800 group-hover:text-zinc-950'
                                  }`}
                                >
                                  {option}
                                </span>
                              </div>

                              {/* Number Hotkey Badge */}
                              <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-md">
                                {index + 1}
                              </span>
                            </div>
                          );
                        })}

                        <p className="text-xs text-zinc-400 pt-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F84B1D]" />
                          Select an option to automatically proceed
                        </p>
                      </div>
                    )}

                    {/* Multi-Select List (Question 4: requires Continue button) */}
                    {currentQ.type === 'multi' && (
                      <div className="space-y-3 pt-1">
                        {currentQ.options.map((option) => {
                          const isSelected = formData.handoffTasks.includes(option);
                          return (
                            <div
                              key={option}
                              onClick={() => handleMultiToggle(option)}
                              className={`p-4 sm:p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between cursor-pointer select-none group ${
                                isSelected
                                  ? 'bg-[#FFF5F2] border-[#F84B1D] shadow-sm ring-1 ring-[#F84B1D]/30'
                                  : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:bg-zinc-50/70 hover:shadow-xs'
                              }`}
                            >
                              <div className="flex items-center gap-3.5">
                                <div
                                  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                                    isSelected
                                      ? 'border-[#F84B1D] bg-[#F84B1D]'
                                      : 'border-zinc-300 group-hover:border-[#F84B1D] bg-white'
                                  }`}
                                >
                                  {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                                </div>

                                <span
                                  className={`text-base sm:text-lg font-medium transition-colors ${
                                    isSelected ? 'text-[#F84B1D] font-bold' : 'text-zinc-800 group-hover:text-zinc-950'
                                  }`}
                                >
                                  {option}
                                </span>
                              </div>
                            </div>
                          );
                        })}

                        {/* Continue Button for Multi-Select */}
                        <div className="pt-3">
                          <button
                            type="button"
                            onClick={handleNext}
                            disabled={formData.handoffTasks.length === 0}
                            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-heading font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                              formData.handoffTasks.length > 0
                                ? 'bg-[#F84B1D] hover:bg-[#E03E12] text-white cursor-pointer shadow-[#F84B1D]/25 transform hover:-translate-y-0.5'
                                : 'bg-zinc-200 text-zinc-400 cursor-not-allowed border border-zinc-300'
                            }`}
                          >
                            <span>Continue</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 9 Form (Contact Info) */}
                    {currentQ.type === 'form' && (
                      <form onSubmit={handleNext} className="space-y-4 pt-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                              First Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. David"
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F84B1D] focus:ring-2 focus:ring-[#F84B1D]/10"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Miller"
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F84B1D] focus:ring-2 focus:ring-[#F84B1D]/10"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Apex Ventures"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F84B1D] focus:ring-2 focus:ring-[#F84B1D]/10"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="david@apexventures.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F84B1D] focus:ring-2 focus:ring-[#F84B1D]/10"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 019-2834"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#F84B1D] focus:ring-2 focus:ring-[#F84B1D]/10"
                          />
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full py-4 px-6 rounded-2xl bg-[#F84B1D] hover:bg-[#E03E12] text-white font-heading font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-[#F84B1D]/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                          >
                            <span>Get Matched with your EA Now</span>
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </form>
                    )}

                    {/* Mobile-Only: Show Engagement or Testimonial below question on small screens */}
                    <div className="block lg:hidden pt-4">
                      {currentQ.engagement && (
                        <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 text-center shadow-xs space-y-2">
                          <div className="w-2 h-2 rounded-full bg-[#F84B1D] mx-auto" />
                          <p className="text-sm font-semibold text-zinc-800 leading-relaxed">
                            {currentQ.engagement}
                          </p>
                        </div>
                      )}

                      {currentQ.testimonial && !currentQ.engagement && (
                        <div className="p-5 rounded-2xl bg-[#FFF8F6] border border-[#F84B1D]/25 text-center space-y-3 shadow-xs">
                          <div className="w-7 h-7 rounded-full bg-[#FFF0EB] text-[#F84B1D] border border-[#F84B1D]/30 flex items-center justify-center mx-auto">
                            <Quote className="w-3.5 h-3.5 fill-current" />
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-700 italic font-normal leading-relaxed">
                            &ldquo;{currentQ.testimonial.quote}&rdquo;
                          </p>
                          <div className="flex flex-col items-center justify-center gap-1 pt-0.5">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F84B1D]/30 shadow-xs">
                              <img
                                src={currentQ.testimonial.avatar}
                                alt={currentQ.testimonial.author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-heading font-bold text-xs sm:text-sm text-zinc-900">
                                {currentQ.testimonial.author}
                              </h4>
                              <p className="text-[10px] text-zinc-500">
                                {currentQ.testimonial.role}, <span className="text-[#F84B1D] font-bold">{currentQ.testimonial.company}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column (Desktop Only): Big Circular Gauge & Engagement/Testimonial Space */}
              <div className="hidden lg:flex lg:col-span-5 flex-col items-center space-y-6 pt-2 lg:pt-8">
                
                {/* Header Label above circle */}
                <div className="text-center space-y-3">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 uppercase block">
                    EA MATCH PROGRESS
                  </span>

                  {/* Circular Progress Gauge */}
                  <div className="relative w-36 h-36 mx-auto flex items-center justify-center select-none">
                    <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 120 120">
                      {/* Background Gauge Track */}
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        className="text-zinc-200"
                        strokeWidth="6"
                        stroke="currentColor"
                        fill="transparent"
                      />
                      {/* Active Progress Gauge Stroke with BackTech Orange */}
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="#F84B1D"
                        fill="transparent"
                        className="transition-all duration-300 ease-out"
                      />
                    </svg>

                    {/* Inner Text inside Circle */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-900 tracking-tight leading-none">
                        {progressPercentage}%
                      </span>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mt-1">
                        COMPLETE
                      </span>
                    </div>
                  </div>
                </div>

                {/* 1. Engagement Card: Shown when engagement line is available */}
                {currentQ.engagement && (
                  <div className="w-full max-w-md bg-white border border-zinc-200/90 rounded-3xl p-7 sm:p-8 text-center shadow-sm space-y-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F84B1D] mx-auto" />
                    <p className="text-base sm:text-lg font-semibold text-zinc-800 leading-relaxed">
                      {currentQ.engagement}
                    </p>
                  </div>
                )}

                {/* 2. Testimonial Card in Engagement Space: Shown when engagement line is NOT available */}
                {currentQ.testimonial && !currentQ.engagement && (
                  <div className="w-full max-w-md bg-[#FFF8F6] border border-[#F84B1D]/25 rounded-3xl p-6 sm:p-7 text-center shadow-sm space-y-4">
                    <div className="w-9 h-9 rounded-full bg-[#FFF0EB] text-[#F84B1D] border border-[#F84B1D]/30 flex items-center justify-center mx-auto">
                      <Quote className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-sm sm:text-base text-zinc-700 italic font-normal leading-relaxed">
                      &ldquo;{currentQ.testimonial.quote}&rdquo;
                    </p>
                    <div className="flex flex-col items-center justify-center gap-1.5 pt-1">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F84B1D]/30 shadow-xs">
                        <img
                          src={currentQ.testimonial.avatar}
                          alt={currentQ.testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-zinc-900">
                          {currentQ.testimonial.author}
                        </h4>
                        <p className="text-xs text-zinc-500">
                          {currentQ.testimonial.role}, <span className="text-[#F84B1D] font-bold">{currentQ.testimonial.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          ) : (
            /* Match Completion Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8 text-center max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-6 py-2.5 rounded-full bg-[#F84B1D] text-white text-xs sm:text-sm font-semibold shadow-xs">
                  Matches found
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                  We've Found 3 Candidate Matches for {formData.firstName || 'You'}
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  Based on your leadership role at <strong className="text-zinc-900">{formData.companyName || 'your company'}</strong>, our operations team is preparing your executive shortlist.
                </p>
              </div>

              {/* Matched EA Preview Card */}
              <div className="bg-[#FBF9F5] border border-zinc-200 rounded-2xl p-5 text-left space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F84B1D] text-white font-heading font-black flex items-center justify-center">
                      BT
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-zinc-900 text-sm">Pre-Vetted BackTech EA #104</h4>
                      <p className="text-xs text-zinc-500">Executive Operations Specialist &middot; Top 1% Global</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
                    99.4% Fit
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-zinc-800">
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200">
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">Experience</span>
                    6+ Years EA
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200">
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">Specialty</span>
                    Inbox &amp; Calendar
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200 col-span-2 sm:col-span-1">
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">Software</span>
                    M365 &middot; G-Suite &middot; Notion
                  </div>
                </div>
              </div>

              {/* Step 2: Schedule Discovery Call */}
              <div className="p-6 rounded-2xl bg-[#FFF8F6] border border-[#F84B1D]/25 space-y-4 text-left">
                <div>
                  <h3 className="font-heading font-bold text-lg text-zinc-900">
                    Step 2: Schedule Your 20-Min Match Review
                  </h3>
                  <p className="text-xs text-zinc-600 mt-1">
                    Pick a convenient time to walk through your candidate profiles with our matching director.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  <button
                    onClick={() => alert('Booking confirmed! An invite has been sent to your email.')}
                    className="p-3 rounded-xl bg-white hover:bg-[#F84B1D] hover:text-white border border-zinc-200 text-zinc-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 group shadow-xs"
                  >
                    <CalendarIcon className="w-3.5 h-3.5 text-[#F84B1D] group-hover:text-white" />
                    <span>Tomorrow at 10:00 AM</span>
                  </button>
                  <button
                    onClick={() => alert('Booking confirmed! An invite has been sent to your email.')}
                    className="p-3 rounded-xl bg-white hover:bg-[#F84B1D] hover:text-white border border-zinc-200 text-zinc-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 group shadow-xs"
                  >
                    <CalendarIcon className="w-3.5 h-3.5 text-[#F84B1D] group-hover:text-white" />
                    <span>Tomorrow at 2:30 PM</span>
                  </button>
                  <button
                    onClick={() => alert('Booking confirmed! An invite has been sent to your email.')}
                    className="p-3 rounded-xl bg-white hover:bg-[#F84B1D] hover:text-white border border-zinc-200 text-zinc-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 group shadow-xs"
                  >
                    <CalendarIcon className="w-3.5 h-3.5 text-[#F84B1D] group-hover:text-white" />
                    <span>Next Day at 11:00 AM</span>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/')}
                  className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  Return to Homepage &rarr;
                </button>
              </div>

            </motion.div>
          )}

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-4 border-t border-zinc-200/80 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 BackTech. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>NDA Protected</span>
            <span>&bull;</span>
            <span>Top 1% Global Talent</span>
            <span>&bull;</span>
            <span>14-Day Rematch Guarantee</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
