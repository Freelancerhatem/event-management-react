import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import SignIn from "../components/Pages/SignIn/SignIn";
import SignUp from "../components/Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: 'this is error',
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);