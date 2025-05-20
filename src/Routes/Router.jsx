import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AuthenticationLayout from "../Layouts/AuthenticationLayout/AuthenticationLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import PrivateRoute from "../Provider/PrivateRoute";
import Loader from "../Components/Loader/Loader";
import DetailsNotFound from "../Pages/Services/DetailsNotFound";
import AddToCart from "../Pages/Services/AddToCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/subscriptionData.json"),
        hydrateFallbackElement: <Loader></Loader>,
        errorElement: <DetailsNotFound></DetailsNotFound>,
      },

      {
        path: "/add-to-cart/:id",
        element: (
          <PrivateRoute>
            <AddToCart></AddToCart>
          </PrivateRoute>
        ),
        loader: () => fetch("/subscriptionData.json"),
        hydrateFallbackElement: <Loader></Loader>,
        errorElement: <DetailsNotFound></DetailsNotFound>,
      },
    ],
  },

  {
    path: "auth",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },

      {
        path: "/auth/register",
        element: <Register></Register>,
      },

      {
        path: "/auth/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
