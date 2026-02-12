import { loadComponent } from '@/logic/component';
import { startNavigation } from '@/logic/navigation';
import { startTranslation } from '@/logic/translation';

const components: Record<string, string> = import.meta.glob('/src/pages/legal/**/*.html', {
    query: '?raw',
    import: 'default',
    eager: true,
});

const componentList = [
    { selector: '#navigation-placeholder', path: '/src/pages/legal/components/navigation.html' },
];

document.addEventListener('DOMContentLoaded', (): void => {
    componentList.forEach(({ selector, path }) => {
        loadComponent(selector, components[path]);
    });

    startTranslation();
    startNavigation();
});
