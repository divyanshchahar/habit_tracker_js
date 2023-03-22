import utcLikeDate from "./utcLikeDate";
import { v4 as uuidv4 } from "uuid";

/**
 * Adds a new habit
 * @param {Object} e - html event object
 * @returns
 */
function addHabit(e) {
  e.preventDefault();

  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA")) || [];

  if (!document.querySelector("#habit").value) {
    alert("Please enter a habit");
    return;
  }

  const startDate = new Date(
    utcLikeDate(document.querySelector("#start-date").value)
  );

  const endDate = new Date(
    utcLikeDate(document.querySelector("#end-date").value)
  );

  if (startDate >= endDate) {
    alert("end date should be later than start date");
    return;
  }

  const habitExists =
    habitData.find((item) => {
      return item.name === document.querySelector("#habit").value;
    }) || null;

  if (!habitExists) {
    habitData.push({
      id: uuidv4(),
      name: document.querySelector("#habit").value,
      startDate: utcLikeDate(document.querySelector("#start-date").value),
      endDate: utcLikeDate(document.querySelector("#end-date").value),
      completed: [],
    });

    window.localStorage.setItem("HABIT_DATA", JSON.stringify(habitData));

    return;
  }

  alert("Habit name exists");
}

export default addHabit;
