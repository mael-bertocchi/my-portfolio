import { PROJECTS, type ProjectItem } from '@/data/portfolio';
import type { Maybe } from '@/models';
import { GithubIcon } from '@components/brand-icons';
import SectionHeading from '@components/section-heading';
import Tag from '@components/tag';
import { translateList } from '@utils/translation';
import { ArrowUpRight } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeProjectSection
 * @description The Projects component renders a section showcasing various projects, including their descriptions.
 */
function HomeProjectSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='projects' className='relative py-24 sm:py-32'>
            <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent' aria-hidden='true'></div>
            <div className='mx-auto max-w-6xl px-5 sm:px-8'>
                <SectionHeading index='04' eyebrow={t('nav.projects')} title={t('projects.title')} accent={t('projects.title-accent')} subtitle={t('projects.subtitle')} />

                <div className='grid gap-5 md:grid-cols-2'>
                    {PROJECTS.map((item: ProjectItem) => (
                        <article key={item.key} className='card-surface reveal group relative flex flex-col p-7 hover:-translate-y-1 hover:border-accent/40 sm:p-9'>
                            <div className='flex items-start justify-between gap-4'>
                                <div>
                                    <p className='font-mono text-xs tracking-wide text-zinc-500 uppercase'>{t(`projects.items.${item.key}.period`)}</p>
                                    <h3 className='mt-2 font-display text-2xl font-bold text-zinc-900 sm:text-3xl'>{t(`projects.items.${item.key}.title`)}</h3>
                                </div>
                                {item.url && (
                                    <a href={item.url} target='_blank' rel='noopener noreferrer' className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-zinc-300 text-zinc-900 transition-all group-hover:border-transparent group-hover:bg-accent group-hover:text-white hover:scale-110' aria-label={`${t(item.linkKind === 'github' ? 'projects.view-github' : 'projects.view-website')} : ${t(`projects.items.${item.key}.title`)}`}>
                                        {item.linkKind === 'github' ? <GithubIcon className='h-5 w-5' /> : <ArrowUpRight className='h-5 w-5' />}
                                    </a>
                                )}
                            </div>

                            <p className='mt-5 flex-1 leading-relaxed text-zinc-600'>{t(`projects.items.${item.key}.description`)}</p>

                            <div className='mt-7 flex flex-wrap gap-2'>
                                {translateList(t, `projects.items.${item.key}.tags`).map((tag: string) => (
                                    <Tag key={tag} label={tag} />
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeProjectSection;
