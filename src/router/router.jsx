import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Profile from "../pages/Profile";
import ProtectedRoute from "../Auth/ProtectedRoute";
import NonAuthRoute from "../Auth/NonAuthRoute";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import MyCart from "../pages/MyCart";
import Checkout from "../pages/Checkout";
import Dashboard from "../admin/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <NonAuthRoute>
            <Login />
          </NonAuthRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <NonAuthRoute>
            <Register />
          </NonAuthRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/myCart",
        element: <MyCart />,
      },
      {
        path: "/checkOut",
        element: <Checkout />,
      },
    ],
  },
]);
