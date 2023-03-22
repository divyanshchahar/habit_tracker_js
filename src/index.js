import header from "./layouts/header";
import datePicker from "./componenets/datePicker";
import inputform from "./layouts/inputform";
import minMaxDate from "./utils/minMaxDate";

import "./index.css";

const body = document.querySelector("body");
const rootDiv = document.createElement("div");
const buttonContainer = document.createElement("div");
const addButton = document.createElement("button");

rootDiv.setAttribute("id", "root");

addButton.innerText = "+";

addButton.classList.add("btn");

buttonContainer.classList.add("button-container");

addButton.addEventListener("click", () => {
  inputform(rootDiv);
});

header(body);
buttonContainer.append(addButton);
datePicker(buttonContainer, rootDiv);
rootDiv.append(buttonContainer);

body.append(buttonContainer);
body.append(rootDiv);

minMaxDate();
