import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Errorpage from "../Components/Errorpage";
import Registar from "../Pages/Registar";
import MyReviews from "../Pages/MyReviews";
import AddReview from "../Pages/AddReview";
import ProtectedRoute from "../Components/ProtectedRoute";
import AllReview from "../Pages/AllReview";

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
        path: "/all-review",
        element: <AllReview></AllReview>,
        loader: () =>
          fetch("http://localhost:3000/review").then((res) => res.json()),
      },
      {
        path: "/my-review",
        element: (
          <ProtectedRoute>
            <MyReviews></MyReviews>
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-review",
        element: (
          <ProtectedRoute>
            <AddReview></AddReview>
          </ProtectedRoute>
        ),
      },
      {
        path: "/*",
        element: <Errorpage></Errorpage>,
      },
    ],
  },
]);
export default router;
