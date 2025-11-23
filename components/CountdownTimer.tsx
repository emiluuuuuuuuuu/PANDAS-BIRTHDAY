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

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const calculated = calculateTimeLeft();
      setTimeLeft(calculated);
      
      if (calculated.days === 0 && calculated.hours === 0 && calculated.minutes === 0 && calculated.seconds === 0) {
        setIsBirthday(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isBirthday) {
    return (
      <div className="text-center animate-bounce-slow py-10">
        <h1 className="text-5xl md:text-7xl text-panda-black mb-6 font-handwritten transform -rotate-3">
          Happy Birthday!
        </h1>
        <p className="text-xl text-panda-dark font-cute bg-blush-100 inline-block px-6 py-2 rounded-full border-2 border-panda-black border-dashed">
          Have a panda-stic day! 🐼🎋
        </p>
      </div>
    );
  }

  return (
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
    </div>
  );
};

export default CountdownTimer;