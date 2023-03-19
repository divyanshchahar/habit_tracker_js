import header from "./layouts/header";
import datePicker from "./componenets/datePicker";

import "./index.css";

const body = document.querySelector("body");
const rootDiv = document.createElement("div");

rootDiv.setAttribute("id", "root");

header(body);

body.append(rootDiv);

datePicker(rootDiv);
