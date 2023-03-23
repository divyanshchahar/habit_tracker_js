import dayReport from "../layouts/dayReport";

function renderDayReport(habitStatus, parentElement, date) {
  if (habitStatus === "0/0") {
    alert("No habits scheduled for this day");
    return;
  }

  dayReport(parentElement, date);
}

export default renderDayReport;
