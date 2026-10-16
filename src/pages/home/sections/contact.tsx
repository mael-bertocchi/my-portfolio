import { SOCIAL_LINKS } from '@/data/portfolio';
import type { Maybe } from '@/models';
import { LinkedinIcon } from '@components/brand-icons';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeContactSection
 * @description The HomeContactSection component renders a call to action with the available contact channels.
 */
function HomeContactSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='contact' className='py-24 sm:py-32'>
            <div className='mx-auto max-w-6xl px-5 sm:px-8'>
                <div className='reveal relative isolate overflow-hidden rounded-[2rem] bg-accent-deep px-6 text-white py-16 sm:px-14 sm:py-20'>
                    <div className='absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-accent opacity-60 blur-[120px]' aria-hidden='true'></div>
                    <div className='bg-grid-light absolute inset-0 -z-10' aria-hidden='true'></div>

                    <p className='mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-white/60 uppercase'>
                        <span className='text-white'>06</span>
                        <span className='h-px w-10 bg-white/30'></span>
                        <span>{t('nav.contact')}</span>
                    </p>

                    <h2 className='max-w-3xl font-display text-4xl leading-tight font-bold tracking-tight text-white sm:text-6xl'>
                        <span>{t('contact.title')}</span> <span className='text-white/70'>{t('contact.title-accent')}</span>
                    </h2>
                    <p className='mt-6 max-w-2xl text-lg leading-relaxed text-white/75'>{t('contact.description')}</p>

                    <a href={`mailto:${SOCIAL_LINKS.email}`} className='group mt-10 inline-flex max-w-full items-center gap-3 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-accent-deep shadow-xl transition-transform hover:-translate-y-0.5 sm:text-lg'>
                        <span className='truncate'>{SOCIAL_LINKS.email}</span>
                        <ArrowRight className='h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1' />
                    </a>

                    <ul className='mt-12 grid gap-4 border-t border-white/20 pt-8 text-sm text-white/75 sm:grid-cols-3'>
                        <li>
                            <a href={SOCIAL_LINKS.linkedin} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 transition-colors hover:text-white'>
                                <LinkedinIcon className='h-4 w-4' />
                                <span>linkedin.com/in/mael-bertocchi</span>
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${SOCIAL_LINKS.phone}`} className='inline-flex items-center gap-2 transition-colors hover:text-white'>
                                <Phone className='h-4 w-4' />
                                <span>{SOCIAL_LINKS.phoneLabel}</span>
                            </a>
                        </li>
                        <li className='inline-flex items-center gap-2'>
                            <MapPin className='h-4 w-4' />
                            <span>{t('contact.location-value')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomeContactSection;
