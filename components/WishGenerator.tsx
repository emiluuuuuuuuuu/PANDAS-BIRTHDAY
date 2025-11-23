import React, { useState } from 'react';
import { generateHelloKittyWish } from '../services/geminiService';
import { BowIcon } from './Stickers';

const WishGenerator: React.FC = () => {
  const [wish, setWish] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setCopied(false);
    try {
      const generatedWish = await generateHelloKittyWish("sister");
      setWish(generatedWish);
    } catch (err) {
      setError("Kitty is baking a cake... try again in a moment!");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (wish) {
      navigator.clipboard.writeText(wish);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-8">
      <div className="relative bg-white border-2 border-pink-100 rounded-[2rem] p-8 text-center shadow-xl">
        {/* Floating Bow Badge */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-pink-100 p-3 rounded-full border-4 border-white shadow-md">
            <BowIcon className="w-8 h-8 text-pink-400" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2 text-pink-500 font-cute mt-4">
          Kitty's Sweet Wish ✨
        </h3>
        
        <p className="text-pink-400/80 mb-6 font-medium text-sm">
          Click below for a super cute birthday message!
        </p>

        {wish && (
          <div className="relative mb-8 group animate-float">
            <div className="p-6 bg-pink-50 rounded-2xl border border-pink-100">
              <p className="text-lg text-pink-600 leading-relaxed font-body font-semibold">"{wish}"</p>
            </div>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 rounded-full bg-white hover:bg-pink-100 text-pink-400 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-sm"
              title="Copy to clipboard"
            >
              {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        )}

        {error && (
            <div className="mb-6 text-pink-500 text-sm font-bold">{error}</div>
        )}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`
            group relative inline-flex items-center justify-center px-8 py-3 
            overflow-hidden font-bold text-white rounded-full 
            transition-all duration-300 ease-out 
            shadow-lg hover:shadow-pink-300/50
            ${loading ? 'opacity-70 cursor-not-allowed bg-pink-300' : 'hover:scale-105 active:scale-95 bg-gradient-to-r from-pink-400 to-pink-300'}
          `}
        >
          <span className="relative flex items-center gap-2 font-body text-lg">
            {loading ? (
                <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Thinking...</span>
                </>
            ) : (
                <>
                    <BowIcon className="w-5 h-5" />
                    <span>Make a Wish</span>
                </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default WishGenerator;