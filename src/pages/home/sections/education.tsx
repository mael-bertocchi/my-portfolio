import { EDUCATION, type EducationItem } from '@/data/portfolio';
import type { Maybe } from '@/models';
import SectionHeading from '@components/section-heading';
import { MapPin } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeEducationSection
 * @description The component renders a section showcasing the educational background.
 */
function HomeEducationSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='education' className='relative py-24 sm:py-32'>
            <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent' aria-hidden='true'></div>
            <div className='mx-auto max-w-6xl px-5 sm:px-8'>
                <SectionHeading index='05' eyebrow={t('nav.education')} title={t('education.title')} accent={t('education.title-accent')} subtitle={t('education.subtitle')} />

                <div className='grid gap-5 lg:grid-cols-2'>
                    {EDUCATION.map((item: EducationItem) => (
                        <article key={item.key} className='card-surface reveal flex flex-col p-7 hover:border-zinc-300 sm:p-8'>
                            <div className='flex items-start justify-between gap-4'>
                                <img src={item.logo} alt='' className='h-14 w-14 flex-shrink-0 rounded-2xl border border-zinc-200 bg-white object-contain' />
                                <p className='text-right font-mono text-xs tracking-wide text-zinc-500 uppercase'>{t(`education.schools.${item.key}.period`)}</p>
                            </div>

                            <h3 className='mt-6 font-display text-xl font-bold text-zinc-900 sm:text-2xl'>{t(`education.schools.${item.key}.degree`)}</h3>
                            <p className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600'>
                                <span className='font-semibold text-gradient'>{t(`education.schools.${item.key}.school`)}</span>
                                <span className='inline-flex items-center gap-1'>
                                    <MapPin className='h-3.5 w-3.5' />
                                    <span>{t(`education.schools.${item.key}.location`)}</span>
                                </span>
                                {item.current && (
                                    <span className='inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600'>
                                        <span className='h-1.5 w-1.5 rounded-full bg-emerald-500'></span>
                                        <span>{t('common.in-progress')}</span>
                                    </span>
                                )}
                            </p>

                            <p className='mt-5 leading-relaxed text-zinc-600'>{t(`education.schools.${item.key}.description`)}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeEducationSection;
