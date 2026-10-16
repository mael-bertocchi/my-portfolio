import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

/**
 * @function NotFoundPage
 * @description Displays a 404 Not Found page when users navigate to a route that doesn't exist.
 */
function NotFoundPage(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="px-10 sm:px-14 md:px-18 lg:px-22 py-20 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-200 mb-4">404</h1>
                    <div className="inline-block relative mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                            <span>{t('notfound.title')}</span> <span className="text-accent">{t('notfound.title-accent')}</span>
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></div>
                    </div>
                </div>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    {t('notfound.description')}
                </p>

                <Link to="/" className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                    {t('notfound.back-home')}
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
