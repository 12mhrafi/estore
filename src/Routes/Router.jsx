import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage";
import SingleProduct from "../Pages/Home/ProductList/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage /> ,
    children: [
        {
            index: true,
            path: "/",
            element: <PrivateRoute>
               <Home />
            </PrivateRoute>
        },
        {
          path: "/singleProduct/:id",
          loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
          element: <SingleProduct></SingleProduct>
        },
        {
          path: "/cart",
          element: <PrivateRoute><Cart></Cart></PrivateRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        }
    ]
  },
]);

export default router;