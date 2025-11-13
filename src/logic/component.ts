import cvEn from '@assets/files/cv-mael-bertocchi-en.pdf';
import cvFr from '@assets/files/cv-mael-bertocchi-fr.pdf';
import actixWebLogo from '@assets/logos/actix-web.webp';
import capvisionLogo from '@assets/logos/cap-vision.webp';
import epitechLogo from '@assets/logos/epitech.webp';
import ionisStmLogo from '@assets/logos/ionis-stm.webp';
import zedIndustriesLogo from '@assets/logos/zed-industries.webp';
import type { Maybe } from "@logic/models";

/**
 * @constant logos
 * @description Imports all logo images with proper asset handling.
 */
const logos: Record<string, string> = {
    'actix-web.webp': actixWebLogo,
    'cap-vision.webp': capvisionLogo,
    'epitech.webp': epitechLogo,
    'ionis-stm.webp': ionisStmLogo,
    'zed-industries.webp': zedIndustriesLogo,
};

/**
 * @constant files
 * @description Imports all file assets with proper asset handling.
 */
const files: Record<string, string> = {
    'cv-mael-bertocchi-fr.pdf': cvFr,
    'cv-mael-bertocchi-en.pdf': cvEn,
};

/**
 * @function replaceAssetPaths
 * @description Replaces placeholder asset paths with actual imported asset link.
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

    host.querySelectorAll('a[href^="/src/assets/files/"]').forEach((link: Element) => {
        const linkElement = link as HTMLAnchorElement;
        const filename = linkElement.href.split('/').pop();

        if (filename && files[filename]) {
            linkElement.href = files[filename];
        }
    });
}

/**
 * @function loadComponent
 * @description Dynamically includes an component into the document.
 *
 * @param {string} selector - The selector of the host element where the component will be injected.
 * @param {string} content - The path to the component file.
 */
export function loadComponent(selector: string, content: string): void {
    try {
        const host: Maybe<Element> = document.querySelector(selector);

        if (!host) {
            throw new Error(`Host element not found for selector: ${selector}`);
        }

        host.innerHTML = content;
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
        console.error(`Error loading component:`, err);
    }
}
