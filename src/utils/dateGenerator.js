/**
 * Function to generate array of dates fro calendar display
 * @param {string} year - year represent as four digit number
 * @param {string} month - month strating from 0
 */
function dateGenerator(year, month) {
  const refrenceDay = new Date(year, month, 1);

  const displayDates = [];

  const lastDayofMonth = new Date(
    refrenceDay.getFullYear(),
    refrenceDay.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= lastDayofMonth; i++) {
    displayDates.push(
      new Date(refrenceDay.getFullYear(), refrenceDay.getMonth(), i)
    );
  }

  while (displayDates[0].getDay() !== 1) {
    displayDates.unshift(
      new Date(
        displayDates[0].getFullYear(),
        displayDates[0].getMonth(),
        displayDates[0].getDate() - 1
      )
    );
  }

  while (displayDates[displayDates.length - 1].getDay() !== 0) {
    displayDates.push(
      new Date(
        displayDates[displayDates.length - 1].getFullYear(),
        displayDates[displayDates.length - 1].getMonth(),
        displayDates[displayDates.length - 1].getDate() + 1
      )
    );
  }

  return displayDates;
}

export default dateGenerator;
