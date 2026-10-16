import type { Maybe } from '@/models'
import '@/styles/index.css'
import '@/utils/i18n'
import FooterComponent from '@components/footer'
import NavigationComponent from '@components/navigation'
import ScrollManager from '@components/scroll-manager'
import HomePage from '@pages/home/home'
import LegalPage from '@pages/legal/legal'
import NotFoundPage from '@pages/not-found/not-found'
import { StrictMode, type JSX } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'

/**
 * @function Layout
 * @description The Layout component serves as a wrapper for the main content of the application.
 */
export function Layout(): JSX.Element {
    return (
        <div className="font-sans text-gray-900">
            <NavigationComponent />
            <ScrollManager />
            <Outlet />
            <FooterComponent />
        </div>
    )
}

/**
 * @constant router
 * @description The router constant defines the routing configuration for the application using React Router.
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'legal',
                element: <LegalPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]);

/**
 * @constant rootElement
 * @description The DOM element the application is mounted into
 */
const rootElement: Maybe<HTMLElement> = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found');
}

createRoot(rootElement).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
