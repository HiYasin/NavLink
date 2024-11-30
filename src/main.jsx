import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Service from './components/Service.jsx';
import Users from './components/Users.jsx';
import Userdetails from './components/Userdetails.jsx';
import ErrorElement from './components/ErrorElement.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />, //catch error and display error
    // nested components routing
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/users",
        loader: () =>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      },
      {
        path: "/users/:id",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        // loader: ({ params }) => console.log(params),
        element: <Userdetails />
      }
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
