import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./Router/Router.jsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Contex/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </StrictMode>
  </AuthProvider>
);
