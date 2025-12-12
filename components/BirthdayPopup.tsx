import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { PandaIcon, CakeIcon, StarIcon, HeartIcon, GiftIcon } from './Stickers';

export const BirthdayPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [stage, setStage] = useState<'gift' | 'revealed'>('gift');

  useEffect(() => {
    // Start with the gift, then open it automatically for a seamless effect
    const openTimer = setTimeout(() => {
        handleOpenGift();
    }, 1200); // Wait 1.2s of shaking before opening

    return () => clearTimeout(openTimer);
  }, []);

  const handleOpenGift = () => {
    setStage('revealed');
    triggerConfetti();
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    // Initial Burst
    confetti({
        ...defaults,
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#7eb356', '#ff8fa3', '#2D2D2D', '#ffffff']
    });

    // Ongoing Rain
    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-panda-black/90 backdrop-blur-md transition-opacity duration-500" 
        onClick={onClose}
      ></div>
      
      {/* Container */}
      <div className="relative w-full flex items-center justify-center pointer-events-none">
        
        {/* Stage 1: The Gift Box */}
        {stage === 'gift' && (
            <div className="animate-rattle z-50 transform transition-all duration-300">
                 <div className="relative group cursor-pointer pointer-events-auto" onClick={handleOpenGift}>
                     {/* Glow behind gift */}
                     <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                     <GiftIcon className="w-64 h-64 text-white drop-shadow-[0_10px_30px_rgba(255,255,255,0.3)]" />
                     <p className="absolute -bottom-12 left-0 right-0 text-center text-white font-handwritten text-2xl animate-bounce">
                         Opening...
                     </p>
                 </div>
            </div>
        )}

        {/* Stage 2: The Card Revealed */}
        {stage === 'revealed' && (
            <div className="relative pointer-events-auto bg-panda-cream border-[8px] border-panda-black p-8 md:p-12 rounded-[3rem] max-w-lg w-full text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-pop-in overflow-hidden">
                
                {/* Subtle Pattern Background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D2D2D 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-bamboo-300 rounded-full border-4 border-panda-black flex items-center justify-center animate-pulse z-10 shadow-lg">
                    <span className="text-3xl">🎉</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blush-300 rounded-full border-4 border-panda-black flex items-center justify-center animate-wiggle z-10 shadow-lg">
                    <span className="text-3xl">🎋</span>
                </div>

                {/* Floating Stars */}
                <StarIcon className="absolute top-10 left-8 w-10 h-10 text-yellow-400 animate-spin-slow opacity-80" />
                <StarIcon className="absolute bottom-20 right-8 w-8 h-8 text-blush-400 animate-bounce opacity-80" />

                <h1 className="relative text-6xl md:text-8xl font-handwritten text-transparent bg-clip-text bg-gradient-to-br from-panda-black to-panda-dark mb-4 transform -rotate-3 drop-shadow-sm z-10">
                Sweet 18!
                </h1>
                
                <div className="my-8 relative h-48 flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-blush-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="relative z-10 flex items-end justify-center -space-x-8">
                        <PandaIcon className="w-40 h-40 animate-bounce-slow" />
                        <CakeIcon className="w-32 h-32 transform translate-y-4" />
                    </div>
                </div>

                <p className="relative text-2xl font-cute text-panda-dark mb-10 leading-relaxed z-10">
                Happy Birthday! <br/>
                <span className="text-bamboo-500 font-bold">Have a magical day!</span> ✨
                </p>

                <button 
                onClick={onClose}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-panda-black text-white font-cute font-bold text-xl rounded-full overflow-hidden transition-transform active:scale-95 hover:scale-105 shadow-xl z-10"
                >
                <span className="relative z-10 flex items-center gap-3">
                    Yay! <HeartIcon className="w-6 h-6 text-blush-400 fill-current" />
                </span>
                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
            </div>
        )}
      </div>
    </div>
  );
};