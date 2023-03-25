import minMaxDate from "../utils/minMaxDate";
import addHabit from "../utils/addHabit";

/**
 * Function to render input form for habits
 * @param {HTMLElement} parentContainer - HTML Element which will be the parent of the UI
 */
function inputform(parentContainer) {
  if (document.querySelector("#input-form")) {
    document.querySelector("#input-form").remove();
  }

  const [minDate, maxDate] = minMaxDate();

  const popup = document.createElement("dialog");
  const form = document.createElement("form");
  const inputLabel = document.createElement("label");
  const startDateLabel = document.createElement("label");
  const endDateLabel = document.createElement("label");
  const input = document.createElement("input");
  const startDate = document.createElement("input");
  const endDate = document.createElement("input");
  const submitButton = document.createElement("input");
  const closeButton = document.createElement("button");

  form.setAttribute("id", "input-form");
  popup.classList.add("popup");

  inputLabel.setAttribute("for", "habit");
  inputLabel.innerText = "Habit";

  startDate.setAttribute("for", "start-date");
  startDateLabel.innerText = "Start Date";

  endDateLabel.setAttribute("for", "end-date");
  endDateLabel.innerText = "End Date";

  input.setAttribute("type", "text");
  input.setAttribute("id", "habit");
  input.setAttribute("name", "habit");

  startDate.setAttribute("type", "date");
  startDate.setAttribute("id", "start-date");
  startDate.setAttribute("name", "start-date");
  startDate.setAttribute("value", minDate);
  startDate.setAttribute("min", minDate);
  startDate.setAttribute("max", maxDate);

  endDate.setAttribute("type", "date");
  endDate.setAttribute("id", "end-date");
  endDate.setAttribute("name", "end-date");
  endDate.setAttribute("value", maxDate);
  endDate.setAttribute("min", minDate);
  endDate.setAttribute("max", maxDate);

  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");

  submitButton.addEventListener("click", (e) => {
    addHabit(e);
  });

  closeButton.innerText = "X";
  closeButton.classList.add("btn-close");
  closeButton.addEventListener("click", () => {
    document.querySelector("dialog").remove();
  });

  form.append(inputLabel);
  form.append(input);
  form.append(startDateLabel);
  form.append(startDate);
  form.append(endDateLabel);
  form.append(endDate);
  form.append(submitButton);

  popup.append(closeButton);
  popup.append(form);
  parentContainer.append(popup);

  popup.showModal();
}

export default inputform;
