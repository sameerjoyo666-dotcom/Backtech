import React from 'react';
import logoNew from '../assets/logo-new.png';
import logoColor from '../assets/logo-color.png';

/**
 * BackTech Logo Component using user-provided logo with orange mark.
 * - theme="white" or theme="dark": Renders the user-provided logo for dark screens/navbar/footer
 * - theme="color" or theme="light": Renders the color PNG logo for light form screens
 */
export default function Logo({ className = "h-7 sm:h-8", theme = "white" }) {
  const isColor = theme === "color" || theme === "light";
  const logoSrc = isColor ? logoColor : logoNew;
  const altText = isColor ? "BackTech Color Logo" : "BackTech Logo";

  return (
    <img
      src={logoSrc}
      alt={altText}
      className={`w-auto object-contain select-none ${className}`}
    />
  );
}

