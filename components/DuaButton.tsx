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
        setIsOpen(true);
        if (!dua) {
            setLoading(true);
            try {
                const result = await generateDua();
                setDua(result);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleRefresh = async () => {
        setLoading(true);
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
        <>
            {/* The Trigger Button */}
            <button 
                onClick={handleGetDua}
                className="w-full h-full group relative flex flex-col items-center justify-center p-6 bg-white border-[3px] border-panda-black rounded-3xl transition-all duration-300 hover:bg-blush-50 active:scale-95 shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] hover:shadow-[6px_6px_0px_0px_rgba(45,45,45,1)] hover:-translate-y-1"
            >
                <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mb-4 border-2 border-panda-black group-hover:scale-110 transition-transform">
                     <HeartIcon className="w-8 h-8 text-blush-500" />
                </div>
                <span className="text-xl md:text-2xl font-bold font-cute text-panda-black">Get a Dua</span>
                <span className="text-sm font-medium text-panda-dark/60 mt-1">Special prayer for you</span>
            </button>

            {/* The Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-panda-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
                    
                    <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 border-[6px] border-panda-black shadow-2xl max-w-2xl w-full animate-float overflow-hidden">
                         
                         {/* Decorative Bamboo */}
                         <div className="absolute -top-6 -left-6 transform -rotate-12 opacity-50">
                            <BambooIcon className="w-24 h-24 text-bamboo-300" />
                         </div>

                         <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blush-100 border-2 border-transparent hover:border-panda-black text-panda-black font-bold transition-all"
                        >
                            ✕
                        </button>

                        <div className="text-center mb-6">
                            <h3 className="text-3xl font-handwritten text-panda-black">Sister's Dua</h3>
                        </div>

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-12 space-y-4">
                                <div className="w-12 h-12 border-4 border-panda-black border-t-bamboo-500 rounded-full animate-spin"></div>
                                <p className="text-panda-black font-cute text-lg animate-pulse">Finding the perfect words... 🐼</p>
                            </div>
                        ) : (
                            dua && (
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-bamboo-50 border-2 border-dashed border-bamboo-300 relative">
                                        <p className="text-2xl md:text-4xl text-center font-bold leading-relaxed text-panda-black font-sans" dir="rtl">
                                            {dua.arabic}
                                        </p>
                                    </div>
                                    
                                    <div className="flex justify-center gap-2 opacity-50">
                                        <div className="w-2 h-2 rounded-full bg-blush-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-blush-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-blush-400"></div>
                                    </div>

                                    <p className="text-lg md:text-xl text-center text-panda-dark font-cute font-medium leading-relaxed italic">
                                        "{dua.english}"
                                    </p>
                                    
                                    {dua.reference && (
                                        <div className="flex justify-center">
                                            <div className="inline-block bg-panda-black text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                                                {dua.reference}
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="pt-4 flex justify-center">
                                        <button 
                                            onClick={handleRefresh}
                                            className="px-6 py-2 rounded-full bg-bamboo-100 hover:bg-bamboo-200 text-bamboo-800 font-bold text-sm transition-colors border border-bamboo-300"
                                        >
                                            Generating another...
                                        </button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default DuaButton;