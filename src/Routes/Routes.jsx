import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../Layout/Wrapper";
import Home from "../assets/Pages/Home/Home";
import Service from "../assets/Pages/Service/Service";
import Contact from "../assets/Pages/Contact/Contact";
import Project from "../assets/Pages/Project/Project";
import Blog from "../assets/Pages/Blog/Blog";

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
        path: "Service",
        element: <Service />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Project",
        element: <Project />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
