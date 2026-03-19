import type { Maybe } from '@/models';
import { Calendar, MapPin } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeEducationSection
 * @description The component renders a section showcasing the educational background.
 */
function HomeEducationSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='education' className='px-10 sm:px-14 md:px-18 lg:px-22 py-20 bg-gradient-to-b from-gray-50 to-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='inline-block relative'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            <span className='text-accent'>{t('education.title')}</span> <span>{t('education.title-accent')}</span>
                        </h2>
                        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent'></div>
                    </div>
                    <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto'>
                        {t('education.subtitle')}
                    </p>
                </div>

                <div className='max-w-5xl mx-auto space-y-8'>
                    <div className='group relative'>
                        <div className='bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-accent/20'>
                            <div className='p-6 sm:p-8'>
                                <div className='flex flex-col sm:flex-row items-start gap-6'>
                                    <div className='flex-shrink-0 w-14 h-14 sm:w-18 sm:h-18 rounded-xl overflow-hidden shadow-md'>
                                        <img src='/logos/epitech.webp' alt='Epitech Logo' className='w-full h-full object-cover' />
                                    </div>

                                    <div className='flex-1 min-w-0'>
                                        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4'>
                                            <div>
                                                <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2'>
                                                    {t('education.schools.epitech.degree')}
                                                </h3>
                                                <p className='text-lg text-accent font-semibold mb-2'>
                                                    {t('education.schools.epitech.school')}
                                                </p>
                                                <div className='flex items-center gap-2 text-sm text-gray-500'>
                                                    <MapPin className='w-4 h-4 flex-shrink-0' />
                                                    <span>
                                                        {t('education.schools.epitech.location')}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/5 px-4 py-2 rounded-full border border-accent/20 whitespace-nowrap self-start'>
                                                <Calendar className='w-4 h-4 flex-shrink-0' />
                                                <span>
                                                    {t('education.schools.epitech.period')}
                                                </span>
                                            </div>
                                        </div>

                                        <p className='text-gray-600 leading-relaxed'>
                                            {t('education.schools.epitech.description')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='group relative'>
                        <div className='bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-accent/20'>
                            <div className='p-6 sm:p-8'>
                                <div className='flex flex-col sm:flex-row items-start gap-6'>
                                    <div className='flex-shrink-0 w-14 h-14 sm:w-18 sm:h-18 rounded-xl overflow-hidden shadow-md'>
                                        <img src='/logos/ionis-stm.webp' alt='Ionis-STM Logo' className='w-full h-full object-contain' />
                                    </div>

                                    <div className='flex-1 min-w-0'>
                                        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4'>
                                            <div>
                                                <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2'>
                                                    {t('education.schools.ionis-stm.degree')}
                                                </h3>
                                                <p className='text-lg text-accent font-semibold mb-2'>
                                                    {t('education.schools.ionis-stm.school')}
                                                </p>
                                                <div className='flex items-center gap-2 text-sm text-gray-500'>
                                                    <MapPin className='w-4 h-4 flex-shrink-0' />
                                                    <span>
                                                        {t('education.schools.ionis-stm.location')}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/5 px-4 py-2 rounded-full border border-accent/20 whitespace-nowrap self-start'>
                                                <Calendar className='w-4 h-4 flex-shrink-0' />
                                                <span>
                                                    {t('education.schools.ionis-stm.period')}
                                                </span>
                                            </div>
                                        </div>

                                        <p className='text-gray-600 leading-relaxed'>
                                            {t('education.schools.ionis-stm.description')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeEducationSection;
