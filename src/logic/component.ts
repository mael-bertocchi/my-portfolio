import cvEn from '@assets/files/cv-mael-bertocchi-en.pdf';
import cvFr from '@assets/files/cv-mael-bertocchi-fr.pdf';
import actixWebLogo from '@assets/logos/actix-web.webp';
import capvisionLogo from '@assets/logos/cap-vision.webp';
import epitechLogo from '@assets/logos/epitech.webp';
import ionisStmLogo from '@assets/logos/ionis-stm.webp';
import zedIndustriesLogo from '@assets/logos/zed-industries.webp';
import profileImage from '@assets/profile.png';
import type { Maybe } from '@logic/models';

const assetRegistry = {
    images: {
        logos: {
            'actix-web.webp': actixWebLogo,
            'cap-vision.webp': capvisionLogo,
            'epitech.webp': epitechLogo,
            'ionis-stm.webp': ionisStmLogo,
            'zed-industries.webp': zedIndustriesLogo,
        },
        profile: profileImage,
    },
    files: {
        'cv-mael-bertocchi-fr.pdf': cvFr,
        'cv-mael-bertocchi-en.pdf': cvEn,
    },
};

function replaceAssets(host: Element): void {
    host.querySelectorAll('img[src^="/src/assets/logos/"]').forEach((img) => {
        const filename = (img as HTMLImageElement).src.split('/').pop();
        if (filename && filename in assetRegistry.images.logos) {
            (img as HTMLImageElement).src = assetRegistry.images.logos[filename as keyof typeof assetRegistry.images.logos];
        }
    });

    host.querySelectorAll('img[src="/src/assets/profile.png"]').forEach((img) => {
        (img as HTMLImageElement).src = assetRegistry.images.profile;
    });

    host.querySelectorAll('a[href^="/src/assets/files/"]').forEach((link) => {
        const filename = (link as HTMLAnchorElement).href.split('/').pop();
        if (filename && filename in assetRegistry.files) {
            (link as HTMLAnchorElement).href = assetRegistry.files[filename as keyof typeof assetRegistry.files];
        }
    });
}

function executeScripts(host: Element): void {
    host.querySelectorAll('script').forEach((oldScript) => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach((attr) => {
            newScript.setAttribute(attr.name, attr.value);
        });
        newScript.text = oldScript.text;
        oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
}

export function loadComponent(selector: string, content: string): void {
    const host: Maybe<Element> = document.querySelector(selector);

    if (!host) {
        console.error(`Component host not found: ${selector}`);
        return;
    }

    try {
        host.innerHTML = content;
        host.removeAttribute('aria-hidden');
        replaceAssets(host);
        executeScripts(host);
    } catch (error) {
        console.error(`Failed to load component at ${selector}:`, error);
    }
}
