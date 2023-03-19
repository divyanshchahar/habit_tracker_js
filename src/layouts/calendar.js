import dateGenerator from "../utils/dateGenerator";
import processYearMonth from "../utils/processYearMonth";

/**
 * Function to render `Calendar`
 * @param {HTMLElement} rootElement
 * @param {string``} dateString
 */
function calendar(rootElement, dateString) {
  if (document.getElementById("calendar")) {
    document.getElementById("calendar").remove();
  }

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
    div.innerText = item.getDate();
    calendarElement.append(div);
    div.classList.add(
      item.getMonth() == month ? "current-month" : "other-month"
    );
  });

  calendarElement.setAttribute("id", "calendar");

  rootElement.append(calendarElement);
}

export default calendar;
