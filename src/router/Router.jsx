import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { Component } from "react";
import About from "../pages/About";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "login", Component: Login },
      { path: "register", Component: Login },
    ],
  },
]);

export default router;
