import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Landing,
  ErrorPage,
  Home,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';
import { loader as landingLoader } from './pages/landing';
import { loader as cocktailLoader } from './pages/cocktail';
import { action as newletterAction } from './pages/newsletter';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: landingLoader,
          element: <Landing />,
          errorElement: <SinglePageError />,
        },
        {
          path: 'cocktail/:id',
          loader: cocktailLoader,
          element: <Cocktail />,
          errorElement: <SinglePageError />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'newsletter',
          action: newletterAction,
          element: <Newsletter />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
