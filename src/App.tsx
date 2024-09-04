import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminLayout from "./layouts/AdminLayout";
import LandingPage from "./pages/landing/LandingPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AdminPage from "./pages/admin/AdminPage";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingLayout />,
      children: [{ path: "/", element: <LandingPage /> }],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [{ path: "/dashboard", element: <DashboardPage /> }],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [{ path: "/admin", element: <AdminPage /> }],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "/auth/login", element: <LoginPage /> },
        { path: "/auth/register", element: <RegisterPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
