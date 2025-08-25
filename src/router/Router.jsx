import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import Search from "../pages/Search/Search";
import DonationRequest from "../pages/DonationRequest/DonationRequest";
import Blog from "../pages/Blog/Blog";
import Funding from "../pages/Funding/Funding";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      { path: "signin", Component: Login },

      {
        path: "signup",
        loader: async () => {
          const districtResponse = await fetch("/districts.json");
          const districtsData = await districtResponse.json();
          const divisionsResponse = await fetch("/upazila.json");
          const upazilaData = await divisionsResponse.json();

          return { districtsData, upazilaData };
        },
        Component: Register,
      },
      {
        path: "search",
        loader: async () => {
          const districtResponse = await fetch("/districts.json");
          const districtsData = await districtResponse.json();
          const divisionsResponse = await fetch("/upazila.json");
          const upazilaData = await divisionsResponse.json();

          return { districtsData, upazilaData };
        },
        Component: Search,
      },
      {
        path: "donation-request",
        Component: DonationRequest,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "funding",
        Component: Funding,
      },
    ],
  },
]);

export default router;
