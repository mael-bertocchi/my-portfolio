import '@/styles/index.css'
import '@/utils/i18n'
import FooterComponent from '@components/footer'
import NavigationComponent from '@components/navigation'
import HomePage from '@pages/home/home'
import LegalPage from '@pages/legal/legal'
import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

/**
 * @function Layout
 * @description The Layout component serves as a wrapper for the main content of the application.
 */
function Layout() {
    return (
        <Fragment>
            <NavigationComponent />
            <Outlet />
            <FooterComponent />
        </Fragment>
    )
}

/**
 * @contant router
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
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
