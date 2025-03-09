import Register from "./Pages/Register"
import Home from "./Pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react';
import Login from "./Pages/Login";




function App() {
 const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Login/>
  },

  {
    path: "Register",
    element: <Register/>
  },

  {
    path: "Home",
    element: <Home/>
  },


 ]);

  return (
  
    <RouterProvider router={router}>
    </RouterProvider>
  
  )
}

export default App
