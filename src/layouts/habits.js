import deleteHabit from "../utils/deleteHabit";
import pickerLikeDate from "../utils/pickerLikeDate";
import minMaxDate from "../utils/minMaxDate";
import editHabit from "../utils/editHabit";

function habits(parentElement) {
  if (document.querySelector("#habit-list")) {
    document.querySelector("#habit-list").remove();
  }

  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA"));

  if (habitData) {
    const [minDate, maxDate] = minMaxDate();

    const span = document.createElement("dialog");

    span.setAttribute("id", "habit-list");
    span.classList.add("popup");

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
      input.setAttribute("id", "edit-habit");
      input.setAttribute("value", item.name);
      startDate.setAttribute("type", "date");
      startDate.setAttribute("id", "edit-start-date");
      startDate.setAttribute("name", "start-date");
      startDate.setAttribute("value", pickerLikeDate(item.startDate));
      startDate.setAttribute("min", minDate);
      startDate.setAttribute("max", maxDate);
      endDate.setAttribute("type", "date");
      endDate.setAttribute("id", "edit-end-date");
      endDate.setAttribute("name", "end-date");
      endDate.setAttribute("value", pickerLikeDate(item.endDate));
      endDate.setAttribute("min", minDate);
      endDate.setAttribute("max", maxDate);

      p.innerText = item.name;
      deleteButton.innerText = "delete";
      editButton.innerText = "edit";
      doneButton.innerText = "SAVE";

      input.classList.toggle("hidden");
      startDate.classList.toggle("hidden");
      endDate.classList.toggle("hidden");
      doneButton.classList.toggle("hidden");

      deleteButton.addEventListener("click", (e) => {
        deleteHabit(e);
      });

      editButton.addEventListener("click", (e) => {
        p.classList.toggle("hidden");
        startDate.classList.toggle("hidden");
        endDate.classList.toggle("hidden");
        input.classList.toggle("hidden");
        e.target.classList.toggle("hidden");
        doneButton.classList.toggle("hidden");
      });

      doneButton.addEventListener("click", (e) => {
        editHabit(e);
        p.classList.toggle("hidden");
        startDate.classList.toggle("hidden");
        endDate.classList.toggle("hidden");
        input.classList.toggle("hidden");
        e.target.classList.toggle("hidden");
        editButton.classList.toggle("hidden");
      });

      div.append(p);
      div.append(input);
      div.append(startDate);
      div.append(endDate);
      div.append(deleteButton);
      div.append(editButton);
      div.append(doneButton);
      span.append(div);
    });
    parentElement.append(span);
    span.showModal();
  }
}

export default habits;
