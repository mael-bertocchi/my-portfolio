import type { Maybe } from '@/models';
import SectionHeading from '@components/section-heading';
import { translateList } from '@utils/translation';
import { BookOpen, Lightbulb, Users, Zap, type LucideIcon } from 'lucide-react';
import type { JSX } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * @interface Trait
 * @description Represents a personal trait highlighted in the about section
 */
interface Trait {
    icon: LucideIcon; /*!< Icon illustrating the trait */
    labelKey: string; /*!< Translation key of the label */
}

/**
 * @constant TRAITS
 * @description Personal traits highlighted in the about section
 */
const TRAITS: Trait[] = [
    { icon: Zap, labelKey: 'about.traits.motivated' },
    { icon: Users, labelKey: 'about.traits.team-spirit' },
    { icon: Lightbulb, labelKey: 'about.traits.curious' },
    { icon: BookOpen, labelKey: 'about.traits.learner' },
];

/**
 * @function HomeAboutSection
 * @description Contains a brief introduction about myself, highlighting my motivation, team spirit, curiosity, and eagerness to learn.
 */
function HomeAboutSection(): Maybe<JSX.Element> {
    const { t } = useTranslation();

    const paragraphs: string[] = translateList(t, 'about.description');

    return (
        <section id='about' className='py-24 sm:py-32'>
            <div className='mx-auto max-w-6xl px-5 sm:px-8'>
                <SectionHeading index='01' eyebrow={t('nav.about')} title={t('about.title')} accent={t('about.title-accent')} subtitle={undefined} />

                <div className='grid gap-12 lg:grid-cols-[1fr_1.2fr]'>
                    <p className='reveal font-display text-2xl leading-snug font-medium text-zinc-900 sm:text-3xl'>
                        {t('about.statement')}
                    </p>

                    <div className='reveal space-y-6'>
                        {paragraphs.map((paragraph: string) => (
                            <p key={paragraph} className='text-lg leading-relaxed text-zinc-600'>{paragraph}</p>
                        ))}

                        <ul className='flex flex-wrap gap-3 pt-4'>
                            {TRAITS.map((trait: Trait) => (
                                <li key={trait.labelKey} className='inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-800'>
                                    <trait.icon className='h-4 w-4 text-accent' />
                                    <span>{t(trait.labelKey)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutSection;
