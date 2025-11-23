import React from 'react';

export const PandaIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Ears */}
    <circle cx="25" cy="25" r="12" fill="#2D2D2D" />
    <circle cx="75" cy="25" r="12" fill="#2D2D2D" />
    {/* Face */}
    <ellipse cx="50" cy="55" rx="40" ry="35" fill="white" stroke="#2D2D2D" strokeWidth="3"/>
    {/* Eyes */}
    <ellipse cx="35" cy="50" rx="10" ry="12" fill="#2D2D2D" transform="rotate(15 35 50)"/>
    <ellipse cx="65" cy="50" rx="10" ry="12" fill="#2D2D2D" transform="rotate(-15 65 50)"/>
    <circle cx="37" cy="48" r="3" fill="white"/>
    <circle cx="63" cy="48" r="3" fill="white"/>
    {/* Nose */}
    <ellipse cx="50" cy="62" rx="6" ry="4" fill="#2D2D2D"/>
    {/* Mouth */}
    <path d="M45 68 Q50 73 55 68" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round"/>
    {/* Cheeks */}
    <circle cx="25" cy="60" r="5" fill="#FFB7B2" opacity="0.6"/>
    <circle cx="75" cy="60" r="5" fill="#FFB7B2" opacity="0.6"/>
  </svg>
);

export const BambooIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M8 2h2v4H8V2zm0 6h2v5H8V8zm0 7h2v5H8v-5zm6-11h2v5h-2V4zm0 7h2v5h-2v-5zm0 7h2v4h-2v-4zM7 6h4v1H7V6zm0 11h4v1H7v-1zm5-7h4v1h-4v-1zm-5 7h4v1H7v-1z" />
  </svg>
);

export const PawIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M17 5C18.1 5 19 5.9 19 7S18.1 9 17 9 15 8.1 15 7 15.9 5 17 5M7 5C8.1 5 9 5.9 9 7S8.1 9 7 9 5 8.1 5 7 5.9 5 7 5M12 8C15.5 8 18 10.5 18 13.5C18 15.5 17 17.5 15.5 19C14.5 20 13.5 21 12 21C10.5 21 9.5 20 8.5 19C7 17.5 6 15.5 6 13.5C6 10.5 8.5 8 12 8Z" />
  </svg>
);

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export const BowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M17 6c-1.8 0-3.3 1.2-3.8 2.8C12.8 8.4 12.4 8.4 12 8.4s-0.8 0-1.2 0.4C10.3 7.2 8.8 6 7 6 4.2 6 2 8.2 2 11c0 2.3 1.5 4.3 3.6 5.2l-1.1 3.2c-0.2 0.5 0.1 1.1 0.7 1.1h0.2l3.4-1.7c0.6-0.3 1-0.9 1-1.6v-0.7c0.7 0.3 1.5 0.5 2.2 0.5s1.5-0.2 2.2-0.5v0.7c0 0.7 0.4 1.3 1 1.6l3.4 1.7h0.2c0.6 0 0.9-0.6 0.7-1.1l-1.1-3.2c2.1-0.9 3.6-2.9 3.6-5.2C22 8.2 19.8 6 17 6z M12 13c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2S12.9 13 12 13z"/>
  </svg>
);

export const CakeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Plate */}
    <ellipse cx="50" cy="85" rx="38" ry="10" fill="#E5E7EB" opacity="0.5"/>
    
    {/* Bottom Tier */}
    <path d="M25 75 L25 55 C25 50 75 50 75 55 L75 75 C75 82 25 82 25 75" fill="#FCFBF7" stroke="#2D2D2D" strokeWidth="3"/>
    
    {/* Bottom Frosting */}
    <path d="M25 55 Q30 65 37.5 55 T50 55 T62.5 55 T75 55" fill="#FFB7B2" stroke="#2D2D2D" strokeWidth="3" strokeLinecap="round"/>

    {/* Top Tier */}
    <path d="M35 55 L35 35 C35 30 65 30 65 35 L65 55" fill="#FCFBF7" stroke="#2D2D2D" strokeWidth="3"/>
    
    {/* Top Frosting */}
    <path d="M35 35 Q40 45 50 35 T65 35" fill="#FFB7B2" stroke="#2D2D2D" strokeWidth="3" strokeLinecap="round"/>

    {/* Top Surface */}
    <ellipse cx="50" cy="35" rx="15" ry="5" fill="#FFF0F3" stroke="#2D2D2D" strokeWidth="3"/>

    {/* Candle */}
    <rect x="48" y="15" width="4" height="20" fill="#7EB356" stroke="#2D2D2D" strokeWidth="2"/>
    <path d="M50 15 Q52 5 50 2 Q48 5 50 15" fill="#FF8FA3" className="animate-pulse origin-bottom"/>

    {/* Decor - Bamboo Leaves */}
    <path d="M40 65 Q45 70 50 65 Q55 70 60 65" stroke="#7EB356" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
);

export const GiftIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        {/* Box */}
        <rect x="20" y="40" width="60" height="50" rx="4" fill="#FCFBF7" stroke="#2D2D2D" strokeWidth="3"/>
        {/* Lid */}
        <rect x="15" y="30" width="70" height="15" rx="2" fill="#FFB7B2" stroke="#2D2D2D" strokeWidth="3"/>
        {/* Ribbon Vertical */}
        <rect x="45" y="40" width="10" height="50" fill="#7EB356" stroke="#2D2D2D" strokeWidth="2"/>
        <rect x="45" y="30" width="10" height="15" fill="#7EB356" stroke="#2D2D2D" strokeWidth="2"/>
        {/* Bow */}
        <path d="M50 30 C50 10 20 10 45 30" fill="#7EB356" stroke="#2D2D2D" strokeWidth="2"/>
        <path d="M50 30 C50 10 80 10 55 30" fill="#7EB356" stroke="#2D2D2D" strokeWidth="2"/>
        <circle cx="50" cy="30" r="4" fill="#FF8FA3" stroke="#2D2D2D" strokeWidth="2"/>
    </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
);

export const BackgroundDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-panda-cream">
      {/* Bamboo Background Elements */}
      <BambooIcon className="absolute bottom-0 left-[-20px] w-32 h-64 text-bamboo-300 opacity-20 transform -rotate-6" />
      <BambooIcon className="absolute bottom-0 right-[-10px] w-40 h-80 text-bamboo-300 opacity-20 transform rotate-3" />
      
      {/* Scattered Paws */}
      <PawIcon className="absolute top-10 left-10 w-8 h-8 text-panda-black opacity-5 transform rotate-[-20deg]" />
      <PawIcon className="absolute top-40 left-1/4 w-6 h-6 text-panda-black opacity-5 transform rotate-[10deg]" />
      <PawIcon className="absolute top-20 right-10 w-10 h-10 text-panda-black opacity-5 transform rotate-[30deg]" />
      <PawIcon className="absolute bottom-1/3 right-1/4 w-8 h-8 text-panda-black opacity-5 transform rotate-[-15deg]" />

      {/* Soft Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-bamboo-100 blur-[80px] opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blush-100 blur-[80px] opacity-50"></div>
    </div>
  );
};