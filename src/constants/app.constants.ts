export const ROUTES = {
  HOME: '/',
  QUESTION: '/question',
  TIRED: '/tired',
  SUCCESS: '/success',
} as const;

const NAME = import.meta.env.VITE_NAME || 'Дими';

export const MESSAGES = {
  GREETING: `Здравей ${NAME}`,
  HOW_ARE_YOU: 'Как си?',
  QUESTION: 'Ще бъдеш ли моята валентинка?',
  QUESTION_REPEAT: 'Сигурна ли си: Искаш ли да бъдеш моята валентинка?',
  TIRED_TEXT: 'Горкото, Нека сега те разведрим',
  SUCCESS: 'Ура! 🎉💝',
  SUCCESS_MESSAGE: 'Знаех, че ще кажеш ДА! 💕',
} as const;

export const BUTTON_LABELS = {
  SUPER: 'Супер',
  TIRED: 'Уморена',
  YES: 'Да',
  NO: 'Не',
} as const;
