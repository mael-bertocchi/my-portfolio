import { loadComponent } from "@/logic/component";
import { startNavigation } from "@/logic/navigation";
import { startTranslation } from "@/logic/translation";

/**
 * @constant components
 * @description Imports all components as raw strings from all subdirectories.
 */
const components: Record<string, string> = import.meta.glob('/src/pages/home/**/*.html', {
    query: '?raw',
    import: 'default',
    eager: true
});

document.addEventListener('DOMContentLoaded', (): void => {
    /*!< Load all components into their respective placeholders >!*/

    loadComponent('#navigation-placeholder', components['/src/pages/home/components/navigation.html']);
    loadComponent('#hero-placeholder', components['/src/pages/home/components/hero.html']);
    loadComponent('#about-placeholder', components['/src/pages/home/components/about.html']);
    loadComponent('#experience-placeholder', components['/src/pages/home/components/experience.html']);
    loadComponent('#education-placeholder', components['/src/pages/home/components/education.html']);
    loadComponent('#skills-placeholder', components['/src/pages/home/components/skills.html']);
    loadComponent('#projects-placeholder', components['/src/pages/home/components/projects.html']);
    loadComponent('#contact-placeholder', components['/src/pages/home/components/contact.html']);
    loadComponent('#footer-placeholder', components['/src/pages/home/components/footer.html']);

    /*!< Initialize translation and navigation functionalities >!*/

    startTranslation();
    startNavigation();
});
