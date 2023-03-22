import header from "./layouts/header";
import datePicker from "./componenets/datePicker";
import inputform from "./layouts/inputform";
import minMaxDate from "./utils/minMaxDate";

import "./index.css";

const body = document.querySelector("body");
const rootDiv = document.createElement("div");
const addButton = document.createElement("button");

rootDiv.setAttribute("id", "root");

addButton.innerText = "+";

addButton.classList.add("btn");

addButton.addEventListener("click", () => {
  inputform(rootDiv);
});

header(body);

rootDiv.append(addButton);

datePicker(rootDiv);

body.append(rootDiv);

minMaxDate();
