import Layout from "@/components/layout/Layout";
import { ErrorPage } from "@/components/pages/ErrorPage";
import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { HomePage } from "@/pages/home";
import { ShopPage } from "@/pages/shop";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
