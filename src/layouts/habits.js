import deleteHabit from "../utils/deleteHabit";
import pickerLikeDate from "../utils/pickerLikeDate";
import minMaxDate from "../utils/minMaxDate";
import editHabit from "../utils/editHabit";
import calendar from "./calendar";

/**
 * Function to render habits dialog box
 * @param {HTMLElement} parentContainer - HTML Element which will be parent to the UI
 */
function habits(parentContainer) {
  if (document.querySelector("#habit-list")) {
    document.querySelector("#habit-list").remove();
  }

  const habitData =
    JSON.parse(window.localStorage.getItem("HABIT_DATA")) || null;

  if (!habitData || habitData.length === 0) {
    alert("No habit exits, to edit habits first create some habits");
    return;
  }

  if (habitData) {
    const [minDate, maxDate] = minMaxDate();

    const today = new Date();

    const dialog = document.createElement("dialog");
    const closeButton = document.createElement("button");

    closeButton.innerText = "X";
    closeButton.classList.add("btn-close");

    closeButton.addEventListener("click", () => {
      document.querySelector("dialog").remove();
    });

    dialog.setAttribute("id", "habit-list");
    dialog.classList.add("popup");

    dialog.append(closeButton);

    habitData.map((item) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const input = document.createElement("input");
      const deleteButton = document.createElement("button");
      const editButton = document.createElement("button");
      const startDate = document.createElement("input");
      const endDate = document.createElement("input");
      const doneButton = document.createElement("button");

      div.setAttribute("id", item.id);
      div.classList.add("edit-habit-field");

      input.setAttribute("type", "text");
      input.setAttribute("value", item.name);
      input.classList.add("hidden");

      input.addEventListener("change", (e) => {
        input.value = e.target.value;
      });

      startDate.setAttribute("type", "date");
      startDate.setAttribute("name", "edit-start-date");
      startDate.setAttribute("value", pickerLikeDate(item.startDate));
      startDate.setAttribute("min", minDate);
      startDate.setAttribute("max", maxDate);
      startDate.classList.add("hidden");
      startDate.addEventListener("change", () => {
        startDate.value = e.target.value;
      });

      endDate.setAttribute("type", "date");
      endDate.setAttribute("name", "edit-end-date");
      endDate.setAttribute("value", pickerLikeDate(item.endDate));
      endDate.setAttribute("min", minDate);
      endDate.setAttribute("max", maxDate);
      endDate.classList.add("hidden");
      endDate.addEventListener("change", () => {
        endDate.value = e.target.value;
      });

      p.innerText = `${item.name} from ${item.startDate} to ${item.endDate}`;

      deleteButton.innerText = "delete";

      deleteButton.addEventListener("click", (e) => {
        deleteHabit(e);
        calendar(
          document.querySelector("#root"),
          `${today.getFullYear()}-${today.getMonth() + 1}`
        );
      });

      editButton.innerText = "edit";

      editButton.addEventListener("click", (e) => {
        p.classList.toggle("hidden");
        startDate.classList.toggle("hidden");
        endDate.classList.toggle("hidden");
        input.classList.toggle("hidden");
        e.target.classList.toggle("hidden");
        doneButton.classList.toggle("hidden");
      });

      doneButton.innerText = "SAVE";
      doneButton.classList.add("hidden");

      doneButton.addEventListener("click", (e) => {
        editHabit(e);
        p.classList.toggle("hidden");
        startDate.classList.toggle("hidden");
        endDate.classList.toggle("hidden");
        input.classList.toggle("hidden");
        e.target.classList.toggle("hidden");
        editButton.classList.toggle("hidden");
        calendar(
          document.querySelector("#root"),
          `${today.getFullYear()}-${today.getMonth() + 1}`
        );
      });

      div.append(p);
      div.append(input);
      div.append(startDate);
      div.append(endDate);
      div.append(deleteButton);
      div.append(editButton);
      div.append(doneButton);
      dialog.append(div);
    });

    parentContainer.append(dialog);

    dialog.showModal();
  }
}

export default habits;
