import header from "./layouts/header";
import datePicker from "./componenets/datePicker";

import "./index.css";

const body = document.querySelector("body");
const rootDiv = document.createElement("div");
const buttonContainer = document.createElement("div");

rootDiv.setAttribute("id", "root");
buttonContainer.classList.add("button-container");

header(body);
body.append(rootDiv);
rootDiv.append(buttonContainer);
datePicker(buttonContainer, rootDiv);
