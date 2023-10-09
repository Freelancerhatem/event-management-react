import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import SignIn from "../components/Pages/SignIn/SignIn";
import SignUp from "../components/Pages/SignUp/SignUp";
import Details from "../components/EventCard/Details/Details";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Error from "../components/Pages/Error/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/public/event.json')
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        },
        {
            path:'details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:()=>fetch('/public/event.json')
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        
      ]
    },
  ]);