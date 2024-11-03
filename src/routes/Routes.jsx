import App from "../App";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layouts/MainLayout";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);

  export default routes;