import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import CartContextProvider from "./providers/CartContextProvider";
import router from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </HelmetProvider>
    </CartContextProvider>
  </StrictMode>
);
