import { createBrowserRouter } from "react-router-dom";
import Test from "../Test";
import Products from "../Products";
import Landing from "../Landing";
import ErrorPage from "../error-page";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },

]);

export default router