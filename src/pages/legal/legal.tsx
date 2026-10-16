import { translateList } from '@utils/translation';
import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @constant LEGAL_SECTIONS
 * @description Keys of the legal notice sections, in display order
 */
const LEGAL_SECTIONS: string[] = [
    'publisher',
    'hosting',
    'intellectual-property',
    'personal-data',
    'cookies',
    'external-links',
    'liability',
    'applicable-law',
];

/**
 * @function LegalPage
 * @description Contains the legal notice page, which informs users about the legal aspects of the website.
 */
function LegalPage(): JSX.Element {
    const { t } = useTranslation();

    return (
        <main className='px-5 pt-36 pb-24 sm:px-8'>
            <div className='mx-auto max-w-3xl'>
                <h1 className='mb-14 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl'>
                    <span>{t('legal.title')}</span> <span className='text-gradient'>{t('legal.title-accent')}</span>
                </h1>

                <div className='space-y-10'>
                    {LEGAL_SECTIONS.map((key: string, index: number) => (
                        <section key={key}>
                            <h2 className='mb-4 flex items-baseline gap-3 font-display text-xl font-bold text-zinc-900 sm:text-2xl'>
                                <span className='font-mono text-sm text-accent'>{String(index + 1).padStart(2, '0')}</span>
                                <span>{t(`legal.sections.${key}.title`)}</span>
                            </h2>
                            <div className='space-y-4 leading-relaxed text-zinc-600'>
                                {translateList(t, `legal.sections.${key}.content`).map((paragraph: string) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default LegalPage;
