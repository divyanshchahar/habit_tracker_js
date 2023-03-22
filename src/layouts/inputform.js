import minMaxDate from "../utils/minMaxDate";
import addHabit from "../utils/addHabit";

function inputform(parentElement) {
  if (document.querySelector("#input-form")) {
    document.querySelector("#input-form").remove();
  }

  const [minDate, maxDate] = minMaxDate();

  const form = document.createElement("form");
  const inputLabel = document.createElement("label");
  const startDateLabel = document.createElement("label");
  const endDateLabel = document.createElement("label");
  const input = document.createElement("input");
  const startDate = document.createElement("input");
  const endDate = document.createElement("input");
  const submitButton = document.createElement("input");

  form.setAttribute("id", "input-form");

  inputLabel.setAttribute("for", "habit");
  startDate.setAttribute("for", "start-date");
  endDateLabel.setAttribute("for", "end-date");

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

  inputLabel.innerText = "Habit";
  startDateLabel.innerText = "Start Date";
  endDateLabel.innerText = "End Date";

  submitButton.addEventListener("click", (e) => {
    addHabit(e);
  });

  form.append(inputLabel);
  form.append(input);
  form.append(startDateLabel);
  form.append(startDate);
  form.append(endDateLabel);
  form.append(endDate);
  form.append(submitButton);

  parentElement.append(form);
}

export default inputform;
