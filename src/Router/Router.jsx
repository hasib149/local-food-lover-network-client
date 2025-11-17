import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Errorpage from "../Components/Errorpage";
import Registar from "../Pages/Registar";
import MyReviews from "../Pages/MyReviews";
import AddReview from "../Pages/AddReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registar",
        element: <Registar></Registar>,
      },
      {
        path: "/my-review",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/add-review",
        element: <AddReview></AddReview>,
      },
      {
        path: "/*",
        element: <Errorpage></Errorpage>,
      },
    ],
  },
]);
export default router;
