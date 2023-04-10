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
const uploadFileInput = document.createElement("input");
const helpButton = document.createElement("a");

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

downLoadLink.innerText = "Download Data";
downLoadLink.setAttribute("href", "#");
downLoadLink.addEventListener("click", () => {
  const tempLink = document.createElement("a");

  tempLink.setAttribute(
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

  tempLink.setAttribute("download", "data");

  tempLink.click();
});

uploadFileInput.setAttribute("type", "file");
uploadFileInput.setAttribute("accept", ".json");
uploadFileInput.addEventListener("change", (e) => {
  const reader = new FileReader();

  reader.onload = () => {
    window.localStorage.setItem(
      "HABIT_DATA",
      JSON.stringify(JSON.parse(reader.result))
    );
  };

  reader.readAsText(e.target.files.item(0));
});

helpButton.innerText = "How To";
helpButton.setAttribute(
  "href",
  "https://github.com/divyanshchahar/habit_tracker_js"
);
helpButton.setAttribute("target", "_blank");

buttonContainer.classList.add("button-container");

datePicker(buttonContainer, root);
buttonContainer.append(addButton);
buttonContainer.append(editButton);
buttonContainer.append(downLoadLink);
buttonContainer.append(uploadFileInput);
buttonContainer.append(helpButton);

root.append(buttonContainer);

body.append(root);

calendar(root, `${today.getFullYear()}-${today.getMonth() + 1}`);
