import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./components/pages/Homepage";
import { Projects } from "./components/pages/Projects";
import { Services } from "./components/pages/Services";
import { Agency } from "./components/pages/Agency";
import { Blog } from "./components/pages/Blog";
import { Contact } from "./components/pages/Contact";
import { JoinUs } from "./components/pages/JoinUs";
import { Mentions } from "./components/pages/Mentions";
import { CGU } from "./components/pages/CGU";
import { NotFound } from "./components/pages/NotFound";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <NotFound />,
        path: "*",
      },
      {
        index: true,
        element: <Homepage />,
      },
      {
        element: <Projects />,
        path: "/projets",
      },
      {
        element: <Services />,
        path: "/services",
      },
      {
        element: <Agency />,
        path: "/agence",
      },
      {
        element: <Blog />,
        path: "/blog",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
      {
        element: <JoinUs />,
        path: "/recrutement",
      },
      {
        element: <Mentions />,
        path: "/mentionslegales",
      },
      {
        element: <CGU />,
        path: "/cgu",
      },
    ],
  },
]);
