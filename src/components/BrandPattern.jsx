import React from 'react';

/**
 * BrandPattern — Renders the official BackTech geometric modular shapes
 * based on Image 4 provided in brand guidelines.
 */
export default function BrandPattern({
  className = "w-full h-auto",
  opacity = 1,
  glow = false,
  darkVariant = false
}) {
  const orange = darkVariant ? "rgba(255, 77, 38, 0.22)" : "#F84B1D";
  const dark = darkVariant ? "#070709" : "#0A0A0C";
  const white = darkVariant ? "rgba(255, 255, 255, 0.08)" : "#FFFFFF";

  return (
    <div className={`relative select-none pointer-events-none ${className}`} style={{ opacity }}>
      {glow && (
        <div className="absolute inset-0 bg-[#F84B1D]/20 filter blur-2xl rounded-full -z-10" />
      )}
      <svg
        viewBox="0 0 340 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <clipPath id="bp-top-left">
            <rect x="0" y="0" width="165" height="82" rx="41" />
          </clipPath>
          <clipPath id="bp-top-right">
            <rect x="175" y="0" width="165" height="82" rx="41" />
          </clipPath>
          <clipPath id="bp-mid-left">
            <rect x="0" y="94" width="232" height="82" rx="41" />
          </clipPath>
          <clipPath id="bp-mid-right">
            <rect x="248" y="94" width="92" height="148" rx="46" />
          </clipPath>
          <clipPath id="bp-bot-left">
            <rect x="0" y="188" width="92" height="148" rx="46" />
          </clipPath>
          <clipPath id="bp-bot-right">
            <rect x="108" y="254" width="232" height="82" rx="41" />
          </clipPath>
        </defs>

        {/* 1. TOP LEFT HORIZONTAL CAPSULE */}
        <g clipPath="url(#bp-top-left)">
          <rect x="0" y="0" width="165" height="82" rx="41" fill={orange} />
          <path d="M41 15C26.64 15 15 26.64 15 41C15 55.36 26.64 67 41 67V15Z" fill={white} />
          <path d="M52 15C66.36 15 78 26.64 78 41C78 55.36 66.36 67 52 67V15Z" fill={dark} />
          <circle cx="124" cy="41" r="26" fill={white} />
        </g>

        {/* 2. TOP RIGHT HORIZONTAL CAPSULE */}
        <g clipPath="url(#bp-top-right)">
          <rect x="175" y="0" width="165" height="82" rx="41" fill={orange} />
          <circle cx="216" cy="41" r="26" fill={dark} />
          <circle cx="216" cy="41" r="13" fill={orange} />
          <path d="M260 15C274.36 15 286 26.64 286 41C286 55.36 274.36 67 260 67V15Z" fill={dark} />
          <path d="M325 15C310.64 15 299 26.64 299 41C299 55.36 310.64 67 325 67V15Z" fill={dark} />
        </g>

        {/* 3. MIDDLE LEFT HORIZONTAL CAPSULE */}
        <g clipPath="url(#bp-mid-left)">
          <rect x="0" y="94" width="232" height="82" rx="41" fill={orange} />
          <circle cx="41" cy="135" r="26" fill={white} />
          <circle cx="116" cy="135" r="26" fill={dark} />
          <circle cx="116" cy="135" r="13" fill={orange} />
          <circle cx="191" cy="135" r="26" fill={white} />
        </g>

        {/* 4. MIDDLE RIGHT VERTICAL ARCH */}
        <g clipPath="url(#bp-mid-right)">
          <rect x="248" y="94" width="92" height="148" rx="46" fill={orange} />
          <circle cx="294" cy="140" r="26" fill={white} />
          <path d="M268 172C268 186.36 279.64 198 294 198C308.36 198 320 186.36 320 172H268Z" fill={dark} />
          <path d="M268 230C268 244.36 279.64 256 294 256C308.36 256 320 244.36 320 230H268Z" fill={white} />
        </g>

        {/* 5. CENTER FREESTANDING ELEMENTS */}
        <circle cx="129" cy="214" r="29" fill={orange} />
        <path d="M203 185C219.016 185 232 197.984 232 214C232 230.016 219.016 243 203 243V185Z" fill={orange} />

        {/* 6. BOTTOM LEFT VERTICAL ARCH */}
        <g clipPath="url(#bp-bot-left)">
          <rect x="0" y="188" width="92" height="148" rx="46" fill={orange} />
          <circle cx="46" cy="234" r="26" fill={white} />
          <path d="M20 266C20 280.36 31.64 292 46 292C60.36 292 72 280.36 72 266H20Z" fill={dark} />
          <path d="M20 324C20 338.36 31.64 350 46 350C60.36 350 72 338.36 72 324H20Z" fill={white} />
        </g>

        {/* 7. BOTTOM RIGHT HORIZONTAL CAPSULE */}
        <g clipPath="url(#bp-bot-right)">
          <rect x="108" y="254" width="232" height="82" rx="41" fill={orange} />
          <circle cx="149" cy="295" r="26" fill={dark} />
          <circle cx="149" cy="295" r="13" fill={orange} />
          <path d="M211 269C196.64 269 185 280.64 185 295C185 309.36 196.64 321 211 321V269Z" fill={white} />
          <path d="M225 269C239.36 269 251 280.64 251 295C251 309.36 239.36 321 225 321V269Z" fill={white} />
          <circle cx="295" cy="295" r="26" fill={dark} />
          <circle cx="295" cy="295" r="13" fill={orange} />
        </g>
      </svg>
    </div>
  );
}

