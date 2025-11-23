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
