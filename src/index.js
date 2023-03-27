import header from "./layouts/header";
import datePicker from "./componenets/datePicker";
import inputform from "./layouts/inputform";
import habits from "./layouts/habits";
import calendar from "./layouts/calendar";

import "./index.css";

const today = new Date();

const body = document.querySelector("body");
const root = document.createElement("div");
const buttonContainer = document.createElement("div");
const addButton = document.createElement("button");
const editButton = document.createElement("button");
const downLoadLink = document.createElement("a");

root.setAttribute("id", "root");

addButton.innerText = "+";
addButton.classList.add("btn");

addButton.addEventListener("click", () => {
  inputform(root);
});

editButton.innerText = "edit";
editButton.classList.add("btn");

editButton.addEventListener("click", () => {
  habits(root);
});

downLoadLink.innerText = "Download Link";
downLoadLink.setAttribute(
  "href",
  URL.createObjectURL(
    new File(
      [JSON.parse(JSON.stringify(window.localStorage.getItem("HABIT_DATA")))],
      "data.json",
      {
        type: "application/json",
      }
    )
  )
);
downLoadLink.setAttribute("download", "data");

buttonContainer.classList.add("button-container");

header(root);
datePicker(buttonContainer, root);
buttonContainer.append(addButton);
buttonContainer.append(editButton);
buttonContainer.append(downLoadLink);
root.append(buttonContainer);

body.append(root);

calendar(root, `${today.getFullYear()}-${today.getMonth() + 1}`);
