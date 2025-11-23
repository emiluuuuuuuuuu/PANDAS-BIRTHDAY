export const BIRTHDAY_MONTH = 0; // January is 0
export const BIRTHDAY_DAY = 22;

// Calculate next birthday
const today = new Date();
let targetYear = today.getFullYear();
const currentBirthday = new Date(targetYear, BIRTHDAY_MONTH, BIRTHDAY_DAY);

if (today > currentBirthday) {
  targetYear += 1;
}

export const TARGET_DATE = new Date(targetYear, BIRTHDAY_MONTH, BIRTHDAY_DAY);

export const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464349153912-bc6163bd89a7?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=2070&auto=format&fit=crop'
];