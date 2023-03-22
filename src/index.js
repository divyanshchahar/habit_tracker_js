import header from "./layouts/header";
import datePicker from "./componenets/datePicker";
import inputform from "./layouts/inputform";
import minMaxDate from "./utils/minMaxDate";

import "./index.css";

const body = document.querySelector("body");
const rootDiv = document.createElement("div");
const addButton = document.createElement("button");
const buttonContainer = document.createElement("div");

rootDiv.setAttribute("id", "root");

addButton.innerText = "+";

addButton.classList.add("btn");

addButton.addEventListener("click", () => {
  inputform(rootDiv);
});
buttonContainer.classList.add("button-container");

header(body);
rootDiv.append(addButton);
rootDiv.append(buttonContainer);
datePicker(buttonContainer, rootDiv);

body.append(rootDiv);

minMaxDate();
