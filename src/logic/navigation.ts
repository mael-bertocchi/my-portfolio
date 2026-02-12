import type { Maybe } from '@logic/models';

/**
 * @function startNavigation
 * @description Navigation logic for mobile menu handling and scroll effects.
 */
export function startNavigation(): void {
    const navigation: Maybe<HTMLElement> = document.getElementById('navigation');

    if (!navigation) {
        return;
    }
    const updateNavigationStyle = (): void => {
        const isScrolled = window.scrollY > 20;

        if (isScrolled) {
            navigation.classList.remove('bg-transparent');
            navigation.classList.add('bg-gray-50/95', 'backdrop-blur-sm', 'shadow-sm');
        } else {
            navigation.classList.add('bg-transparent');
            navigation.classList.remove('bg-gray-50/95', 'backdrop-blur-sm', 'shadow-sm');
        }
    };

    window.addEventListener('scroll', updateNavigationStyle);
    updateNavigationStyle();
}
