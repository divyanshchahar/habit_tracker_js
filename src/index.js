import header from "./layouts/header";
import datePicker from "./componenets/datePicker";
import inputform from "./layouts/inputform";
import habits from "./layouts/habits";

import "./index.css";

const body = document.querySelector("body");
const rootDiv = document.createElement("div");
const buttonContainer = document.createElement("div");
const addButton = document.createElement("button");
const editButton = document.createElement("button");

rootDiv.setAttribute("id", "root");

addButton.innerText = "+";
editButton.innerText = "edit";

addButton.classList.add("btn");
editButton.classList.add("btn");

buttonContainer.classList.add("button-container");

addButton.addEventListener("click", () => {
  inputform(rootDiv);
});

editButton.addEventListener("click", () => {
  habits(rootDiv);
});

header(body);
buttonContainer.append(addButton);
buttonContainer.append(editButton);
datePicker(buttonContainer, rootDiv);
rootDiv.append(buttonContainer);

body.append(buttonContainer);
body.append(rootDiv);
