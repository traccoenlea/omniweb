import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage/Homepage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "homepage",
        element: <Homepage />,
      },
    ],
  },
]);
