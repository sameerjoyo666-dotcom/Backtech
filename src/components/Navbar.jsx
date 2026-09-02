import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, Phone, Mail, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenBooking, activePage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('backtech-theme') || 
      (document.documentElement.classList.contains('light') ? 'light' : 'dark');
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('backtech-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const isPricing = location.pathname === '/pricing' || activePage === 'pricing';
  const isAbout = location.pathname === '/about' || activePage === 'about';
  const isHome = location.pathname === '/' && activePage !== 'pricing' && activePage !== 'about';

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080A] border-b border-zinc-800/80 shadow-2xl py-3.5 sm:py-4 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F84B1D] rounded-lg"
          >
            <Logo className="h-7 sm:h-8" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-medium">
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition-colors py-2 cursor-pointer ${
                isHome ? 'text-[#F84B1D] font-bold' : 'text-zinc-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            <Link
              to="/pricing"
              className={`transition-colors py-2 cursor-pointer ${
                isPricing ? 'text-[#F84B1D] font-bold' : 'text-zinc-300 hover:text-white'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/about"
              className={`transition-colors py-2 cursor-pointer ${
                isAbout ? 'text-[#F84B1D] font-bold' : 'text-zinc-300 hover:text-white'
              }`}
            >
              About Us
            </Link>

            <a
              href="/#testimonials"
              onClick={(e) => handleSectionClick(e, 'testimonials')}
              className="transition-colors py-2 text-zinc-300 hover:text-white cursor-pointer"
            >
              Case Studies
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#faq"
              onClick={(e) => handleSectionClick(e, 'faq')}
              className="px-5 py-2 text-xs font-semibold tracking-wide text-zinc-300 bg-[#141418] hover:bg-[#1E1E24] border border-zinc-700/60 hover:border-zinc-500 rounded-full transition-all duration-200 cursor-pointer"
            >
              Careers
            </a>

            {/* Theme Toggle Button beside Careers */}
            <button
              onClick={toggleTheme}
              className="px-3.5 py-2 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-zinc-300 bg-[#141418] hover:bg-[#1E1E24] border border-zinc-700/60 hover:border-zinc-500 rounded-full transition-all duration-200 cursor-pointer group"
              aria-label="Toggle Light or Dark Theme"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#F84B1D] group-hover:rotate-12 transition-transform" />
                  <span className="text-[11px] font-medium">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#F84B1D] group-hover:rotate-45 transition-transform" />
                  <span className="text-[11px] font-medium">Light</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 text-xs font-bold tracking-wide text-white bg-[#F84B1D] hover:bg-[#E03E12] rounded-full shadow-lg shadow-[#F84B1D]/25 hover:shadow-[#F84B1D]/45 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white rounded-xl bg-zinc-900/60 border border-zinc-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#F84B1D]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-[#08080A]/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-4">
              <div className="border-b border-zinc-800/80 pb-3">
                <Link
                  to="/"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-lg font-semibold block ${
                    isHome ? 'text-[#F84B1D]' : 'text-zinc-200'
                  }`}
                >
                  Home
                </Link>
              </div>

              <div className="border-b border-zinc-800/80 pb-3">
                <Link
                  to="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold block ${
                    isPricing ? 'text-[#F84B1D]' : 'text-zinc-200'
                  }`}
                >
                  Pricing
                </Link>
              </div>

              <div className="border-b border-zinc-800/80 pb-3">
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold block ${
                    isAbout ? 'text-[#F84B1D]' : 'text-zinc-200'
                  }`}
                >
                  About Us
                </Link>
              </div>

              <div className="border-b border-zinc-800/80 pb-3">
                <a
                  href="/#testimonials"
                  onClick={(e) => handleSectionClick(e, 'testimonials')}
                  className="text-lg font-semibold block text-zinc-200"
                >
                  Case Studies
                </a>
              </div>
            </nav>

            <div className="p-4 rounded-2xl bg-[#121216] border border-zinc-800 space-y-2">
              <span className="text-[11px] font-bold text-[#F84B1D] uppercase tracking-wider block">
                Direct Contact
              </span>
              <div className="space-y-1 text-xs text-zinc-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F84B1D]" />
                  +1 (512) 761-6142
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#F84B1D]" />
                  sales@backtech.io
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <div className="flex gap-2">
              <a
                href="#faq"
                onClick={(e) => handleSectionClick(e, 'faq')}
                className="flex-1 block text-center py-3 text-xs font-semibold tracking-wider text-zinc-200 bg-[#161619] rounded-full border border-zinc-700"
              >
                Careers
              </a>
              <button
                onClick={toggleTheme}
                className="px-5 py-3 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-200 bg-[#161619] rounded-full border border-zinc-700 cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-4 h-4 text-[#F84B1D]" />
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-[#F84B1D]" />
                    <span>Light</span>
                  </>
                )}
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 text-xs font-bold tracking-wider uppercase text-white bg-[#F84B1D] hover:bg-[#E03E12] rounded-full shadow-xl shadow-[#F84B1D]/30"
            >
              Get Matched With Your EA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

