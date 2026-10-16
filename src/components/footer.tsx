import type { Maybe } from '@/models';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';

/**
 * @constant CURRENT_YEAR
 * @description A constant that holds the current year.
 */
const CURRENT_YEAR = new Date().getFullYear();

/**
 * @function FooterComponent
 * @description Renders the footer of the website, with copyright information and a link to the legal notice page (or back home outside of it)
 */
function FooterComponent(): Maybe<JSX.Element> {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const isHome: boolean = pathname === '/';

    return (
        <footer className='border-t border-zinc-200 bg-paper'>
            <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8'>
                <p className='text-sm text-zinc-500'>© {CURRENT_YEAR} Maël Bertocchi. <span>{t('footer.rights')}</span></p>
                <Link to={isHome ? '/legal' : '/'} className='text-sm text-zinc-500 transition-colors hover:text-zinc-900'>
                    {isHome ? t('footer.legal-notice') : t('legal.back-to-home')}
                </Link>
            </div>
        </footer>
    );
};

export default FooterComponent;
