import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import App from "./App";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />, // Home page at the root path
      },
      {
        path: "/about",
        element: <AboutPage />, // About page at /about
      },
    ],
  },
]);

export default appRouter;
