import type { Maybe } from '@/models';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeExperienceSection
 * @description The component renders a section showcasing the user's professional experience.
 */
function HomeExperienceSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='experience' className='min-h-screen px-10 sm:px-14 md:px-18 lg:px-22 py-20 bg-gradient-to-b from-white to-gray-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='inline-block relative'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            <span>{t('experience.title')}</span> <span className='text-accent'>{t('experience.title-accent')}</span>
                        </h2>
                        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent'></div>
                    </div>
                    <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto'>
                        {t('experience.subtitle')}
                    </p>
                </div>

                <div className='relative'>
                    <div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent/10 via-accent/30 to-accent/40'></div>

                    <div className='hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2'>
                        <div className='w-4 h-4 rounded-full bg-accent shadow-lg ring-4 ring-accent/20'></div>
                    </div>

                    <div className='space-y-12 pb-10'>
                        <div className='relative lg:grid lg:grid-cols-2 lg:gap-8 group'>
                            <div className='hidden lg:flex lg:text-right lg:pr-12 lg:justify-end lg:items-start'>
                                <div className='inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/5 px-4 py-2 rounded-full border border-accent/20'>
                                    <Calendar className='w-4 h-4' />
                                    <span>
                                        {t('experience.jobs.epitech.period')}
                                    </span>
                                </div>
                            </div>

                            <div className='hidden lg:block absolute left-1/2 top-2 transform -translate-x-1/2'>
                                <div className='w-4 h-4 rounded-full bg-white border-4 border-accent shadow-lg group-hover:scale-110 transition-transform duration-300'></div>
                            </div>

                            <div className='lg:pl-12'>
                                <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-accent/20'>
                                    <div className='p-6 sm:p-8'>
                                        <div className='flex items-start gap-4'>
                                            <div className='flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden shadow-md'>
                                                <img src='/logos/epitech.webp' alt='Epitech Logo' className='w-full h-full object-cover' />
                                            </div>

                                            <div className='flex-1 min-w-0'>
                                                <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-1'>
                                                    {t('experience.jobs.epitech.title')}
                                                </h3>
                                                <p className='text-gray-600 font-medium mb-1'>{t('experience.jobs.epitech.company')}</p>
                                                <div className='flex items-center gap-2 text-sm text-gray-500'>
                                                    <MapPin className='w-4 h-4' />
                                                    <span>
                                                        {t('experience.jobs.epitech.location')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-4 lg:hidden'>
                                            <div className='inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/5 px-4 py-2 rounded-full border border-accent/20'>
                                                <Calendar className='w-4 h-4' />
                                                <span>
                                                    {t('experience.jobs.epitech.period')}
                                                </span>
                                            </div>
                                        </div>

                                        <p className='mt-6 text-gray-600 leading-relaxed'>
                                            {t('experience.jobs.epitech.description')}
                                        </p>

                                        <div className='mt-6'>
                                            <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                                                {t('experience.key-contributions')}
                                            </h4>
                                            <ul className='space-y-2'>
                                                <li className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                                                    <span>
                                                        {t('experience.jobs.epitech.tasks.0')}
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                                                    <span>
                                                        {t('experience.jobs.epitech.tasks.1')}
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                                                    <span>
                                                        {t('experience.jobs.epitech.tasks.2')}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='mt-6 flex flex-wrap gap-2'>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>
                                                {t('experience.jobs.epitech.tags.0')}
                                            </span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>
                                                {t('experience.jobs.epitech.tags.1')}
                                            </span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>
                                                {t('experience.jobs.epitech.tags.2')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative lg:grid lg:grid-cols-2 lg:gap-8 group'>
                            <div className='lg:order-1 lg:pr-12'>
                                <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-accent/20'>
                                    <div className='p-6 sm:p-8'>
                                        <div className='flex items-start gap-4'>
                                            <div className='flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden shadow-md'>
                                                <img src='/logos/cap-vision.webp' alt='CAP Vision Logo' className='w-full h-full object-cover' />
                                            </div>

                                            <div className='flex-1 min-w-0'>
                                                <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-1'>
                                                    {t('experience.jobs.cap-vision.title')}
                                                </h3>
                                                <p className='text-gray-600 font-medium mb-1'>
                                                    {t('experience.jobs.cap-vision.company')}
                                                </p>
                                                <div className='flex items-center gap-2 text-sm text-gray-500'>
                                                    <MapPin className='w-4 h-4' />
                                                    <span>
                                                        {t('experience.jobs.cap-vision.location')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-4 lg:hidden'>
                                            <div className='inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/5 px-4 py-2 rounded-full border border-accent/20'>
                                                <Calendar className='w-4 h-4' />
                                                <span>
                                                    {t('experience.jobs.cap-vision.period')}
                                                </span>
                                            </div>
                                        </div>

                                        <p className='mt-6 text-gray-600 leading-relaxed'>
                                            {t('experience.jobs.cap-vision.description')}
                                        </p>

                                        <div className='mt-6'>
                                            <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                                                {t('experience.key-contributions')}
                                            </h4>
                                            <ul className='space-y-2'>
                                                <li className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                                                    <span>
                                                        {t('experience.jobs.cap-vision.tasks.0')}
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                                                    <span>
                                                        {t('experience.jobs.cap-vision.tasks.1')}
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                                                    <span>
                                                        {t('experience.jobs.cap-vision.tasks.2')}
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2 text-sm text-gray-600'>
                                                    <CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                                                    <span>
                                                        {t('experience.jobs.cap-vision.tasks.3')}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='mt-6 flex flex-wrap gap-2'>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Razor</span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>C#</span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Angular</span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Ionic</span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>DevOps</span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Azure</span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Business Central</span>
                                            <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>IA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='hidden lg:block absolute left-1/2 top-2 transform -translate-x-1/2'>
                                <div className='w-4 h-4 rounded-full bg-white border-4 border-accent shadow-lg group-hover:scale-110 transition-transform duration-300'></div>
                            </div>

                            <div className='hidden lg:block lg:order-2 lg:pl-12 lg:items-start'>
                                <div className='inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/5 px-4 py-2 rounded-full border border-accent/20'>
                                    <Calendar className='w-4 h-4' />
                                    <span>
                                        {t('experience.jobs.cap-vision.period')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeExperienceSection;
