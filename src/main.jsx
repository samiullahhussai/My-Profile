import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './NavBar/Home.jsx';
import AboutMe from './NavBar/AboutMe.jsx';
import Portfolio from './NavBar/Portfolio.jsx';
import Contack from './NavBar/Contack.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    },
    {
      path: "/About",
      element: <AboutMe />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
        },
        {
          path: "/Contact",
          element: <Contack/>,
          }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

