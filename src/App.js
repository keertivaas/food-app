import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { BodyElement } from "./components/BodyElement";
import { Footer } from "./components/Footer";

const IFood = () => (
  <React.Fragment>
    <Header/>
    <BodyElement/>
    <Footer/>
  </React.Fragment>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<IFood/>);