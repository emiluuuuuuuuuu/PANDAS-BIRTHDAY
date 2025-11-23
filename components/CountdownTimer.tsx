import React, { useState, useEffect } from 'react';
// @ts-ignore
import confetti from 'canvas-confetti';
import { TimeLeft } from '../types';
import { TARGET_DATE } from '../constants';
import { PandaIcon, CakeIcon, HeartIcon, GiftIcon, StarIcon } from './Stickers';

const calculateTimeLeft = (): TimeLeft => {
  const difference = +TARGET_DATE - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4">
    <div className="relative group">
      {/* Cute Shadow Blob */}
      <div className="absolute top-2 left-2 w-full h-full bg-panda-black rounded-2xl opacity-10 group-hover:top-3 group-hover:left-3 transition-all duration-300"></div>
      
      <div className="relative w-16 h-20 md:w-20 md:h-24 bg-white border-4 border-panda-black rounded-2xl flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
        <span className="text-3xl md:text-4xl font-bold text-panda-black font-cute">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
    </div>
    <span className="mt-3 text-sm font-bold uppercase tracking-wider text-panda-black/70 font-cute bg-bamboo-100 px-3 py-1 rounded-full">
      {label}
    </span>
  </div>
);

const BirthdayPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useEffect(() => {
    // Fire festive fireworks for 3 seconds
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-panda-black/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-panda-cream border-[6px] border-panda-black p-8 md:p-12 rounded-[2.5rem] max-w-lg w-full text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform animate-bounce-slow overflow-hidden">
        
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D2D2D 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-bamboo-300 rounded-full border-4 border-panda-black flex items-center justify-center animate-pulse z-10">
            <span className="text-2xl">🎉</span>
        </div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blush-300 rounded-full border-4 border-panda-black flex items-center justify-center animate-wiggle z-10">
            <span className="text-2xl">🎋</span>
        </div>

        {/* Floating Stars */}
        <StarIcon className="absolute top-10 left-8 w-8 h-8 text-yellow-400 animate-spin-slow opacity-80" />
        <StarIcon className="absolute bottom-20 right-8 w-6 h-6 text-blush-400 animate-bounce opacity-80" />

        <h1 className="relative text-6xl md:text-8xl font-handwritten text-transparent bg-clip-text bg-gradient-to-br from-panda-black to-panda-dark mb-2 transform -rotate-3 drop-shadow-sm z-10">
          Sweet 18!
        </h1>
        
        <div className="my-8 relative h-40 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-blush-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 flex items-end justify-center -space-x-6">
                 <PandaIcon className="w-32 h-32 animate-bounce-slow" />
                 <CakeIcon className="w-28 h-28 transform translate-y-2" />
            </div>
        </div>

        <p className="relative text-xl font-cute text-panda-dark mb-8 leading-relaxed z-10">
           Happy Birthday! You're officially an adult but you'll always be the cutest! 
           <br/><span className="text-bamboo-500 font-bold">Have a magical day!</span> ✨
        </p>

        <button 
          onClick={onClose}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-panda-black text-white font-cute font-bold text-xl rounded-full overflow-hidden transition-transform active:scale-95 hover:scale-105 shadow-xl z-10"
        >
          <span className="relative z-10 flex items-center gap-2">
            Let's Celebrate! <HeartIcon className="w-5 h-5 text-blush-400 fill-current" />
          </span>
          <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </button>
      </div>
    </div>
  );
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isBirthday, setIsBirthday] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const calculated = calculateTimeLeft();
      setTimeLeft(calculated);
      
      if (calculated.days === 0 && calculated.hours === 0 && calculated.minutes === 0 && calculated.seconds === 0) {
        setIsBirthday(true);
        setShowPopup(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
        {showPopup && <BirthdayPopup onClose={() => setShowPopup(false)} />}
        
        {isBirthday ? (
          <div className="text-center animate-bounce-slow py-10">
            <h1 className="text-5xl md:text-7xl text-panda-black mb-6 font-handwritten transform -rotate-3">
              Happy Sweet 18!
            </h1>
            <p className="text-xl text-panda-dark font-cute bg-blush-100 inline-block px-6 py-2 rounded-full border-2 border-panda-black border-dashed">
              Enjoy your special day! 🐼🎂
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 w-full mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              <TimeUnit value={timeLeft.days} label="Days" />
              <span className="text-4xl font-black text-bamboo-500 hidden md:block self-center pb-8 animate-pulse">:</span>
              <TimeUnit value={timeLeft.hours} label="Hrs" />
              <span className="text-4xl font-black text-bamboo-500 hidden md:block self-center pb-8 animate-pulse">:</span>
              <TimeUnit value={timeLeft.minutes} label="Mins" />
              <span className="text-4xl font-black text-bamboo-500 hidden md:block self-center pb-8 animate-pulse">:</span>
              <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>
            
            {/* Surprise Gift Box Trigger */}
            <button 
                onClick={() => setShowPopup(true)}
                className="mt-12 group relative"
                aria-label="Open Birthday Surprise"
                title="Preview Surprise!"
            >
                <div className="absolute inset-0 bg-blush-300 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity animate-pulse"></div>
                <div className="relative bg-white border-4 border-panda-black p-4 rounded-2xl transform transition-transform group-hover:-translate-y-2 group-hover:rotate-3 shadow-xl">
                    <GiftIcon className="w-10 h-10 text-panda-black animate-wiggle" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-panda-black/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded-md border border-panda-black/10 shadow-sm">
                    Open Me!
                </span>
            </button>
          </div>
        )}
    </>
  );
};

export default CountdownTimer;