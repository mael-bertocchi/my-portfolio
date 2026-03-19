import type { Maybe } from '@/models';
import { Globe } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

/**
 * @interface NavigationItem
 * @description Represents a navigation item in the navigation bar, containing an id and a label for the corresponding section of the page.
 */
interface NavigationItem {
    id: string; /*!< The unique identifier for the navigation item, corresponding to the id of the section it links to. */
    labelKey: string; /*!< Translation key for the navigation label. */
}

/**
 * @function NavigationComponent
 * @description Contains the navigation bar of the application, providing links to different sections and a language toggle button.
 */
function NavigationComponent(): Maybe<JSX.Element> {
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();

    const currentLanguage: string = i18n.resolvedLanguage ?? i18n.language;
    const isEnglish: boolean = currentLanguage.toLowerCase().startsWith('en');

    /**
     * @function toggleLanguage
     * @description Toggles the application's language, and saves the user's preference.
     */
    const toggleLanguage = (): void => {
        const newLanguage = isEnglish ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
        localStorage.setItem('preferred-language', newLanguage);
    };

    /**
     * @constant navItems
     * @description An array of navigation items, each containing an id and a label for the corresponding section of the page.
     */
    const navItems: NavigationItem[] = [
        { id: 'about', labelKey: 'nav.about' },
        { id: 'experience', labelKey: 'nav.experience' },
        { id: 'education', labelKey: 'nav.education' },
        { id: 'skills', labelKey: 'nav.skills' },
        { id: 'projects', labelKey: 'nav.projects' },
        { id: 'contact', labelKey: 'nav.contact' },
    ];

    /**
     * @function scrollToSection
     * @description Scrolls smoothly to the specified section of the page when a navigation item is clicked.
     *
     * @param {string} id The id of the section to scroll to.
     */
    const scrollToSection = (id: string): void => {
        const element: Maybe<HTMLElement> = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-bold" aria-label="Home">
                        <span className="text-[#821b29]">M</span><span className="text-gray-900">B</span>
                    </Link>

                    {pathname !== '/legal' && (
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item: NavigationItem) => (
                                <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100">
                                    {t(item.labelKey)}
                                </button>
                            ))}
                        </div>
                    )}

                    <button onClick={toggleLanguage} className="ml-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100 border border-gray-300 flex items-center gap-2" aria-label="Toggle language" title={isEnglish ? 'Français' : 'English'}>
                        <Globe className="h-4 w-4" />
                        <span className="hidden sm:inline">{t('language.name')}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavigationComponent;
