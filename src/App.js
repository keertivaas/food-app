import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { BodyElement } from "./components/BodyElement";
import { Footer } from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestDescription from "./components/RestDescription";

const IFood = () => (
  <React.Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
  </React.Fragment>
)

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <IFood/>,
    children: [
      {
        path: "/",
        element: <BodyElement/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contactus",
        element: <ContactUs/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestDescription/>
      }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appLayout}/>);