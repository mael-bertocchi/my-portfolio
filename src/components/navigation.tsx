import { NAVIGATION_ITEMS, type NavigationItem } from '@/data/portfolio';
import type { Maybe, Perhaps } from '@/models';
import { storeLanguage, type Language } from '@utils/i18n';
import { Languages, Menu, X } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';

/**
 * @constant SCROLL_THRESHOLD
 * @description Scroll distance, in pixels, after which the navigation bar becomes opaque
 */
const SCROLL_THRESHOLD = 24;

/**
 * @constant ACTIVE_SECTION_OFFSET
 * @description Distance, in pixels, from the top of the viewport at which a section is considered as the one being read
 */
const ACTIVE_SECTION_OFFSET = 120;

/**
 * @constant LOGO_CLASS_NAME
 * @description Rounded tile holding the logo, matching the favicon
 */
const LOGO_CLASS_NAME = 'flex h-9 w-9 items-center justify-center rounded-[10px] border border-zinc-200 bg-white font-display text-xl font-bold shadow-sm';

/**
 * @interface Indicator
 * @description Position of the pill highlighting the section being read, relative to the navigation list
 */
interface Indicator {
    left: number; /*!< Offset from the left edge of the list, in pixels */
    width: number; /*!< Width of the highlighted item, in pixels */
}

/**
 * @function getActiveSection
 * @description Returns the identifier of the section currently being read, if any
 */
function getActiveSection(): Maybe<string> {
    const isAtBottom: boolean = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (isAtBottom) {
        return NAVIGATION_ITEMS[NAVIGATION_ITEMS.length - 1].id;
    }
    let activeSection: Maybe<string> = null;

    for (const item of NAVIGATION_ITEMS) {
        const section: Maybe<HTMLElement> = document.getElementById(item.id);

        if (section && section.getBoundingClientRect().top <= ACTIVE_SECTION_OFFSET) {
            activeSection = item.id;
        }
    }
    return activeSection;
}

/**
 * @function NavigationComponent
 * @description Contains the navigation bar of the application, providing links to the sections of the home page and a language toggle
 */
function NavigationComponent(): Maybe<JSX.Element> {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<Maybe<string>>(null);
    const [indicator, setIndicator] = useState<Maybe<Indicator>>(null);
    const listRef = useRef<Maybe<HTMLUListElement>>(null);

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
        setIsMenuOpen((previous: boolean): boolean => !previous);
    };

    /**
     * @function closeMenu
     * @description Closes the mobile menu, once a link has been followed
     */
    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    useEffect((): (() => void) => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
            setActiveSection(isHome ? getActiveSection() : null);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return (): void => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isHome]);

    useLayoutEffect((): (() => void) => {
        const updateIndicator = (): void => {
            const item: Maybe<HTMLLIElement> = activeSection ? listRef.current?.querySelector<HTMLLIElement>(`[data-section='${activeSection}']`) ?? null : null;
            setIndicator(item ? { left: item.offsetLeft, width: item.offsetWidth } : null);
        };

        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return (): void => {
            window.removeEventListener('resize', updateIndicator);
        };
    }, [activeSection, currentLanguage]);

    const isOpaque: boolean = isScrolled || isMenuOpen;
    const indicatorStyle: Perhaps<CSSProperties> = indicator ? { left: indicator.left, width: indicator.width } : undefined;

    /**
     * @function getDesktopLinkClassName
     * @description Returns the classes of a desktop navigation link, white over the sliding pill when its section is being read
     *
     * @param {string} id The identifier of the link's section
     */
    const getDesktopLinkClassName = (id: string): string => {
        const stateClassName: string = activeSection === id ? 'text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900';
        return `block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${stateClassName}`;
    };

    /**
     * @function getMobileLinkClassName
     * @description Returns the classes of a mobile menu link, highlighted when its section is being read
     *
     * @param {string} id The identifier of the link's section
     */
    const getMobileLinkClassName = (id: string): string => {
        const stateClassName: string = activeSection === id ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-700';
        return `block rounded-xl px-4 py-3 font-display text-lg font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 ${stateClassName}`;
    };

    /**
     * @function getAriaCurrent
     * @description Marks the link of the section being read for assistive technologies
     *
     * @param {string} id The identifier of the link's section
     */
    const getAriaCurrent = (id: string): Perhaps<'location'> => {
        return activeSection === id ? 'location' : undefined;
    };

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isOpaque ? 'border-b border-zinc-200 bg-paper/85 backdrop-blur-xl' : 'border-b border-transparent'}`}>
            <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8' aria-label={t('nav.label')}>
                {isHome ? (
                    <a href='#hero' onClick={closeMenu} className={LOGO_CLASS_NAME} aria-label={t('nav.home')}>
                        <span className='text-gradient'>M</span>
                    </a>
                ) : (
                    <Link to='/' className={LOGO_CLASS_NAME} aria-label={t('nav.home')}>
                        <span className='text-gradient'>M</span>
                    </Link>
                )}

                {isHome && (
                    <ul ref={listRef} className='relative hidden items-center gap-1 rounded-full border border-zinc-200 bg-white p-1 md:flex'>
                        <li aria-hidden='true' className={`pointer-events-none absolute top-1 bottom-1 rounded-full bg-zinc-900 transition-all duration-300 ease-out ${indicator ? 'opacity-100' : 'opacity-0'}`} style={indicatorStyle} />
                        {NAVIGATION_ITEMS.map((item: NavigationItem): JSX.Element => (
                            <li key={item.id} data-section={item.id} className='relative'>
                                <a href={`#${item.id}`} aria-current={getAriaCurrent(item.id)} className={getDesktopLinkClassName(item.id)}>
                                    {t(item.labelKey)}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                <div className='flex items-center gap-2'>
                    <button type='button' onClick={toggleLanguage} className='flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900' aria-label={t('language.toggle')} title={isEnglish ? 'Français' : 'English'}>
                        <Languages className='h-4 w-4' />
                        <span>{isEnglish ? 'FR' : 'EN'}</span>
                    </button>

                    {isHome && (
                        <button type='button' onClick={toggleMenu} className='flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 md:hidden' aria-label={t(isMenuOpen ? 'nav.close-menu' : 'nav.open-menu')} aria-expanded={isMenuOpen} aria-controls='mobile-menu'>
                            {isMenuOpen ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
                        </button>
                    )}
                </div>
            </nav>

            {isHome && isMenuOpen && (
                <ul id='mobile-menu' className='mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-6 sm:px-8 md:hidden'>
                    {NAVIGATION_ITEMS.map((item: NavigationItem): JSX.Element => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} onClick={closeMenu} aria-current={getAriaCurrent(item.id)} className={getMobileLinkClassName(item.id)}>
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
