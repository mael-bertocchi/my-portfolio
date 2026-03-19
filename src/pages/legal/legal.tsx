import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function LegalPage
 * @description Contains the legal notice page, which informs users about the legal aspects of the website.
 */
function LegalPage(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="px-10 sm:px-14 md:px-18 lg:px-22 py-20 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block relative">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            <span>{t('legal.title')}</span> <span className="text-accent">{t('legal.title-accent')}</span>
                        </h1>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            1. {t('legal.sections.publisher.title')}
                        </h2>
                        <p className="text-gray-600">
                            {t('legal.sections.publisher.content')}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            2. {t('legal.sections.hosting.title')}
                        </h2>
                        <p className="text-gray-600">
                            {t('legal.sections.hosting.content')}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            3. {t('legal.sections.intellectual-property.title')}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {t('legal.sections.intellectual-property.content.0')}
                        </p>
                        <p className="text-gray-600">
                            {t('legal.sections.intellectual-property.content.1')}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            4. {t('legal.sections.personal-data.title')}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {t('legal.sections.personal-data.content.0')}
                        </p>
                        <p className="text-gray-600 mb-4">
                            {t('legal.sections.personal-data.content.1')}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            5. {t('legal.sections.cookies.title')}
                        </h2>
                        <p className="text-gray-600">
                            {t('legal.sections.cookies.content')}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            6. {t('legal.sections.external-links.title')}
                        </h2>
                        <p className="text-gray-600">
                            {t('legal.sections.external-links.content')}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            7. {t('legal.sections.liability.title')}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {t('legal.sections.liability.content.0')}
                        </p>
                        <p className="text-gray-600">
                            {t('legal.sections.liability.content.1')}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            8. {t('legal.sections.applicable-law.title')}
                        </h2>
                        <p className="text-gray-600">
                            {t('legal.sections.applicable-law.content')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
