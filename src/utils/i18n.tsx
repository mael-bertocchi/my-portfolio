import en from '@locales/en.json';
import fr from '@locales/fr.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * @constant STORAGE_KEY
 * @description The key used to store the user's preferred language in localStorage. This allows the application to remember the user's language choice across sessions.
 */
const STORAGE_KEY = 'preferred-language';

/**
 * @constant resources
 * @description An object containing the translation resources for the supported languages. Each language is represented as a key (e.g., 'en' for English, 'fr' for French) with a nested 'translation' object that holds the actual translation key-value pairs.
 */
const resources = {
    en: { translation: en },
    fr: { translation: fr },
};

/**
 * @constant savedLanguage
 * @description Retrieves the user's preferred language from localStorage using the defined STORAGE_KEY. If a valid language is found (either 'en' or 'fr'), it will be used as the default language for the application. If no valid language is found, the application defaults to French ('fr').
 */
const savedLanguage = localStorage.getItem(STORAGE_KEY);

/**
 * @constant defaultLanguage
 * @description Determines the default language for the application based on the value retrieved from localStorage. If the saved language is not 'en' or 'fr', it defaults to 'fr'. This ensures that the application has a valid language setting even if the user has not explicitly chosen one or if an invalid value is stored in localStorage.
 */
const defaultLanguage = (savedLanguage !== 'en' && savedLanguage !== 'fr') ? 'fr' : savedLanguage;

i18n.use(initReactI18next).init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'fr',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
