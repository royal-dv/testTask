import { Layout } from "@/components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./constants";
import NotFound from "@/components/404/404";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            ...routes,
            {
                path: "*",
                lazy: async () => await import("@/components/404/404")
                    .then(module => ({ Component: module.default }))
            }
        ]
    }])