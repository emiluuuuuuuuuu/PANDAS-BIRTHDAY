import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import DuaButton from './components/DuaButton';
import { BackgroundDecorations, PandaIcon, CakeIcon } from './components/Stickers';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col font-cute">
      <BackgroundDecorations />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4">
        
        {/* Hero Section */}
        <section className="w-full flex flex-col justify-center items-center pt-20 pb-10 text-center">
          
          <div className="relative mb-6 group cursor-pointer">
             <div className="absolute inset-0 bg-bamboo-300 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
             <PandaIcon className="relative w-40 h-40 md:w-56 md:h-56 animate-bounce-slow drop-shadow-xl" />
          </div>

          <div className="relative inline-block mb-10">
            <h1 className="text-5xl md:text-7xl font-handwritten text-panda-black transform -rotate-2 z-10 relative">
              Happy Birthday!
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-blush-300 -z-0 opacity-60 rounded-full transform rotate-1"></div>
          </div>

          <CountdownTimer />

          {/* Fun Cake Section */}
          <div className="mt-10 relative group cursor-pointer" title="Make a wish!">
             <div className="absolute inset-0 bg-gradient-to-t from-blush-100 to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
             <CakeIcon className="relative w-32 h-32 md:w-40 md:h-40 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-3 drop-shadow-xl" />
             <div className="absolute -top-6 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce delay-100">
                <span className="text-2xl">✨</span>
             </div>
             <div className="absolute top-10 -left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce delay-75">
                <span className="text-2xl">🎋</span>
             </div>
          </div>
        </section>

        {/* Dua Section */}
        <section className="w-full pb-24">
            <DuaButton />
        </section>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-panda-black/40 text-sm font-bold tracking-widest absolute bottom-0">
            <p>Made with 🖤 and Bamboo</p>
        </footer>
      </main>
    </div>
  );
};

export default App;