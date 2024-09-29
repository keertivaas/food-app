import React from "react";
import ReactDOM from "react-dom/client";
{
  /* <div id = "parent">
    <div id = "child1">
        <h1>Hi I am Mr H1</h1>
        <h2>Hi I am Mr H1</h2>
    </div>
    <div id = "child2">
        <h1>Hi I am Mr H1</h1>
        <h2>Hi I am Mr H1</h2>
    </div>
</div> */
}

const helloWorldHeader = React.createElement(
  "h1",
  { id: "header" },
  "Hello World from React!!!"
); //returns object

const header = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi I am Mr H1"),
    React.createElement("h2", {}, "Hi I am Mr H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I am Mr H1"),
    React.createElement("h2", {}, "Hi I am Mr H2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header); //converts object into h1 tag and puts it in root
