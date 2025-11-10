import type { Maybe } from "@logic/models";

/**
 * @function startNavigation
 * @description Navigation logic for mobile menu handling and scroll effects.
 */
export function startNavigation(): void {
    const metaThemeColor: Maybe<HTMLMetaElement> = document.querySelector('meta[name="theme-color"]');
    const navigation: Maybe<HTMLElement> = document.getElementById('navigation');

    /**
     * @function handleScroll
     * @description Handles navigation bar styling on scroll.
     */
    function handleScroll(): void {
        if (navigation) {
            if (window.scrollY > 20) {
                navigation.classList.remove('bg-transparent');
                navigation.classList.add('bg-white/90', 'backdrop-blur-sm', 'shadow-sm');
                if (metaThemeColor) {
                    metaThemeColor.content = '#ffffff';
                }
            } else {
                navigation.classList.add('bg-transparent');
                navigation.classList.remove('bg-white/90', 'backdrop-blur-sm', 'shadow-sm');
                if (metaThemeColor) {
                    metaThemeColor.content = '#f9fafb';
                }
            }
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
}
