import type { Maybe } from '@/models';
import { GithubIcon } from '@components/brand-icons';
import { Calendar, ExternalLink, Lock } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeProjectSection
 * @description The Projects component renders a section showcasing various projects, including their descriptions.
 */
function HomeProjectSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='projects' className='px-10 sm:px-14 md:px-18 lg:px-22 py-20 bg-gradient-to-b from-gray-50 to-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='inline-block relative'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            <span>{t('projects.title')}</span> <span className='text-accent'>{t('projects.title-accent')}</span>
                        </h2>
                        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent'></div>
                    </div>
                    <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto'>
                        {t('projects.subtitle')}
                    </p>
                </div>

                <div className='grid gap-8 md:grid-cols-2 max-w-6xl mx-auto'>
                    <div className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-accent/20 flex flex-col'>
                        <div className='p-6 sm:p-8 flex flex-col flex-1'>
                            <div className='flex items-start justify-between mb-4'>
                                <div className='flex-1'>
                                    <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-200'>
                                        {t('projects.items.logeler-finka.title')}
                                    </h3>
                                    <div className='flex items-center gap-2 text-sm text-gray-500 mb-1'>
                                        <Calendar className='w-4 h-4' />
                                        <span>
                                            {t('projects.items.logeler-finka.period')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className='text-gray-600 leading-relaxed mb-6 flex-1'>
                                {t('projects.items.logeler-finka.description')}
                            </p>

                            <div className='space-y-4'>
                                <div>
                                    <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                                        {t('projects.technologies-used')}
                                    </h4>
                                    <div className='flex flex-wrap gap-2'>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>React</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Vite</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Fastify</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>MongoDB</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Node</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Docker</span>
                                    </div>
                                </div>

                                <div className='flex gap-3 pt-2'>
                                    <a href='https://www.logelerfinka.fr' target='_blank' rel='noopener noreferrer' className='flex-1 inline-flex items-center justify-center gap-2 bg-accent text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-md'>
                                        <ExternalLink className='w-4 h-4' />
                                        <span>
                                            {t('projects.view-website')}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-accent/20 flex flex-col'>
                        <div className='p-6 sm:p-8 flex flex-col flex-1'>
                            <div className='flex items-start justify-between mb-4'>
                                <div className='flex-1'>
                                    <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-200'>
                                        {t('projects.items.hungry-no.title')}
                                    </h3>
                                    <div className='flex items-center gap-2 text-sm text-gray-500 mb-1'>
                                        <Calendar className='w-4 h-4' />
                                        <span>
                                            {t('projects.items.hungry-no.period')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className='text-gray-600 leading-relaxed mb-6 flex-1'>
                                {t('projects.items.hungry-no.description')}
                            </p>

                            <div className='space-y-4'>
                                <div>
                                    <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                                        {t('projects.technologies-used')}
                                    </h4>
                                    <div className='flex flex-wrap gap-2'>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>React</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Express</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>MongoDB</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Node</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Docker</span>
                                    </div>
                                </div>

                                <div className='flex gap-3 pt-2'>
                                    <a href='https://www.hungryno.fr' target='_blank' rel='noopener noreferrer' className='flex-1 inline-flex items-center justify-center gap-2 bg-accent text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-md'>
                                        <ExternalLink className='w-4 h-4' />
                                        <span>
                                            {t('projects.view-website')}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-accent/20 flex flex-col'>
                        <div className='p-6 sm:p-8 flex flex-col flex-1'>
                            <div className='flex items-start justify-between mb-4'>
                                <div className='flex-1'>
                                    <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-200'>
                                        {t('projects.items.baselhack.title')}
                                    </h3>
                                    <div className='flex items-center gap-2 text-sm text-gray-500 mb-1'>
                                        <Calendar className='w-4 h-4' />
                                        <span>
                                            {t('projects.items.baselhack.period')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className='text-gray-600 leading-relaxed mb-6 flex-1'>
                                {t('projects.items.baselhack.description')}
                            </p>

                            <div className='space-y-4'>
                                <div>
                                    <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                                        {t('projects.technologies-used')}
                                    </h4>
                                    <div className='flex flex-wrap gap-2'>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Flutter</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Node</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Fastify</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>FastAPI</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Mistral</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>MongoDB</span>
                                    </div>
                                </div>

                                <div className='flex gap-3 pt-2'>
                                    <a href='https://github.com/mael-bertocchi/baselhack-2025' target='_blank' rel='noopener noreferrer' className='flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-md'>
                                        <GithubIcon className='w-4 h-4' />
                                        <span>
                                            {t('projects.view-github')}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-accent/20 flex flex-col'>
                        <div className='p-6 sm:p-8 flex flex-col flex-1'>
                            <div className='flex items-start justify-between mb-4'>
                                <div className='flex-1'>
                                    <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-200'>
                                        {t('projects.items.france-equipement.title')}
                                    </h3>
                                    <div className='flex items-center gap-2 text-sm text-gray-500 mb-1'>
                                        <Calendar className='w-4 h-4' />
                                        <span>
                                            {t('projects.items.france-equipement.period')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className='text-gray-600 leading-relaxed mb-6 flex-1'>
                                {t('projects.items.france-equipement.description')}
                            </p>

                            <div className='space-y-4'>
                                <div>
                                    <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                                        {t('projects.technologies-used')}
                                    </h4>
                                    <div className='flex flex-wrap gap-2'>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>React</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Node</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>FastAPI</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Express</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>Mistral</span>
                                        <span className='px-3 py-1 text-xs font-medium bg-accent/5 text-accent rounded-full border border-accent/20'>MongoDB</span>
                                    </div>
                                </div>

                                <div className='flex gap-3 pt-2'>
                                    <div className='flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-500 px-4 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed'>
                                        <Lock className='w-4 h-4' />
                                        <span>
                                            {t('projects.private-project')}
                                        </span>
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

export default HomeProjectSection;
