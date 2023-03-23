/**
 * Function to calculate number of habit scheduled on a day
 * @param {Date} date - Date on which we need to calculate habit numbers
 * @param {Array} habitData - Array containign habit data
 * @returns {Number} - Number of habits on the given date
 */
function getHabits(date, habitData) {
  let habitCount = 0;
  let habitCompleted = 0;

  habitData.map((item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);

    if (date >= startDate && date <= endDate) {
      habitCount += 1;
      if (
        item.completed.includes(
          `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        )
      ) {
        habitCompleted = +1;
      }
    }
  });

  return `${habitCompleted}/${habitCount}`;
}

export default getHabits;
