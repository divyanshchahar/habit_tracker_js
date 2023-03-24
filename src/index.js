import header from "./layouts/header";
import datePicker from "./componenets/datePicker";
import inputform from "./layouts/inputform";
import habits from "./layouts/habits";

import calendar from "./layouts/calendar";

import "./index.css";

const today = new Date();

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

header(rootDiv);
buttonContainer.append(addButton);
buttonContainer.append(editButton);
datePicker(buttonContainer, rootDiv);
rootDiv.append(buttonContainer);

rootDiv.append(buttonContainer);
body.append(rootDiv);

calendar(rootDiv, `${today.getFullYear()}-${today.getMonth() + 1}`);
