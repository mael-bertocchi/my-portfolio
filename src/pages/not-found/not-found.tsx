import { ArrowLeft } from 'lucide-react';
import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

/**
 * @function NotFoundPage
 * @description Displays a 404 Not Found page when users navigate to a route that doesn't exist.
 */
function NotFoundPage(): JSX.Element {
    const { t } = useTranslation();

    return (
        <main className='relative isolate flex min-h-screen items-center justify-center overflow-hidden px-5 py-32 sm:px-8'>
            <div className='bg-grid absolute inset-0 -z-10' aria-hidden='true'></div>
            <div className='absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[140px]' aria-hidden='true'></div>

            <div className='max-w-2xl text-center'>
                <p className='text-gradient font-display text-8xl font-bold sm:text-9xl'>404</p>
                <h1 className='mt-6 font-display text-3xl font-bold text-zinc-900 sm:text-5xl'>
                    <span>{t('notfound.title')}</span> <span className='text-gradient'>{t('notfound.title-accent')}</span>
                </h1>
                <p className='mt-6 text-lg text-zinc-600'>{t('notfound.description')}</p>
                <Link to='/' className='bg-gradient-brand mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5'>
                    <ArrowLeft className='h-4 w-4' />
                    <span>{t('notfound.back-home')}</span>
                </Link>
            </div>
        </main>
    );
}

export default NotFoundPage;
