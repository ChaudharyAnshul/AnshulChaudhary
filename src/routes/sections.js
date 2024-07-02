import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

export const IndexPage = lazy(() => import('../pages/app'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);
  return routes;
}
