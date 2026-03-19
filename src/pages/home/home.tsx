import { Fragment, type JSX } from 'react';
import HomeAboutSection from './sections/about';
import HomeContactSection from './sections/contact';
import HomeEducationSection from './sections/education';
import HomeExperienceSection from './sections/experience';
import HomeHeroSection from './sections/hero';
import HomeProjectSection from './sections/projects';
import HomeSkillSection from './sections/skills';

/**
 * @function HomePage
 * @description The component serves as the main entry point for the portfolio website.
 */
function HomePage(): JSX.Element {
    return (
        <Fragment>
            <HomeHeroSection />
            <HomeAboutSection />
            <HomeExperienceSection />
            <HomeEducationSection />
            <HomeSkillSection />
            <HomeProjectSection />
            <HomeContactSection />
        </Fragment>
    );
}

export default HomePage;
