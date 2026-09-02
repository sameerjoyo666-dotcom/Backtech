import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PainPointsSection from '../components/PainPointsSection';
import SolutionSection from '../components/SolutionSection';
import ComparisonSection from '../components/ComparisonSection';
import MarketRateSection from '../components/MarketRateSection';
import SecuritySection from '../components/SecuritySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import CloserSection from '../components/CloserSection';
import FooterSection from '../components/FooterSection';

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('Entrepreneur/founder');

  const handleNavigateToMatch = (role) => {
    const targetRole = role || selectedRole || 'Entrepreneur/founder';
    navigate(`/match?role=${encodeURIComponent(targetRole)}`);
  };

  return (
    <div className="bg-[#0A0A0B] text-[#E4E4E7] font-sans antialiased min-h-screen">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleNavigateToMatch()} />

      {/* Main Landing Page Content */}
      <main>
        {/* 1. Hero Section (Figma Match with role picker) */}
        <HeroSection
          onOpenBooking={() => handleNavigateToMatch(selectedRole)}
          setSelectedRole={setSelectedRole}
        />

        {/* 2. Pain Points Breakdown (3 Drops: Inbox, Business, Life) */}
        <PainPointsSection onOpenBooking={() => handleNavigateToMatch()} />

        {/* 3. Solution Section (Pretrained Tools & Vetting Protocol) */}
        <SolutionSection onOpenBooking={() => handleNavigateToMatch()} />

        {/* 4. Differentiation & USP Comparison Table */}
        <ComparisonSection onOpenBooking={() => handleNavigateToMatch()} />

        {/* 5. Market-Rate Proof & Value Calculator */}
        <MarketRateSection onOpenBooking={() => handleNavigateToMatch()} />

        {/* 6. Security, Compliance & Trust Pillars */}
        <SecuritySection onOpenBooking={() => handleNavigateToMatch()} />

        {/* 7. Client Testimonials & Social Proof */}
        <TestimonialsSection onOpenBooking={() => handleNavigateToMatch()} />

        {/* 8. Frequently Asked Questions Accordion */}
        <FaqSection onOpenBooking={() => handleNavigateToMatch()} />

        {/* 9. High-Conversion Closer CTA Band */}
        <CloserSection onOpenBooking={() => handleNavigateToMatch()} />
      </main>

      {/* 10. Footer (Figma Match) */}
      <FooterSection onOpenBooking={() => handleNavigateToMatch()} />
    </div>
  );
}


