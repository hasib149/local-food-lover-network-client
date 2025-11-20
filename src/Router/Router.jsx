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
import Loader from "../Components/Loader";
import ReviewDetails from "../Pages/ReviewDetails";
import EditReview from "../Pages/EditReview";
import MyFevorites from "../Pages/MyFevorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/review-details/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/high-rating-food/${params.id}`),
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
        path: "/my-fevorites",
        element: (
          <ProtectedRoute>
            <MyFevorites></MyFevorites>
          </ProtectedRoute>
        ),
      },
      {
        path: "/edit-review/:id",
        element: <EditReview></EditReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/reviewUser/${params.id}`).then((res) =>
            res.json()
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
