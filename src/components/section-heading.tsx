import type { Perhaps } from '@/models';
import type { JSX } from 'react';

/**
 * @interface SectionHeadingProps
 * @description Represents the properties of a section heading
 */
interface SectionHeadingProps {
    index: string; /*!< Number displayed before the eyebrow, such as '01' */
    eyebrow: string; /*!< Short label displayed above the title */
    title: string; /*!< Main part of the title */
    accent: string; /*!< Highlighted part of the title */
    subtitle: Perhaps<string>; /*!< Optional text displayed under the title */
}

/**
 * @function SectionHeading
 * @description Renders the heading shared by every section of the home page
 */
function SectionHeading({ index, eyebrow, title, accent, subtitle }: SectionHeadingProps): JSX.Element {
    return (
        <div className='reveal mb-14 max-w-3xl'>
            <p className='mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500'>
                <span className='text-accent'>{index}</span>
                <span className='h-px w-10 bg-zinc-300'></span>
                <span>{eyebrow}</span>
            </p>
            <h2 className='font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl'>
                <span>{title}</span> <span className='text-gradient'>{accent}</span>
            </h2>
            {subtitle && (
                <p className='mt-5 text-lg leading-relaxed text-zinc-600'>{subtitle}</p>
            )}
        </div>
    );
}

export default SectionHeading;
