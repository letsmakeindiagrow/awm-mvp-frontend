import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Disclaimer from "./pages/disclaimer"; // Import Disclaimer page
import App from "./App";
import Registration from "./pages/registration";
import AboutPage from "./pages/about";
import Login from "./pages/login";
import ComingSoonPage from "./pages/comingsoon";
import Contact from "./pages/Contact";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Dashboard from "./pages/ClientDashboard";
import LoginPage from "./pages/Fyers"
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap everything inside App
    children: [
      { path: "/", element: <Home /> }, // Home page
      { path: "/disclaimer", element: <Disclaimer /> }, // Register page
      { path: "/registration", element: <Registration /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/login", element: <Login /> },
      { path: "/comingsoon", element: <ComingSoonPage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/dashboard", element: <Dashboard /> },
      {path: "/fyers", element: <LoginPage />}
    ],
  },
]);

export default appRouter;
