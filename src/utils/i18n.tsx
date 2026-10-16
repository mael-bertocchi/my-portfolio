import type { Maybe } from '@/models';
import en from '@locales/en.json';
import fr from '@locales/fr.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * @type Language
 * @description Represents a language supported by the application
 */
export type Language = 'en' | 'fr';

/**
 * @constant STORAGE_KEY
 * @description The key used to store the user's preferred language in localStorage
 */
const STORAGE_KEY = 'preferred-language';

/**
 * @constant DEFAULT_LANGUAGE
 * @description The language used when no valid preference has been stored
 */
const DEFAULT_LANGUAGE: Language = 'fr';

/**
 * @constant resources
 * @description The translation resources for the supported languages
 */
const resources = {
    en: { translation: en },
    fr: { translation: fr },
};

/**
 * @function isLanguage
 * @description Type guard checking whether a value is a supported language
 *
 * @param {unknown} value The value to check
 */
export function isLanguage(value: unknown): value is Language {
    return value === 'en' || value === 'fr';
}

/**
 * @function readStoredLanguage
 * @description Reads the stored language preference, ignoring storage access errors (private mode, blocked storage)
 */
function readStoredLanguage(): Maybe<string> {
    try {
        return window.localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
}

/**
 * @function storeLanguage
 * @description Persists the language preference, ignoring storage access errors (private mode, blocked storage)
 *
 * @param {Language} language The language to persist
 */
export function storeLanguage(language: Language): void {
    try {
        window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
        return;
    }
}

/**
 * @function syncDocumentLanguage
 * @description Keeps the lang attribute of the document in sync with the active language, for accessibility and SEO
 *
 * @param {string} language The active language
 */
function syncDocumentLanguage(language: string): void {
    document.documentElement.lang = language;
}

/**
 * @constant storedLanguage
 * @description The user's stored language preference, if any
 */
const storedLanguage: Maybe<string> = readStoredLanguage();

/**
 * @constant initialLanguage
 * @description The language the application starts with
 */
const initialLanguage: Language = isLanguage(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;

i18n.on('languageChanged', syncDocumentLanguage);

void i18n.use(initReactI18next).init({
    resources,
    lng: initialLanguage,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: ['en', 'fr'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
        escapeValue: false,
    },
});

syncDocumentLanguage(initialLanguage);

export default i18n;
