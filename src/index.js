import React from "react";
import ReactDOM from "react-dom"; //her kan vi gøre brug af ReactDom, fejlbeskederne kommer fra jconfig.js filen, denne function er der eller ikke normalt.
import GetWinner from "./Topscore";
import App from "./split_PlayerInsector"
import { ClassComponent } from "./ClassComponent";

let name="Alice"
let e=<h1>Hello</h1>

ReactDOM.render(
   <ClassComponent name={name} />,
document.getElementById("root")
);


