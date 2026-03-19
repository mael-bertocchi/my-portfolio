import type { Maybe } from '@/models';
import { BookOpen, Lightbulb, Users, Zap } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeAboutSection
 * @description Contains a brief introduction about myself, highlighting my motivation, team spirit, curiosity, and eagerness to learn.
 */
function HomeAboutSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='about' className='px-10 sm:px-14 md:px-18 lg:px-22 py-20 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='inline-block relative'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            <span>{t('about.title')}</span> <span className='text-accent'>{t('about.title-accent')}</span>
                        </h2>
                        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent'></div>
                    </div>
                </div>

                <div className='max-w-4xl mx-auto space-y-8'>
                    <div className='space-y-6 text-center'>
                        <p className='text-lg text-gray-700 leading-relaxed'>
                            {t('about.description.0')}
                        </p>

                        <p className='text-lg text-gray-700 leading-relaxed'>
                            {t('about.description.1')}
                        </p>

                        <p className='text-lg text-gray-700 leading-relaxed'>
                            {t('about.description.2')}
                        </p>
                    </div>

                    <div className='flex flex-wrap justify-center gap-3 pt-4'>
                        <span className='inline-flex items-center gap-2 px-4 py-2 bg-accent/5 text-accent rounded-full border border-accent/20'>
                            <Zap className='w-4 h-4' />
                            <span>{t('about.traits.motivated')}</span>
                        </span>
                        <span className='inline-flex items-center gap-2 px-4 py-2 bg-accent/5 text-accent rounded-full border border-accent/20'>
                            <Users className='w-4 h-4' />
                            <span>{t('about.traits.team-spirit')}</span>
                        </span>
                        <span className='inline-flex items-center gap-2 px-4 py-2 bg-accent/5 text-accent rounded-full border border-accent/20'>
                            <Lightbulb className='w-4 h-4' />
                            <span>{t('about.traits.curious')}</span>
                        </span>
                        <span className='inline-flex items-center gap-2 px-4 py-2 bg-accent/5 text-accent rounded-full border border-accent/20'>
                            <BookOpen className='w-4 h-4' />
                            <span>{t('about.traits.learner')}</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutSection;
