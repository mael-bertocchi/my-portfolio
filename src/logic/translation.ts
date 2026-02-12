import en from '@locales/en.json';
import fr from '@locales/fr.json';

/**
 * @type Language
 * @description List of supported languages.
 */
export type Language = 'fr' | 'en';

/**
 * @interface Translations
 * @description Structure for translation objects.
 */
export interface Translations {
    [key: string]: string | string[] | Translations;
}

/**
 * @constant STORAGE_KEY
 * @description Key used for storing the preferred language in local storage.
 */
const STORAGE_KEY = 'preferred-language';

/**
 * @class Translation
 * @description Internationalization class to manage translations and language settings.
 */
class Translation {
    private language: Language; /*!< The current language of the application. */

    /**
     * @constructor
     * @description Initializes the translator and sets the language from local storage.
     */
    constructor() {
        this.language = this.getStoredLanguage();
        document.documentElement.lang = this.language;
    }

    /**
     * @function getStoredLanguage
     * @description Retrieves the stored language from local storage.
     *
     * @returns {Language} - The stored or default language.
     */
    private getStoredLanguage(): Language {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (stored !== 'en' && stored !== 'fr') {
            return 'fr';
        }
        return stored;
    }

    /**
     * @function getLanguage
     * @description Get the current language.
     *
     * @returns {Language} - The current language.
     */
    getLanguage(): Language {
        return this.language;
    }

    /**
     * @function setLanguage
     * @description Set the current language and store it in local storage.
     *
     * @param {Language} lang - The language to set.
     */
    setLanguage(lang: Language): void {
        this.language = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
    }

    /**
     * @function toggleLanguage
     * @description Toggle between the supported languages.
     *
     * @returns {Language} - The new language after toggling.
     */
    toggleLanguage(): Language {
        const next: Language = this.language !== 'en' ? 'en' : 'fr';
        this.setLanguage(next);
        return next;
    }

    /**
     * @function t
     * @description Translate a given key into the current language.
     *
     * @param {string} key - The translation key, dot-separated for nested keys.
     * @returns {string} - The translated string or the key if not found.
     */
    t(key: string): string {
        let value: string | string[] | Translations = this.language !== 'en' ? fr : en;
        const keys: string[] = key.split('.');

        for (const k of keys) {
            if (typeof value === 'object' && !Array.isArray(value) && k in value) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return typeof value !== 'string' ? key : value;
    }

    /**
     * @function updateContent
     * @description Update all elements with the attributes to the current language.
     */
    updateContent(): void {
        document.querySelectorAll('[data-translation]').forEach((element: Element) => {
            const key = element.getAttribute('data-translation');
            if (key) {
                element.textContent = this.t(key);
            }
        });

        document.querySelectorAll('[data-translation-placeholder]').forEach((element: Element) => {
            const key = element.getAttribute('data-translation-placeholder');
            if (key && element instanceof HTMLInputElement) {
                element.placeholder = this.t(key);
            }
        });

        document.querySelectorAll('[data-tooltip-key]').forEach((element: Element) => {
            const key = element.getAttribute('data-tooltip-key');
            if (key) {
                element.setAttribute('data-tooltip', this.t(key));
            }
        });

        this.updateLinks();
    }

    /**
     * @function updateLinks
     * @description Update all download links to point to the correct language version.
     */
    private updateLinks(): void {
        const links = document.querySelectorAll('a[data-cv-link]');
        const filename = this.language !== 'en' ? 'cv-mael-bertocchi-fr.pdf' : 'cv-mael-bertocchi-en.pdf';

        links.forEach((link: Element) => {
            if (link instanceof HTMLAnchorElement) {
                const href = link.getAttribute('href');
                if (href) {
                    const newHref = href.replace(/cv-mael-bertocchi-(fr|en)\.pdf/, filename);
                    link.setAttribute('download', filename);
                    link.setAttribute('href', newHref);
                }
            }
        });
    }
}

/**
 * @function startTranslation
 *
 * @description Initializes the translation system.
 */
export function startTranslation(): void {
    const translation = new Translation();

    translation.updateContent();

    const languageToggle = document.getElementById('language-toggle');
    const languageLabel = document.getElementById('language-label');

    if (languageToggle && languageLabel) {
        const updateLanguageLabel = () => {
            const currentLang = translation.getLanguage();
            languageLabel.textContent = currentLang !== 'fr' ? 'Français' : 'English';
        };

        updateLanguageLabel();

        languageToggle.addEventListener('click', () => {
            translation.toggleLanguage();
            translation.updateContent();
            updateLanguageLabel();
        });
    }
}
