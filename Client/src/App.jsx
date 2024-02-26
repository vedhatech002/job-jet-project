import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/postjob",
        // element:
      },
      {
        path: "/jobs",
        // element
      },
    ],
  },
  {
    path: "/job/:id",
    // element:
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render();
