import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Services from "../Pages/Services/Services";
import Success from "../Pages/Success/Success";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AuthenticationLayout from "../Layouts/AuthenticationLayout/AuthenticationLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails";

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
        element: <Profile></Profile>,
      },
      {
        path: "details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("/subscriptionData.json"),
        hydrateFallbackElement: <h1>Loading....</h1>,
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
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
