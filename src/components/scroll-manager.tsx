import type { Maybe } from '@/models';
import { useEffect, type JSX } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * @function ScrollManagerComponent
 * @description Manages the scroll behavior of the application, displaying a button to scroll to the top when the user has scrolled down a certain distance
 */
function ScrollManagerComponent(): Maybe<JSX.Element> {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, [pathname]);

    return null;
}

export default ScrollManagerComponent;
