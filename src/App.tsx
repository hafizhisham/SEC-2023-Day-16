import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Definition from "./pages/Definitions";
import "./App.css";
import { BASEURL } from "../constant/config";

function App() {
  const router = createBrowserRouter([
    {
      path: BASEURL,
      element: <Home />,
    },
    {
      path: BASEURL + ":word",
      element: <Definition />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
