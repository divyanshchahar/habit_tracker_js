import dayReport from "../layouts/dayReport";

/**
 * Function to render `dayReport`
 * @param {String} habitStatus - string containing `habitScore`
 * @param {HTMLElement} parentContainer - root HTML elemet which will be parent to the UI
 * @param {Date} date - date whose report has to be rendered
 */
function renderDayReport(habitStatus, parentContainer, date) {
  if (habitStatus === "0/0") {
    alert("No habits scheduled for this day");
    return;
  }

  dayReport(parentContainer, date);
}

export default renderDayReport;
