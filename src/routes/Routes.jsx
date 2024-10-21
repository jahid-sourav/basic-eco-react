import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ProductPage from "../pages/product/ProductPage";
import Me from "../pages/userDashboard/me";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const response = await fetch("https://dummyjson.com/products");

          if (!response.ok) {
            throw new Response("Failed to fetch data", { status: 500 });
          }

          const data = await response.json();

          const products = data.products;

          return products;
        },
      },
      {
        path: "/products/:productID",
        element: <ProductPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://dummyjson.com/products/${params.productID}`
          );

          if (!response.ok) {
            throw new Response("Product not found", { status: 404 });
          }

          const product = await response.json();

          return product;
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Me />,
      },
    ],
  },
]);

export default router;
