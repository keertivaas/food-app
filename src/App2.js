import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <div>Hiii bro</div>

const heading = <h1 className="header">{heading1}</h1>

// React Fn Components

// Classic Way
const HeadingComponent = function(){
  return <h1 className="header">Hi Component bro</h1>;
}

const HeadingComponentt = function(){
  return <h1 className="header">Hi Component bro</h1>;
}

// Modern Way - Without return

const HeadingComponent2 = () => (
  <React.Fragment>
    <HeadingComponent/>
    {HeadingComponentt()}
    <h1 className="header">Hi Component2 bro</h1>
    {heading}
  </React.Fragment>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);