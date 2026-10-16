import { EXPERIENCES, type ExperienceItem } from '@/data/portfolio';
import type { Maybe } from '@/models';
import SectionHeading from '@components/section-heading';
import Tag from '@components/tag';
import { translateList } from '@utils/translation';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeExperienceSection
 * @description The component renders a section showcasing the user's professional experience.
 */
function HomeExperienceSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='experience' className='relative py-24 sm:py-32'>
            <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent' aria-hidden='true'></div>
            <div className='mx-auto max-w-6xl px-5 sm:px-8'>
                <SectionHeading index='03' eyebrow={t('nav.experience')} title={t('experience.title')} accent={t('experience.title-accent')} subtitle={t('experience.subtitle')} />

                <ol className='relative space-y-6 md:before:absolute md:before:top-2 md:before:bottom-2 md:before:left-[13.5rem] md:before:w-px md:before:bg-gradient-to-b md:before:from-accent/60 md:before:via-zinc-200 md:before:to-transparent'>
                    {EXPERIENCES.map((item: ExperienceItem) => (
                        <li key={item.key} className='reveal relative grid gap-4 md:grid-cols-[12rem_1fr] md:gap-12'>
                            <div className='hidden pt-7 text-right md:block'>
                                <p className='font-mono text-xs tracking-wide text-zinc-500 uppercase'>{t(`experience.jobs.${item.key}.period`)}</p>
                            </div>

                            <article className='card-surface group relative p-6 hover:border-zinc-300 sm:p-8'>
                                <span className='absolute top-8 -left-[1.875rem] hidden h-3 w-3 rounded-full bg-accent ring-4 ring-paper md:block' aria-hidden='true'></span>

                                <div className='flex items-start gap-4'>
                                    <img src={item.logo} alt='' className='h-12 w-12 flex-shrink-0 rounded-xl border border-zinc-200 bg-white object-cover' />
                                    <div className='min-w-0 flex-1'>
                                        <h3 className='font-display text-xl font-bold text-zinc-900 sm:text-2xl'>{t(`experience.jobs.${item.key}.title`)}</h3>
                                        <p className='mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600'>
                                            <span className='font-semibold text-zinc-800'>{t(`experience.jobs.${item.key}.company`)}</span>
                                            <span className='inline-flex items-center gap-1'>
                                                <MapPin className='h-3.5 w-3.5' />
                                                <span>{t(`experience.jobs.${item.key}.location`)}</span>
                                            </span>
                                        </p>
                                        <p className='mt-2 font-mono text-xs tracking-wide text-zinc-500 uppercase md:hidden'>{t(`experience.jobs.${item.key}.period`)}</p>
                                    </div>
                                </div>

                                <p className='mt-6 leading-relaxed text-zinc-700'>{t(`experience.jobs.${item.key}.description`)}</p>

                                <ul className='mt-5 space-y-2.5'>
                                    {translateList(t, `experience.jobs.${item.key}.tasks`).map((task: string) => (
                                        <li key={task} className='flex items-start gap-3 text-sm leading-relaxed text-zinc-600'>
                                            <ArrowUpRight className='mt-0.5 h-4 w-4 flex-shrink-0 text-accent' />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className='mt-6 flex flex-wrap gap-2'>
                                    {translateList(t, `experience.jobs.${item.key}.tags`).map((tag: string) => (
                                        <Tag key={tag} label={tag} />
                                    ))}
                                </div>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default HomeExperienceSection;
