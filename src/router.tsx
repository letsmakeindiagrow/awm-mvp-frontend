import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Disclaimer from "./pages/disclaimer"; // Import Disclaimer page
import App from "./App";
import Registration from "./pages/registration";
import AboutPage from "./pages/about";
import Login from "./pages/login"
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap everything inside App
    children: [
      { path: "/", element: <Home /> }, // Home page
      { path: "/disclaimer", element: <Disclaimer /> }, // Register page
      {path: "/registration", element: <Registration />} ,
      {path: "/about",element: <AboutPage />},
      {path: "/login",element:<Login />}
    ],
  },
]);

export default appRouter;
