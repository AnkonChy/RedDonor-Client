import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { Component } from "react";
import About from "../pages/About";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "login", Component: Login },
      {
        path: "register",
        loader: async () => {
          const districtResponse = await fetch("/districts.json");
          const districtsData = await districtResponse.json();
          const divisionsResponse = await fetch("/upazila.json");
          const upazilaData = await divisionsResponse.json();

          return { districtsData, upazilaData };
        },
        Component: Register,
      },
    ],
  },
]);

export default router;
