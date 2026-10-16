import HomeAboutSection from '@/pages/home/sections/about';
import HomeContactSection from '@/pages/home/sections/contact';
import HomeEducationSection from '@/pages/home/sections/education';
import HomeExperienceSection from '@/pages/home/sections/experience';
import HomeExpertiseSection from '@/pages/home/sections/expertise';
import HomeHeroSection from '@/pages/home/sections/hero';
import HomeProjectSection from '@/pages/home/sections/projects';
import { type JSX } from 'react';

/**
 * @function HomePage
 * @description The component serves as the main entry point for the portfolio website.
 */
function HomePage(): JSX.Element {
    return (
        <main>
            <HomeHeroSection />
            <HomeAboutSection />
            <HomeExpertiseSection />
            <HomeExperienceSection />
            <HomeProjectSection />
            <HomeEducationSection />
            <HomeContactSection />
        </main>
    );
}

export default HomePage;
