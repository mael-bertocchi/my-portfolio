import type { Maybe } from "./models";

/**
 * @description Dynamically includes an HTML component into the document.
 *
 * @param {string} selector - The CSS selector of the host element where the component will be injected.
 * @param {string} url - The URL of the HTML component to include.
 */
async function getComponent(selector: string, url: string) : Promise<void> {
    try {
        const host: Maybe<Element> = document.querySelector(selector);

        if (!host) {
            throw new Error(`Host element not found for selector: ${selector}`);
        }

        const res: Response = await fetch(url, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch component: ${res.status} ${res.statusText}`);
        }

        const html: string = await res.text();

        host.innerHTML = html;
        host.removeAttribute("aria-hidden");
        host.querySelectorAll("script").forEach((oldScript: HTMLScriptElement) => {
            const newScript: HTMLScriptElement = document.createElement("script");

            Array.from(oldScript.attributes).forEach((attr: Attr) => {
                newScript.setAttribute(attr.name, attr.value);
            });

            newScript.text = oldScript.text;
            oldScript.parentNode?.replaceChild(newScript, oldScript);
        });
    } catch (err: unknown) {
        console.error(`Error including component from ${url}:`, err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getComponent('#navigation-placeholder', '/src/components/navigation.html');
    getComponent('#hero-placeholder', '/src/components/hero.html');
    getComponent('#about-placeholder', '/src/components/about.html');
    getComponent('#experience-placeholder', '/src/components/experience.html');
    getComponent('#education-placeholder', '/src/components/education.html');
    getComponent('#skills-placeholder', '/src/components/skills.html');
    getComponent('#contact-placeholder', '/src/components/contact.html');
    getComponent('#footer-placeholder', '/src/components/footer.html');
});
