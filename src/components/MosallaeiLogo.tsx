import React from 'react';

interface MosallaeiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  color?: string;
  textColor?: string;
}

export const MosallaeiLogo: React.FC<MosallaeiLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  color = '#D4AF37',
  textColor = '#E0E0E0'
}) => {
  const logoDimensions = {
    sm: { emblemSize: 32, titleText: 'text-xs', subText: 'text-[8px]', taglineText: 'text-[6.5px]' },
    md: { emblemSize: 42, titleText: 'text-sm', subText: 'text-[9.5px]', taglineText: 'text-[7.5px]' },
    lg: { emblemSize: 56, titleText: 'text-base', subText: 'text-[11px]', taglineText: 'text-[8.5px]' },
    xl: { emblemSize: 72, titleText: 'text-xl', subText: 'text-[13px]', taglineText: 'text-[10px]' }
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric Architectural Monogram Emblem */}
      <svg
        width={logoDimensions.emblemSize}
        height={logoDimensions.emblemSize}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:scale-105"
      >
        {/* Outer Vertical Structural Columns */}
        <line x1="45" y1="110" x2="45" y2="200" stroke={color} strokeWidth="8" strokeLinecap="square" />
        <line x1="65" y1="90" x2="65" y2="200" stroke={color} strokeWidth="8" strokeLinecap="square" />
        <line x1="85" y1="130" x2="85" y2="200" stroke={color} strokeWidth="8" strokeLinecap="square" />
        
        <line x1="195" y1="110" x2="195" y2="200" stroke={color} strokeWidth="8" strokeLinecap="square" />
        <line x1="175" y1="90" x2="175" y2="200" stroke={color} strokeWidth="8" strokeLinecap="square" />
        <line x1="155" y1="130" x2="155" y2="200" stroke={color} strokeWidth="8" strokeLinecap="square" />

        {/* Primary Geometric M Top Peaks */}
        <path
          d="M65 90 L65 40 L120 100 L175 40 L175 90"
          stroke={color}
          strokeWidth="9"
          strokeLinejoin="miter"
          strokeLinecap="square"
          fill="none"
        />

        {/* Inner Chevron / Facade Geometry */}
        <path
          d="M85 130 L120 170 L155 130 L120 90 Z"
          stroke={color}
          strokeWidth="8"
          strokeLinejoin="miter"
          fill="none"
        />

        {/* Central Geometric Hook Accent */}
        <path
          d="M120 120 L120 146 L110 138"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
      </svg>

      {/* Typography Branding */}
      <div className="flex flex-col justify-center">
        <div className={`font-sans font-black tracking-[0.24em] uppercase leading-none ${logoDimensions.titleText}`} style={{ color: textColor }}>
          MOSALLAEI
        </div>
        <div className="flex items-center gap-1.5 my-1">
          <div className="h-[1px] w-3.5 bg-[#D4AF37]/60"></div>
          <span className={`font-sans font-bold tracking-[0.38em] text-[#D4AF37] uppercase leading-none ${logoDimensions.subText}`}>
            ARCHITECT
          </span>
          <div className="h-[1px] w-3.5 bg-[#D4AF37]/60"></div>
        </div>
        {showTagline && (
          <div className={`font-mono font-medium tracking-[0.22em] text-[#8B949E] uppercase leading-none ${logoDimensions.taglineText}`}>
            DESIGN | COORDINATE | BUILD
          </div>
        )}
      </div>
    </div>
  );
};
