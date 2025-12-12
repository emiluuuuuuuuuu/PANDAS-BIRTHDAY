import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { TARGET_DATE } from '../constants';

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
  <div className="flex flex-col items-center flex-1 min-w-[60px]">
    <div className="relative group w-full aspect-square max-w-[100px]">
      {/* Cute Shadow Blob */}
      <div className="absolute top-1 left-1 w-full h-full bg-panda-black rounded-2xl opacity-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
      
      <div className="relative w-full h-full bg-white border-[3px] md:border-4 border-panda-black rounded-2xl flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
        <span className="text-2xl md:text-5xl font-bold text-panda-black font-cute">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
    </div>
    <span className="mt-2 text-xs md:text-sm font-bold uppercase tracking-wider text-panda-black/70 font-cute bg-bamboo-100 px-2 py-1 rounded-full">
      {label}
    </span>
  </div>
);

interface CountdownTimerProps {
    onBirthday?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ onBirthday }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const calculated = calculateTimeLeft();
      setTimeLeft(calculated);
      
      if (calculated.days === 0 && calculated.hours === 0 && calculated.minutes === 0 && calculated.seconds === 0) {
        setIsBirthday(true);
        if (onBirthday) onBirthday();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onBirthday]);

  if (isBirthday) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-white/50 rounded-3xl border-4 border-panda-black border-dashed p-6">
            <h2 className="text-4xl md:text-5xl font-handwritten text-panda-black transform -rotate-2 animate-bounce-slow">
                It's Party Time! 🎂
            </h2>
        </div>
      );
  }

  return (
    <div className="flex justify-between items-center w-full gap-2 md:gap-4 px-2">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-2xl md:text-4xl font-black text-bamboo-500 pb-6 animate-pulse">:</span>
      <TimeUnit value={timeLeft.hours} label="Hrs" />
      <span className="text-2xl md:text-4xl font-black text-bamboo-500 pb-6 animate-pulse">:</span>
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <span className="text-2xl md:text-4xl font-black text-bamboo-500 pb-6 animate-pulse">:</span>
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;