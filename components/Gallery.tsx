import React from 'react';
import { PLACEHOLDER_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 py-12">
      <h2 className="text-3xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-kuromi-pink to-kuromi-purple uppercase tracking-widest drop-shadow-sm">
        Best Sister Moments
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PLACEHOLDER_IMAGES.map((src, index) => (
          <div 
            key={index} 
            className={`
                group relative bg-white p-3 shadow-xl transition-all duration-300 hover:z-10 hover:scale-110
                ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}
            `}
          >
            <div className="overflow-hidden aspect-[3/4] mb-3 bg-gray-200">
              <img 
                src={src} 
                alt={`Memory ${index + 1}`} 
                className="w-full h-full object-cover filter sepia-[.2] contrast-110 group-hover:filter-none transition-all duration-500"
              />
            </div>
            <div className="text-center font-handwriting text-kuromi-black font-bold transform -rotate-1">
                {index === 0 ? "So cute! 🖤" : index === 1 ? "Partners in crime 😈" : index === 2 ? "Besties 4Ever" : "My Idol ✨"}
            </div>
            
            {/* Tape Effect */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm border-l border-r border-white/50 rotate-1 shadow-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
