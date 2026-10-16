import { NAVIGATION_ITEMS, type NavigationItem } from '@/data/portfolio';
import type { Maybe } from '@/models';
import { storeLanguage, type Language } from '@utils/i18n';
import { Languages, Menu, X } from 'lucide-react';
import { useEffect, useState, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';

/**
 * @constant SCROLL_THRESHOLD
 * @description Scroll distance, in pixels, after which the navigation bar becomes opaque
 */
const SCROLL_THRESHOLD = 24;

/**
 * @function NavigationComponent
 * @description Contains the navigation bar of the application, providing links to the sections of the home page and a language toggle
 */
function NavigationComponent(): Maybe<JSX.Element> {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();

    const currentLanguage: string = i18n.resolvedLanguage ?? i18n.language;
    const isEnglish: boolean = currentLanguage.toLowerCase().startsWith('en');
    const isHome: boolean = pathname === '/';

    /**
     * @function toggleLanguage
     * @description Toggles the application's language, and saves the user's preference
     */
    const toggleLanguage = (): void => {
        const newLanguage: Language = isEnglish ? 'fr' : 'en';
        void i18n.changeLanguage(newLanguage);
        storeLanguage(newLanguage);
    };

    /**
     * @function toggleMenu
     * @description Opens or closes the mobile menu
     */
    const toggleMenu = (): void => {
        setIsMenuOpen((previous: boolean) => !previous);
    };

    /**
     * @function closeMenu
     * @description Closes the mobile menu, once a link has been followed
     */
    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isOpaque: boolean = isScrolled || isMenuOpen;

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isOpaque ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'}`}>
            <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8' aria-label={t('nav.label')}>
                {isHome ? (
                    <a href='#hero' onClick={closeMenu} className='font-display text-xl font-bold tracking-tight' aria-label={t('nav.home')}>
                        <span className='text-gradient'>M</span><span className='text-white'>B</span><span className='text-accent'>.</span>
                    </a>
                ) : (
                    <Link to='/' className='font-display text-xl font-bold tracking-tight' aria-label={t('nav.home')}>
                        <span className='text-gradient'>M</span><span className='text-white'>B</span><span className='text-accent'>.</span>
                    </Link>
                )}

                {isHome && (
                    <ul className='hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex'>
                        {NAVIGATION_ITEMS.map((item: NavigationItem) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className='block rounded-full px-4 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white'>
                                    {t(item.labelKey)}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                <div className='flex items-center gap-2'>
                    <button type='button' onClick={toggleLanguage} className='flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/25 hover:text-white' aria-label={t('language.toggle')} title={isEnglish ? 'Français' : 'English'}>
                        <Languages className='h-4 w-4' />
                        <span>{isEnglish ? 'FR' : 'EN'}</span>
                    </button>

                    {isHome && (
                        <button type='button' onClick={toggleMenu} className='flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 md:hidden' aria-label={t(isMenuOpen ? 'nav.close-menu' : 'nav.open-menu')} aria-expanded={isMenuOpen} aria-controls='mobile-menu'>
                            {isMenuOpen ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
                        </button>
                    )}
                </div>
            </nav>

            {isHome && isMenuOpen && (
                <ul id='mobile-menu' className='mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-6 sm:px-8 md:hidden'>
                    {NAVIGATION_ITEMS.map((item: NavigationItem) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} onClick={closeMenu} className='block rounded-xl px-4 py-3 font-display text-lg font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white'>
                                {t(item.labelKey)}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}

export default NavigationComponent;
