import calendar from "../layouts/calendar";

/**
 * Function to render `Calendar` on change of date
 * @param {HTMLElement} buttonContainer
 */
function datePicker(buttonContainer, rootDiv) {
  const monthSelector = document.createElement("input");

  const today = new Date();

  const currentYear = today.getFullYear();

  const currentMonth =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : `${today.getMonth() + 1}`;

  const defaultValue = `${currentYear}-${currentMonth}`;

  monthSelector.setAttribute("type", "month");
  monthSelector.setAttribute("id", "month-selector");
  monthSelector.setAttribute("value", defaultValue);

  monthSelector.addEventListener("change", (e) => {
    calendar(rootDiv, e.target.value);
  });

  buttonContainer.append(monthSelector);
}

export default datePicker;
