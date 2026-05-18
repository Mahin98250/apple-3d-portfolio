import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import HomePage from './routes/HomePage'
import ProjectsPage from './routes/ProjectsPage'
import AboutPage from './routes/AboutPage'
import ExperimentsPage from './routes/ExperimentsPage'
import ContactPage from './routes/ContactPage'
import NotFoundPage from './routes/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/experiments',
    element: <ExperimentsPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
