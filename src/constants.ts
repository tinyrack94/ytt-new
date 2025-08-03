export const SUPPORTED_LANGUAGE = ["KOREAN", "ENGLISH"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGE)[number];

export const SUPPORTED_LANGUAGES: {
  [key in SupportedLanguage]: {
    NAME: string;
    CODE: string;
    LOCALE: string;
  };
} = {
  KOREAN: {
    NAME: "한국어",
    CODE: "ko",
    LOCALE: "ko-KR",
  },
  ENGLISH: {
    NAME: "English",
    CODE: "en",
    LOCALE: "en-US",
  },
} as const;

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.ENGLISH;
