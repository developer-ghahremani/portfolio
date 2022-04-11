import { initReactI18next, useTranslation } from "react-i18next";

import en from "./en";
import fa from "./fa";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: en,
    },
    fa: {
      translation: fa,
    },
  },
});

export default i18n;
export const useI18Next = () => useTranslation();
