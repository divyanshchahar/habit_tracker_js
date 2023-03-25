import dateGenerator from "../utils/dateGenerator";
import processYearMonth from "../utils/processYearMonth";
import getHabits from "../utils/getHabits";
import renderDayReport from "../utils/renderDayReport";

/**
 * Function to render Calendar
 * @param {HTMLElement} rootElement - HTML Element which is going to be the parent to the UI
 * @param {String} dateString - Date in the form YYYY-M i.e. 2023-3
 */
function calendar(rootElement, dateString) {
  if (document.getElementById("calendar")) {
    document.getElementById("calendar").remove();
  }

  const habitData =
    JSON.parse(window.localStorage.getItem("HABIT_DATA")) || null;

  const calendarElement = document.createElement("span");

  const [year, month] = processYearMonth(dateString);

  const displayDates = dateGenerator(year, month);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  daysOfWeek.map((item) => {
    const div = document.createElement("div");
    div.innerText = item;
    div.classList.add("weekday-name");
    calendarElement.append(div);
  });

  displayDates.map((item) => {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.classList.add("daily-count");
    p.innerText = getHabits(item, habitData);

    div.innerText = item.getDate();
    div.classList.add(
      item.getMonth() == month ? "current-month" : "other-month"
    );

    div.addEventListener("click", () => {
      renderDayReport(p.innerText, rootElement, item);
    });

    div.append(p);
    calendarElement.append(div);
  });

  calendarElement.setAttribute("id", "calendar");
  rootElement.append(calendarElement);
}

export default calendar;
