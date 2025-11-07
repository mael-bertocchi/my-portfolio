import actixWebLogo from '@assets/logos/actix-web.webp';
import capVisionLogo from '@assets/logos/cap-vision.webp';
import epitechLogo from '@assets/logos/epitech.webp';
import ionisStmLogo from '@assets/logos/ionis-stm.webp';
import zedIndustriesLogo from '@assets/logos/zed-industries.webp';
import type { Maybe } from "@logic/models";

/**
 * @constant components
 * @description Imports all HTML components as raw strings.
 */
const components: Record<string, string> = import.meta.glob('/src/components/*.html', {
    query: '?raw',
    import: 'default',
    eager: true
});

/**
 * @constant logos
 * @description Imports all logo images with proper Vite asset handling.
 */
const logos: Record<string, string> = {
    'actix-web.webp': actixWebLogo,
    'cap-vision.webp': capVisionLogo,
    'epitech.webp': epitechLogo,
    'ionis-stm.webp': ionisStmLogo,
    'zed-industries.webp': zedIndustriesLogo,
};

/**
 * @function replaceAssetPaths
 * @description Replaces placeholder asset paths with actual imported asset URLs.
 *
 * @param {Element} host - The host element containing images to update.
 */
function replaceAssetPaths(host: Element): void {
    host.querySelectorAll('img[src^="/src/assets/logos/"]').forEach((img: Element) => {
        const imgElement = img as HTMLImageElement;
        const filename = imgElement.src.split('/').pop();

        if (filename && logos[filename]) {
            imgElement.src = logos[filename];
        }
    });
}

/**
 * @function loadComponent
 * @description Dynamically includes an HTML component into the document.
 *
 * @param {string} selector - The CSS selector of the host element where the component will be injected.
 * @param {string} name - The name of the HTML component file.
 */
function loadComponent(selector: string, name: string): void {
    try {
        const host: Maybe<Element> = document.querySelector(selector);

        if (!host) {
            throw new Error(`Host element not found for selector: ${selector}`);
        }
;
        const html: Maybe<string> = components[`/src/components/${name}`];

        if (!html) {
            throw new Error(`Component not found: ${name}`);
        }

        host.innerHTML = html;
        host.removeAttribute("aria-hidden");

        replaceAssetPaths(host);

        host.querySelectorAll("script").forEach((oldScript: HTMLScriptElement) => {
            const newScript: HTMLScriptElement = document.createElement("script");

            Array.from(oldScript.attributes).forEach((attr: Attr) => {
                newScript.setAttribute(attr.name, attr.value);
            });

            newScript.text = oldScript.text;
            oldScript.parentNode?.replaceChild(newScript, oldScript);
        });
    } catch (err: unknown) {
        console.error(`Error loading component ${name}:`, err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('#navigation-placeholder', 'navigation.html');
    loadComponent('#hero-placeholder', 'hero.html');
    loadComponent('#about-placeholder', 'about.html');
    loadComponent('#experience-placeholder', 'experience.html');
    loadComponent('#education-placeholder', 'education.html');
    loadComponent('#skills-placeholder', 'skills.html');
    loadComponent('#projects-placeholder', 'projects.html');
    loadComponent('#contact-placeholder', 'contact.html');
    loadComponent('#footer-placeholder', 'footer.html');
});
