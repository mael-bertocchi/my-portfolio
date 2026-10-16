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
 * @description Renders the footer of the website, which includes copyright information and a link to the legal notice page. The content and styling of the footer can be adjusted based on whether it is rendered on the legal notice page or not, using the 'isLegal' prop.
 */
function FooterComponent(): Maybe<JSX.Element> {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const isLegalPage: boolean = pathname !== '/';

    return (
        <footer className='bg-gray-50 py-6'>
            <div className='max-w-7xl mx-auto px-10 sm:px-14 md:px-18 lg:px-22'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                    <p className='text-sm text-gray-600'>© {CURRENT_YEAR} Maël Bertocchi. <span>{t('footer.rights')}</span></p>
                    <Link to={isLegalPage ? '/' : '/legal'} className='text-sm text-gray-600 hover:text-accent transition-colors duration-200'>
                        {isLegalPage ? t('legal.back-to-home') : t('footer.legal-notice')}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
