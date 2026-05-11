import { createBrowserRouter, Navigate } from "react-router-dom";

import PortfolioPage from "../pages/PortfolioPage";

import MainLayout from "../component/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioPage />,
  },
]);
