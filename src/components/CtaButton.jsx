import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaButton({
  onClick,
  to = '/match',
  text = 'Get matched with your EA now',
  children,
  className = '',
  variant = 'primary', // 'primary' | 'white'
  showArrow = true,
  size = 'md', // 'sm' | 'md' | 'lg'
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
    } else if (to) {
      navigate(to);
    }
  };

  const displayText = children || text;

  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-heading font-bold transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer select-none text-center';

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm shadow-xl shadow-[#F84B1D]/25 hover:shadow-2xl hover:shadow-[#F84B1D]/40',
    lg: 'px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base shadow-xl shadow-[#F84B1D]/30 hover:shadow-2xl hover:shadow-[#F84B1D]/50',
  }[size] || 'px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm shadow-xl shadow-[#F84B1D]/25 hover:shadow-2xl hover:shadow-[#F84B1D]/40';

  const variantStyles = {
    primary: 'bg-[#F84B1D] hover:bg-[#E03E12] text-white',
    white: '!bg-white hover:!bg-zinc-100 !text-zinc-950 shadow-md',
  }[variant] || 'bg-[#F84B1D] hover:bg-[#E03E12] text-white';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      <span>{displayText}</span>
      {showArrow && <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0" />}
    </button>
  );
}
