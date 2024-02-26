import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import PostAJob from "./pages/PostAJob";
import { Jobs } from "./pages/Jobs";
import Job from "./pages/Job";

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
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/postjob",
        element: <PostAJob />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
    ],
  },
  {
    path: "/job/:id",
    element: <Job />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);
