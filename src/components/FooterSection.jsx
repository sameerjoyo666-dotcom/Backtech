import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function FooterSection({ onOpenBooking }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBooking = () => {
    if (typeof onOpenBooking === 'function') {
      onOpenBooking();
    } else {
      navigate('/match');
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (!sectionId) {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="relative bg-bg-surface border-t border-border-color pt-16 pb-10 overflow-hidden select-none w-full">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14">
          
          {/* Column 1: Brand Info & Tagline & Social Links */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '')}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F84B1D] rounded-lg"
            >
              <Logo />
            </a>
            
            <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
              We provide Founders and CEOs with fully managed, Top 1% Executive Assistants to buy back their time, scale operations, and focus on growth.
            </p>

            {/* Social Links Row (Hover Orange Icons & Text) */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-xs text-zinc-400 hover:text-[#F84B1D] transition-colors"
                aria-label="BackTech on Facebook"
              >
                <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#F84B1D] transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="group-hover:text-[#F84B1D] transition-colors">Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-xs text-zinc-400 hover:text-[#F84B1D] transition-colors"
                aria-label="BackTech on Instagram"
              >
                <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#F84B1D] transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="group-hover:text-[#F84B1D] transition-colors">Instagram</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-xs text-zinc-400 hover:text-[#F84B1D] transition-colors"
                aria-label="BackTech on LinkedIn"
              >
                <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#F84B1D] transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="group-hover:text-[#F84B1D] transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link 
                  to="/pricing" 
                  className={`transition-colors ${
                    location.pathname === '/pricing' 
                      ? 'text-[#F84B1D] font-bold' 
                      : 'hover:text-[#F84B1D]'
                  }`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`transition-colors ${
                    location.pathname === '/about' 
                      ? 'text-[#F84B1D] font-bold' 
                      : 'hover:text-[#F84B1D]'
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="/#testimonials" 
                  onClick={(e) => handleNavClick(e, 'testimonials')}
                  className="hover:text-[#F84B1D] transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="/#faq" 
                  onClick={(e) => handleNavClick(e, 'faq')}
                  className="hover:text-[#F84B1D] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="/#comparison" 
                  onClick={(e) => handleNavClick(e, 'comparison')}
                  className="hover:text-[#F84B1D] transition-colors"
                >
                  Hiring Protocol
                </a>
              </li>
              <li>
                <a 
                  href="/#faq" 
                  onClick={(e) => handleNavClick(e, 'faq')}
                  className="hover:text-[#F84B1D] transition-colors"
                >
                  Blog &amp; Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <a 
                  href="/#security" 
                  onClick={(e) => handleNavClick(e, 'security')}
                  className="hover:text-[#F84B1D] transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a 
                  href="/#security" 
                  onClick={(e) => handleNavClick(e, 'security')}
                  className="hover:text-[#F84B1D] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <button 
                  onClick={handleBooking} 
                  className="hover:text-[#F84B1D] transition-colors text-left focus:outline-none"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Links with Orange Icons */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <a 
                  href="tel:+15127616142" 
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F84B1D] flex-shrink-0" />
                  <span>+1 (512) 761-6142</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sales@backtech.io" 
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F84B1D] flex-shrink-0" />
                  <span>sales@backtech.io</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F84B1D] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">5900 Balcones Dr Ste 18391, Austin, TX 78731–4257</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Copyright */}
        <div className="pt-6 border-t border-zinc-800/80 text-xs text-zinc-500 text-center sm:text-left">
          &copy; 2026 BackTech. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

