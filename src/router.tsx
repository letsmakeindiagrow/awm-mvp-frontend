import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Disclaimer from "./pages/disclaimer"; // Import Disclaimer page
import App from "./App";
import Registration from "./pages/registration";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap everything inside App
    children: [
      { path: "/", element: <Home /> }, // Home page
      { path: "/disclaimer", element: <Disclaimer /> }, // Register page
      {path: "/registration", element: <Registration />}  
    ],
  },
]);

export default appRouter;
