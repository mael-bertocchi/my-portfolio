import type { Maybe } from '@/models';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @function HomeContactSection
 * @description The HomeContactSection component renders a section for users to get in touch, typically including contact information and a contact form.
 */
function HomeContactSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    return (
        <section id='contact' className='px-10 sm:px-14 md:px-18 lg:px-22 py-20 bg-gradient-to-b from-white to-gray-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='inline-block relative'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            <span>{t('contact.title')}</span> <span className='text-accent'>{t('contact.title-accent')}</span>
                        </h2>
                        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent'></div>
                    </div>
                    <p className='text-lg text-gray-600 mt-6 max-w-2xl mx-auto'>
                        {t('contact.description')}
                    </p>
                </div>

                <div className='max-w-5xl mx-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                        <div className='text-center'>
                            <div className='flex flex-col items-center gap-3'>
                                <Mail className='w-6 h-6 text-gray-900' />
                                <h3 className='text-xl font-bold text-gray-900'>{t('contact.email')}</h3>
                                <a href='mailto:contact@mael-bertocchi.fr' className='text-gray-600 hover:text-accent transition-colors duration-200'>
                                    contact@mael-bertocchi.fr
                                </a>
                            </div>
                        </div>

                        <div className='text-center'>
                            <div className='flex flex-col items-center gap-3'>
                                <Phone className='w-6 h-6 text-gray-900' />
                                <h3 className='text-xl font-bold text-gray-900'>{t('contact.phone')}</h3>
                                <a href='tel:+33761778360' className='text-gray-600 hover:text-accent transition-colors duration-200'>
                                    +33 7 61 77 83 60
                                </a>
                            </div>
                        </div>

                        <div className='text-center'>
                            <div className='flex flex-col items-center gap-3'>
                                <MapPin className='w-6 h-6 text-gray-900' />
                                <h3 className='text-xl font-bold text-gray-900'>{t('contact.location')}</h3>
                                <p className='text-gray-600'>{t('contact.location-value')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContactSection;
