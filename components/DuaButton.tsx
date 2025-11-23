import React, { useState } from 'react';
import { generateDua } from '../services/geminiService';
import { HeartIcon, BambooIcon } from './Stickers';

interface DuaData {
    arabic: string;
    english: string;
    reference?: string;
}

const DuaButton: React.FC = () => {
    const [dua, setDua] = useState<DuaData | null>(null);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleGetDua = async () => {
        setLoading(true);
        setIsOpen(true);
        try {
            const result = await generateDua();
            setDua(result);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto my-8 text-center px-4 relative z-20">
            
            {!isOpen && (
                 <button 
                 onClick={handleGetDua}
                 className="
                    group relative inline-block
                    transform transition-transform duration-300 hover:scale-105 active:scale-95
                 "
             >
                 {/* Button Shadow */}
                 <div className="absolute top-2 left-2 w-full h-full bg-panda-black rounded-full"></div>
                 
                 {/* Main Button */}
                 <div className="relative bg-white border-4 border-panda-black text-panda-black font-cute font-bold text-xl md:text-2xl py-5 px-8 rounded-full flex items-center gap-3">
                    <HeartIcon className="w-6 h-6 text-blush-500 animate-bounce" />
                    <span>A beautiful dua for my beautiful sister</span>
                    <HeartIcon className="w-6 h-6 text-blush-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
                 </div>
             </button>
            )}

            {isOpen && (
                <div className="relative bg-white rounded-[2rem] p-8 md:p-10 border-[6px] border-panda-black shadow-[8px_8px_0px_0px_rgba(45,45,45,1)] max-w-2xl mx-auto animate-float">
                     
                     {/* Decorative Bamboo */}
                     <div className="absolute -top-6 -left-6 transform -rotate-12">
                        <BambooIcon className="w-16 h-16 text-bamboo-500" />
                     </div>

                     <button 
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blush-100 text-panda-black font-bold transition-colors"
                    >
                        ✕
                    </button>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10 space-y-4">
                            <div className="w-12 h-12 border-4 border-panda-black border-t-bamboo-500 rounded-full animate-spin"></div>
                            <p className="text-panda-black font-cute text-lg">Asking nicely... 🐼</p>
                        </div>
                    ) : (
                        dua && (
                            <div className="space-y-8">
                                <div className="p-6 rounded-3xl bg-bamboo-100/50 border-2 border-dashed border-bamboo-300">
                                    <p className="text-3xl md:text-4xl text-center font-handwritten leading-relaxed text-panda-black" dir="rtl">
                                        {dua.arabic}
                                    </p>
                                </div>
                                
                                <div className="flex justify-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blush-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-blush-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-blush-400"></div>
                                </div>

                                <p className="text-lg md:text-xl text-panda-dark font-cute font-medium leading-relaxed">
                                    "{dua.english}"
                                </p>
                                
                                {dua.reference && (
                                    <div className="inline-block bg-panda-black text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                                        {dua.reference}
                                    </div>
                                )}
                                
                                <div className="pt-4">
                                    <button 
                                        onClick={handleGetDua}
                                        className="text-bamboo-700 hover:text-bamboo-500 font-bold underline decoration-wavy underline-offset-4"
                                    >
                                        Read another one?
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default DuaButton;