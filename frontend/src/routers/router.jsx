import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App"; // Ensure App contains <Outlet />
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../components/CartPage";
import Checkoutpage from "../components/Checkoutpage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import Orderpage from "../components/Orderpage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/Editbook/UpdateBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {path:'/admin',
        element:<AdminLogin/>
      },
      { path: "/orders", element: <Orderpage /> },
      { path: "/about", element: <div>About</div> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <PrivateRoute><Checkoutpage /></PrivateRoute> },
      { path: "/books/:id", element: <SingleBook /> },
      {path:"/admin",element:<AdminRoute><AdminLogin/></AdminRoute>},
      {
        path: "/dashboard",
        element: <AdminRoute><DashboardLayout/> </AdminRoute>,
        children: [
          { path: "", element: <AdminRoute><Dashboard/></AdminRoute> },
          { path: "add-new-book", element: <AdminRoute><AddBook/></AdminRoute> },
          { path: "edit-book/:id", element: <AdminRoute><UpdateBook/> </AdminRoute> },
          { path: "manage-books", element: <AdminRoute><ManageBooks/></AdminRoute> }
        ]
      }
    ]
  }
]);

export default router;
