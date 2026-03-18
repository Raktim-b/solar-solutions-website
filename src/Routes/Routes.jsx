import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../Layout/Wrapper";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import Project from "../Pages/Project/Project";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
