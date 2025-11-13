import { loadComponent } from "@/logic/component";
import { startNavigation } from "@/logic/navigation";
import { startTranslation } from "@/logic/translation";

/**
 * @constant components
 * @description Imports all components as raw strings from all subdirectories.
 */
const components: Record<string, string> = import.meta.glob('/src/pages/legal/**/*.html', {
    query: '?raw',
    import: 'default',
    eager: true
});

document.addEventListener('DOMContentLoaded', (): void => {
    /*!< Load all components into their respective placeholders >!*/

    loadComponent('#navigation-placeholder', components['/src/pages/legal/components/navigation.html']);
    loadComponent('#footer-placeholder', components['/src/pages/legal/components/footer.html']);

    /*!< Initialize translation and navigation functionalities >!*/

    startTranslation();
    startNavigation();
});
