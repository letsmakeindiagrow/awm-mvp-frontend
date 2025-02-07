import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import Disclaimer from "./pages/disclaimer"; // Import Register page
import AboutPage from "./pages/about";
import App from "./App";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap everything inside App
    children: [
      { path: "/", element: <Home /> }, // Home page
      { path: "/disclaimer", element: <Disclaimer /> }, // Register page
      {
        path: "/about",
        element: <AboutPage />, // About page at /about
      },
    ],
  },
]);

export default appRouter;
