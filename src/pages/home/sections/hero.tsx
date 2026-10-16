import { EXPERIENCES, PROJECTS, SOCIAL_LINKS } from '@/data/portfolio';
import type { Maybe } from '@/models';
import { GithubIcon, LinkedinIcon } from '@components/brand-icons';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @interface HeroStat
 * @description Represents a key figure displayed under the hero
 */
interface HeroStat {
    value: string; /*!< The figure itself */
    labelKey: string; /*!< Translation key of the caption */
}

/**
 * @constant HERO_STATS
 * @description Key figures displayed under the hero, derived from the portfolio data
 */
const HERO_STATS: HeroStat[] = [
    { value: `${EXPERIENCES.length}`, labelKey: 'hero.stats.experiences' },
    { value: `${PROJECTS.length}`, labelKey: 'hero.stats.projects' },
    { value: 'FR · EN', labelKey: 'hero.stats.languages' },
];

/**
 * @function HomeHeroSection
 * @description The component is the main hero section of the homepage.
 */
function HomeHeroSection(): Maybe<JSX.Element> {
    const { t, i18n } = useTranslation();

    const cvFileName: string = i18n.language.startsWith('fr') ? 'cv-mael-bertocchi-fr.pdf' : 'cv-mael-bertocchi-en.pdf';

    return (
        <section id='hero' className='relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28'>
            <div className='bg-grid absolute inset-0 -z-10' aria-hidden='true'></div>
            <div className='absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]' aria-hidden='true'></div>
            <div className='absolute top-1/3 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-ember/10 blur-[120px]' aria-hidden='true'></div>

            <div className='mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]'>
                <div>
                    <p className='mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pr-4 pl-3 text-sm text-zinc-300'>
                        <span className='relative flex h-2 w-2'>
                            <span className='absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400'></span>
                            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400'></span>
                        </span>
                        <span>{t('hero.status')}</span>
                    </p>

                    <h1 className='font-display text-5xl leading-[1.02] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl'>
                        <span className='block'>Maël Bertocchi</span>
                        <span className='text-gradient block'>{t('hero.role')}</span>
                    </h1>

                    <p className='mt-7 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl'>
                        {t('hero.description')}
                    </p>

                    <p className='mt-6 flex items-center gap-2 text-sm text-zinc-500'>
                        <MapPin className='h-4 w-4 text-accent' />
                        <span>{t('hero.location')}</span>
                    </p>

                    <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
                        <a href='#contact' className='bg-gradient-brand group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px] shadow-accent/60 transition-transform hover:-translate-y-0.5'>
                            <Mail className='h-4 w-4' />
                            <span>{t('hero.contact-me')}</span>
                            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                        </a>
                        <a href={`/files/${cvFileName}`} download={cvFileName} className='inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.04]'>
                            <Download className='h-4 w-4' />
                            <span>{t('hero.download-cv')}</span>
                        </a>
                    </div>

                    <div className='mt-10 flex items-center gap-3'>
                        <a href={SOCIAL_LINKS.github} target='_blank' rel='noopener noreferrer' className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white' aria-label='GitHub'>
                            <GithubIcon className='h-5 w-5' />
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target='_blank' rel='noopener noreferrer' className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white' aria-label='LinkedIn'>
                            <LinkedinIcon className='h-5 w-5' />
                        </a>
                        <a href={`mailto:${SOCIAL_LINKS.email}`} className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-white' aria-label='Email'>
                            <Mail className='h-5 w-5' />
                        </a>
                    </div>
                </div>

                <div className='relative mx-auto w-full max-w-sm lg:max-w-none'>
                    <div className='bg-gradient-brand absolute -inset-px rounded-[2.5rem] opacity-60 blur-2xl' aria-hidden='true'></div>
                    <div className='bg-gradient-brand relative rounded-[2.5rem] p-px'>
                        <div className='overflow-hidden rounded-[calc(2.5rem-1px)] bg-ink-900'>
                            <img src='/profile.png' alt='Maël Bertocchi' className='aspect-[4/5] w-full object-cover' />
                        </div>
                    </div>
                    <div className='absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-ink-900/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-left-8'>
                        <p className='font-mono text-[11px] tracking-widest text-zinc-500 uppercase'>{t('hero.badge.label')}</p>
                        <p className='mt-1 font-display text-base font-semibold text-white'>{t('hero.badge.value')}</p>
                    </div>
                </div>
            </div>

            <dl className='mx-auto mt-24 grid max-w-6xl grid-cols-3 gap-4 px-5 sm:px-8'>
                {HERO_STATS.map((stat: HeroStat) => (
                    <div key={stat.labelKey} className='flex flex-col-reverse gap-1 border-t border-white/10 pt-5'>
                        <dt className='text-xs text-zinc-500 sm:text-sm'>{t(stat.labelKey)}</dt>
                        <dd className='font-display text-3xl font-bold text-white sm:text-4xl'>{stat.value}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
};

export default HomeHeroSection;
