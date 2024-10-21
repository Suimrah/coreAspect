import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Rootlayout from './routes/Rootlayout';
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        element: <Main />,
        index: true,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
