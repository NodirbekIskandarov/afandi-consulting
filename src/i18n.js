import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    uz: {
      translation: uz,
    },
    ru: {
      translation: ru,
    },
    de: {
      translation: de,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if the current language is not available
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
