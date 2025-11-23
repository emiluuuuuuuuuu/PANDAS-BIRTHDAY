export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export enum GeminiModel {
  FLASH = 'gemini-2.5-flash',
}

export interface WishResponse {
  message: string;
}
