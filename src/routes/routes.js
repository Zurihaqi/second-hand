import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import InputProfil from "../pages/InputProfil/InputProfil";
import DaftarJual from "../pages/DaftarJual/DaftarJual";
import DetailProduk from "../pages/DetailProduk";
import DetailPenawaran from "../pages/DetailPenawaran/DetailPenawaran";
import DetailProdukSeller from "../pages/DetailProdukSeller/DetailProdukSeller";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoutes />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/profile",
          element: <InputProfil />,
        },
        {
          path: "/listed-product",
          element: <DaftarJual />,
        },
        {
          path: "/product-detail",
          element: <DetailProduk />,
        },
        {
          path: "/tender-detail",
          element: <DetailPenawaran />,
        },
        {
          path: "/product-detail-seller",
          element: <DetailProdukSeller />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
    // Wildcard route for 404, redirect to home
    { path: "*", element: <Navigate to="/" replace /> },
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
