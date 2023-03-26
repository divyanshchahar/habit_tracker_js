import toggleHabits from "../utils/toggleHabits";

/**
 * Funcion to render day report
 * @param {HTMLElement} parentContainer - HTML eleemt which will be parent to the UI
 * @param {Date} date - date whose report is to be rendered
 */
function dayReport(parentContainer, date) {
  if (document.querySelector("#today-habit")) {
    document.querySelector("#today-habit").remove();
  }

  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA"));

  const popup = document.createElement("dialog");
  const span = document.createElement("span");
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  const closeButton = document.createElement("button");

  popup.classList.add("popup");

  legend.innerText = "Habits";

  fieldset.classList.add("form-container");
  fieldset.append(legend);

  closeButton.innerText = "X";
  closeButton.classList.add("btn-close");
  closeButton.addEventListener("click", () => {
    document.querySelector("dialog").remove();
  });

  habitData.map((item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);

    if (date >= startDate && date <= endDate) {
      const div = document.createElement("div");
      const checkbox = document.createElement("input");
      const label = document.createElement("label");

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", item.id);
      checkbox.setAttribute("name", item.name);

      if (
        item.completed.includes(
          `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        )
      ) {
        checkbox.setAttribute("checked", "");
      }

      checkbox.addEventListener("change", (e) => {
        toggleHabits(e, date);
      });

      label.innerText = item.name;

      div.append(checkbox);
      div.append(label);
      fieldset.append(div);
    }
  });

  span.append(fieldset);

  span.setAttribute("id", "today-habit");

  popup.append(closeButton);
  popup.append(span);
  parentContainer.append(popup);

  popup.showModal();
}

export default dayReport;
