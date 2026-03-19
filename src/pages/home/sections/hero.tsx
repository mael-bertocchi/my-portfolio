import type { Maybe } from '@/models';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeHeroSection
 * @description The component is the main hero section of the homepage.
 */
function HomeHeroSection(): Maybe<JSX.Element> {
    const { t, i18n } = useTranslation();

    /**
     * @constant cvFileName
     * @description Determines the correct CV file name to download based on the current language.
     */
    const cvFileName: string = i18n.language.startsWith('fr') ? 'cv-mael-bertocchi-fr.pdf' : 'cv-mael-bertocchi-en.pdf';

    /**
     * @function scrollToSection
     * @description Scrolls smoothly to the specified section of the page when a navigation item is clicked.
     *
     * @param {string} id The id of the section to scroll to.
     */
    const scrollToSection = (id: string): void => {
        const element: Maybe<HTMLElement> = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id='hero' className='min-h-[80vh] flex items-center justify-center px-10 sm:px-14 md:px-18 lg:px-22 pt-20 pb-0 bg-gradient-to-b from-gray-50 to-white'>
            <div className='max-w-7xl w-full'>
                <div className='flex flex-col items-center text-center lg:grid lg:grid-cols-2 lg:gap-12 lg:text-left lg:items-center'>

                    <div className='order-1 lg:order-2 mb-8 lg:mb-0 flex justify-center lg:justify-end'>
                        <div className='relative'>
                            <div className='absolute -inset-3 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-2xl'></div>

                            <div className='relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80'>
                                <div className='absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-full opacity-10'></div>

                                <div className='absolute inset-2 bg-white rounded-full shadow-2xl overflow-hidden border-4 border-white'>
                                    <img src='/profile.png' alt='Maël Bertocchi' className='w-full h-full object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='order-2 lg:order-1 space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start'>
                        <div className='space-y-3 lg:space-y-4'>
                            <div className='relative inline-block'>
                                <div className='absolute -top-2 left-0 w-12 h-1 bg-accent hidden lg:block'></div>
                                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
                                    <span className='text-gray-900'>Maël</span>
                                    <span className='text-accent block lg:inline'> Bertocchi</span>
                                </h1>
                                <div className='absolute -bottom-1 right-0 w-32 lg:w-40 h-1 bg-accent opacity-30 hidden lg:block'></div>
                            </div>
                            <p className='text-lg sm:text-xl lg:text-2xl text-accent font-medium'>
                                {t('hero.role')}
                            </p>
                        </div>

                        <p className='text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl'>
                            {t('hero.description')}
                        </p>

                        <div className='flex items-center gap-2 text-gray-600'>
                            <MapPin className='w-5 h-5 text-accent' />
                            <span className='text-sm sm:text-base'>
                                Mulhouse, Grand Est, France
                            </span>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'>
                            <a href={`/files/${cvFileName}`} download={cvFileName} className='inline-flex items-center justify-center gap-2 bg-accent text-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-lg'>
                                <Download className='w-5 h-5' />
                                <span>
                                    {t('hero.download-cv')}
                                </span>
                            </a>
                            <button onClick={() => scrollToSection('contact')} className='inline-flex items-center justify-center gap-2 bg-white text-sm text-accent px-6 py-3 rounded-xl font-medium border-2 border-accent hover:bg-accent hover:text-white transition-all duration-200 shadow-md hover:shadow-md'>
                                <Mail className='w-5 h-5' />
                                <span>
                                    {t('hero.contact-me')}
                                </span>
                            </button>
                        </div>

                        <div className='space-y-3'>
                            <p className='text-gray-600 text-sm font-medium'>
                                {t('hero.find-me-on')}
                            </p>
                            <div className='flex gap-3 sm:gap-4 justify-center lg:justify-start'>
                                <a href='https://github.com/mael-bertocchi' target='_blank' rel='noopener noreferrer' className='w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 rounded-xl hover:bg-accent hover:text-white transition-all duration-200' aria-label='GitHub'>
                                    <Github className='w-5 h-5 sm:w-6 sm:h-6' />
                                </a>
                                <a href='https://www.linkedin.com/in/mael-bertocchi' target='_blank' rel='noopener noreferrer' className='w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 rounded-xl hover:bg-accent hover:text-white transition-all duration-200' aria-label='LinkedIn'>
                                    <Linkedin className='w-5 h-5 sm:w-6 sm:h-6' />
                                </a>
                                <a href='mailto:contact@mael-bertocchi.fr' className='w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 rounded-xl hover:bg-accent hover:text-white transition-all duration-200' aria-label='Email'>
                                    <Mail className='w-5 h-5 sm:w-6 sm:h-6' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSection;
