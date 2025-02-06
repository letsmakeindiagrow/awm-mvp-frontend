import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
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
    ],
  },
]);

export default appRouter;
