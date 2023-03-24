import toggleHabits from "../utils/toggleHabits";

function dayReport(parentElement, date) {
  if (document.querySelector("#today-habit")) {
    document.querySelector("#today-habit").remove();
  }

  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA"));

  const popup = document.createElement("dialog");
  const span = document.createElement("span");
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");

  popup.classList.add("popup");
  legend.innerText = "Habits";
  fieldset.classList.add("form-container");
  fieldset.append(legend);

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

  popup.append(span);
  parentElement.append(popup);

  popup.showModal();
}

export default dayReport;
