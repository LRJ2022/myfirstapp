import React from "react";
import ReactDOM from "react-dom"; //her kan vi gøre brug af ReactDom, fejlbeskederne kommer fra jconfig.js filen, denne function er der eller ikke normalt.
import App from "./App"

let name="Alice"
let e=<h1>Hello</h1>

ReactDOM.render(
   <App/>,
document.getElementById("root")
);


