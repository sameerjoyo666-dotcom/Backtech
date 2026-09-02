import React, { useState, useEffect } from 'react';
import logoNew from '../assets/logo-new.png';
import logoColor from '../assets/logo-color.png';

/**
 * BackTech Logo Component using user-provided logo with orange mark.
 * Automatically adapts between dark mode (white text) and light mode (dark text).
 */
export default function Logo({ className = "h-7 sm:h-8", theme }) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.documentElement.classList.contains('light'));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const isColor = theme === "color" || theme === "light" || (theme === undefined && isLightMode);
  const logoSrc = isColor ? logoColor : logoNew;
  const altText = isColor ? "BackTech Color Logo" : "BackTech Logo";

  return (
    <img
      src={logoSrc}
      alt={altText}
      className={`w-auto object-contain select-none transition-opacity duration-200 ${className}`}
    />
  );
}


