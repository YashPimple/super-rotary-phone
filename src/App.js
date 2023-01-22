import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./pages/Homepage/Homepage";
import Calculate from "./pages/Calculate/Calculate";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About"
import "./App.css"
import Yoga from "./pages/Yoga/Yoga";


const Layout = () =>{
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children:[{
      path:"/",
      element:<Homepage />
    },
    {
      path:"/calculate",
      element:<Calculate />
    } ,
    {
      path:"/blogs",
      element:<Blogs />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/yoga",
      element:<Yoga />
    }
  ]
  }
]);


function App(){
  return(
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App

