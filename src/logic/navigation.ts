import type { Maybe } from "./models";

/**
 * @description Navigation logic for mobile menu handling.
 */
function startNavigation(): void {
    const mobileMenuToggle: Maybe<HTMLElement> = document.getElementById('mobile-menu-toggle');
    const mobileMenu: Maybe<HTMLElement> = document.getElementById('mobile-menu');

    const mobileMenuBackdrop: Maybe<HTMLElement> = document.getElementById('mobile-menu-backdrop');
    const mobileMenuLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.mobile-menu-link');
    const mobileMenuPanel: Maybe<HTMLElement> = document.getElementById('mobile-menu-panel');
    const mobileMenuClose: Maybe<HTMLElement> = document.getElementById('mobile-menu-close');

    /**
     * @description Opens the mobile menu with animation.
     */
    function openMobileMenu(): void {
        if (mobileMenu && mobileMenuPanel) {
            mobileMenu.classList.remove('hidden');

            setTimeout(() => {
                mobileMenuPanel.classList.remove('translate-x-full');
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    }

    /**
     * @description Closes the mobile menu with animation.
     */
    function closeMobileMenu(): void {
        if (mobileMenu && mobileMenuPanel) {
            mobileMenuPanel.classList.add('translate-x-full');

            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
    }

    mobileMenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    });
}

startNavigation();
