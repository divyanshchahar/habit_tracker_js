import header from "./layouts/header";

const body = document.querySelector("body");
const rootDiv = document.createElement("div");

rootDiv.setAttribute("id", "root");

header(body);

body.append(rootDiv);
