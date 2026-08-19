import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/dashboard";
import Navbar from "./components/Navbar";
import ParaCom from "./components/ParaCom";
import Courses from "./components/Courses";
import Test from "./components/Test";
import Reports from "./components/Reports";
import Notfound from "./components/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },

  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children: [
      {
        path: "course",
        element: <Courses />,
      },
      {
        path: "mocktest",
        element: <Test />,
      },
      {
        path: "report",
        element: <Reports />,
      },
    ],
  },

  {
    path: "/student/:id",
    element: (
      <>
        <Navbar />
        <ParaCom />
      </>
    ),
  },
  {
      path:"*",
      element:<Notfound/>
    }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;