import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Ensure App contains <Outlet />
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the layout component
    children: [
      { path: "/", element: <h1>Home</h1> },
      { path: "/orders", element: <div>Orders</div> },
      { path: "/about", element: <div>About</div> },
    ],
  },
]);

export default router; // ✅ Ensure export is correct
