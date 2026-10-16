import { EXPERTISE, type ExpertiseItem } from '@/data/portfolio';
import type { Maybe } from '@/models';
import SectionHeading from '@components/section-heading';
import { translateList } from '@utils/translation';
import { Check } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeExpertiseSection
 * @description Presents the areas of expertise and the value each one brings, rather than a raw list of tools
 */
function HomeExpertiseSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='expertise' className='relative py-24 sm:py-32'>
            <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' aria-hidden='true'></div>
            <div className='mx-auto max-w-6xl px-5 sm:px-8'>
                <SectionHeading index='02' eyebrow={t('nav.expertise')} title={t('expertise.title')} accent={t('expertise.title-accent')} subtitle={t('expertise.subtitle')} />

                <div className='grid gap-5 md:grid-cols-2'>
                    {EXPERTISE.map((item: ExpertiseItem, index: number) => (
                        <article key={item.key} className='card-surface reveal group relative flex flex-col overflow-hidden p-7 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05] sm:p-9'>
                            <div className='bg-gradient-brand absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25' aria-hidden='true'></div>

                            <div className='mb-8 flex items-start justify-between'>
                                <div className='bg-gradient-brand flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg shadow-accent/30'>
                                    <item.icon className='h-6 w-6' />
                                </div>
                                <span className='font-mono text-sm text-zinc-600'>0{index + 1}</span>
                            </div>

                            <h3 className='font-display text-2xl font-bold text-white'>{t(`expertise.items.${item.key}.title`)}</h3>
                            <p className='mt-3 text-zinc-400 leading-relaxed'>{t(`expertise.items.${item.key}.value`)}</p>

                            <ul className='mt-6 flex-1 space-y-3'>
                                {translateList(t, `expertise.items.${item.key}.outcomes`).map((outcome: string) => (
                                    <li key={outcome} className='flex items-start gap-3 text-sm text-zinc-300'>
                                        <Check className='mt-0.5 h-4 w-4 flex-shrink-0 text-accent' />
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className='mt-8 border-t border-white/10 pt-5 font-mono text-xs tracking-wide text-zinc-500'>
                                {item.tools.join('  ·  ')}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeExpertiseSection;
