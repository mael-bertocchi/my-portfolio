import { loadComponent } from '@/logic/component';
import { startNavigation } from '@/logic/navigation';
import { startTranslation } from '@/logic/translation';

const components: Record<string, string> = import.meta.glob('/src/pages/home/**/*.html', {
    query: '?raw',
    import: 'default',
    eager: true,
});

const componentList = [
    { selector: '#navigation-placeholder', path: '/src/pages/home/components/navigation.html' },
    { selector: '#hero-placeholder', path: '/src/pages/home/components/hero.html' },
    { selector: '#about-placeholder', path: '/src/pages/home/components/about.html' },
    { selector: '#experience-placeholder', path: '/src/pages/home/components/experience.html' },
    { selector: '#education-placeholder', path: '/src/pages/home/components/education.html' },
    { selector: '#skills-placeholder', path: '/src/pages/home/components/skills.html' },
    { selector: '#projects-placeholder', path: '/src/pages/home/components/projects.html' },
    { selector: '#contact-placeholder', path: '/src/pages/home/components/contact.html' },
    { selector: '#footer-placeholder', path: '/src/pages/home/components/footer.html' },
];

document.addEventListener('DOMContentLoaded', (): void => {
    componentList.forEach(({ selector, path }) => {
        loadComponent(selector, components[path]);
    });

    startTranslation();
    startNavigation();
});
