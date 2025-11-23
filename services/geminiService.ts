import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from '../types';

let ai: GoogleGenAI | null = null;

const getAIInstance = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

// Generates a Hello Kitty styled birthday wish (Legacy - kept for type safety if needed, but unused in new design)
export const generateHelloKittyWish = async (relationship: string): Promise<string> => {
  return "Happy Birthday! 🎀";
};

// Generates a Dua from the Quran
export const generateDua = async (): Promise<{arabic: string, english: string, reference?: string}> => {
  try {
    const aiInstance = getAIInstance();
    const model = GeminiModel.FLASH;

    const prompt = `
      Provide one beautiful, comforting, and authentic Dua (supplication) from the Holy Quran specifically suitable for wishing goodness, barakah, protection, or happiness for a beloved sister.
      
      Return ONLY valid JSON with this structure:
      {
        "arabic": "The Arabic text of the verse (include tashkeel/vowels)",
        "english": "The English translation of the verse",
        "reference": "The Surah Name and Verse number"
      }
      Do not add any markdown formatting.
    `;

    const response = await aiInstance.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    
    return JSON.parse(text);

  } catch (error) {
    console.error("Error generating dua:", error);
    // Fallback Dua if API fails
    return {
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        english: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
        reference: "Al-Baqarah 2:201"
    };
  }
};