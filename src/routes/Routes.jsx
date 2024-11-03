import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layouts/MainLayout";
import Details from "../pages/Details";

const detailsLoader = ({ location }) => {
    return location.state; 
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/details',
                element: <Details></Details>,
                loader: () => fetch('Products.json'), 
            }
        ]
    },
]);

export default routes;
