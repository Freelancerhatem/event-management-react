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
import DashBoard from "../components/Pages/DashBoard/DashBoard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/event.json')
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader:()=>fetch('/event.json')
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
          path:'/dashboard',
          element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
          
       }
        
      ]
    },
  ]);