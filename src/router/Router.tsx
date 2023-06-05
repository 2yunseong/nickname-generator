import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage';
import ConfirmPage from '../pages/ConfirmPage';
import ResultPage from '../pages/ResultPage';
import { PropsWithChildren } from 'react';

const Router = ({ children }: PropsWithChildren) => {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/confirm',
          element: <ConfirmPage />,
        },
        {
          path: '/result',
          element: <ResultPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouter} />;
};

export default Router;
