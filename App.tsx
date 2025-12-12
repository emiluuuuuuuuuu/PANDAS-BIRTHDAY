import React, { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import DuaButton from './components/DuaButton';
import { BirthdayPopup } from './components/BirthdayPopup';
import { BackgroundDecorations, PandaIcon, GiftIcon } from './components/Stickers';

const App: React.FC = () => {
  const [showBirthdayPopup, setShowBirthdayPopup] = useState(false);

  return (
    <div className="h-full w-full relative overflow-hidden flex items-center justify-center font-cute p-4 md:p-8">
      <BackgroundDecorations />
      
      {/* Main Glass Card Container */}
      <div className="relative z-10 w-full max-w-5xl bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden h-auto max-h-full">
        
        {/* Left Side: Visual Header */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-bamboo-100 to-panda-cream p-8 flex flex-col items-center justify-center text-center relative overflow-hidden border-b md:border-b-0 md:border-r border-white/50">
           {/* Decorative Blobs */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-bamboo-300 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-blush-300 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
           
           <div className="relative z-10">
              <div className="mb-6 relative group cursor-pointer" onClick={() => setShowBirthdayPopup(true)}>
                  <div className="absolute inset-0 bg-white/60 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                  <PandaIcon className="relative w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl animate-float" />
                  <div className="absolute bottom-2 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm transform rotate-6 border border-gray-100">Click me!</div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-handwritten text-panda-black leading-tight transform -rotate-2">
                Happy <br/>
                <span className="text-bamboo-500">Birthday!</span>
              </h1>
              <div className="mt-4 w-16 h-2 bg-panda-black rounded-full opacity-10 mx-auto"></div>
           </div>
        </div>

        {/* Right Side: Dashboard Controls */}
        <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center gap-6 md:gap-8 bg-white/30">
           
           {/* Timer Section */}
           <div className="bg-white/60 rounded-[2rem] p-6 border border-white/80 shadow-sm relative group hover:shadow-md transition-shadow">
              <div className="absolute -top-3 left-6 bg-panda-black text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">COUNTDOWN</div>
              <CountdownTimer onBirthday={() => setShowBirthdayPopup(true)} />
           </div>

           {/* Action Grid */}
           <div className="grid grid-cols-2 gap-4 h-full min-h-[180px]">
              
              {/* Surprise Button */}
              <button 
                onClick={() => setShowBirthdayPopup(true)}
                className="group relative w-full h-full bg-panda-black rounded-3xl p-6 text-white flex flex-col items-center justify-center overflow-hidden transition-transform active:scale-95 hover:shadow-xl"
              >
                  <div className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <GiftIcon className="w-16 h-16 mb-4 text-bamboo-300 relative z-10 animate-wiggle" />
                  <span className="text-2xl font-handwritten relative z-10">Surprise!</span>
                  <span className="text-xs font-bold opacity-60 mt-1 uppercase tracking-widest relative z-10">Open Gift</span>
                  
                  {/* Confetti Decors */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
                  <div className="absolute bottom-4 right-2 w-3 h-3 bg-blush-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-200"></div>
              </button>

              {/* Dua Button */}
              <DuaButton />
           </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="absolute bottom-2 text-panda-black/30 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
        Made with 🖤 & Bamboo
      </footer>

      {/* Global Modals */}
      {showBirthdayPopup && <BirthdayPopup onClose={() => setShowBirthdayPopup(false)} />}
    </div>
  );
};

export default App;