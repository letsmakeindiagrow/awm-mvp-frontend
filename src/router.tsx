import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Disclaimer from "./pages/disclaimer"; // Import Register page
import App from "./App";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap everything inside App
    children: [
      { path: "/", element: <Home /> }, // Home page
      { path: "/disclaimer", element: <Disclaimer /> }, // Register page
    ],
  },
]);

export default appRouter;
