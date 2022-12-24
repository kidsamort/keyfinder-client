import { Navigate, useRoutes } from 'react-router-dom';
import Auth from 'pages/Auth';
import Error from 'pages/Error';
import Home from 'pages/Home';
import Private from 'pages/Private';
import Key from 'pages/Key';

const AppRouter = () => {
  const isAuth = false;
  const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/key', element: <Key /> },
    {
      path: 'auth',
      element: <Auth />,
      children: [{ path: ':authUrl', element: <></> }],
    },
    { path: 'error', element: <Error /> },
    {
      path: '*',
      element: <Navigate to="/error" replace={true} />,
    },
  ];
  const privateRoutes = [{ path: 'private', element: <Private /> }];
  return useRoutes(isAuth ? [...privateRoutes, ...publicRoutes] : publicRoutes);
};

export default AppRouter;
