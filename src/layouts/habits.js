import deleteHabit from "../utils/deleteHabit";

function habits(parentElement) {
  if (document.querySelector("#habit-list")) {
    document.querySelector("#habit-list").remove();
  }

  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA"));

  if (habitData) {
    const span = document.createElement("span");

    span.setAttribute("id", "habit-list");

    habitData.map((item) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const deleteButton = document.createElement("button");

      div.setAttribute("id", item.id);
      p.innerText = item.name;
      deleteButton.innerText = "delete";

      deleteButton.addEventListener("click", (e) => {
        deleteHabit(e);
      });
      div.append(p);
      div.append(deleteButton);
      span.append(div);
    });
    parentElement.append(span);
  }
}

export default habits;
