import type { JSX } from 'react';

/**
 * @interface TagProps
 * @description Represents the properties of a tag
 */
interface TagProps {
    label: string; /*!< Text of the tag */
}

/**
 * @function Tag
 * @description Renders a small label, used for technologies and keywords
 */
function Tag({ label }: TagProps): JSX.Element {
    return (
        <span className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300'>
            {label}
        </span>
    );
}

export default Tag;
