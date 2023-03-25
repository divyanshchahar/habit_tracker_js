/**
 * Function to toggle habits from dates
 * @param {Object} e - HTML event object
 * @param {Date} date - date of the day
 */
function toggleHabits(e, date) {
  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA"));

  if (e.target.checked) {
    habitData.map((item) => {
      if (item.id === e.target.id) {
        if (
          !item.completed.includes(
            `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
          )
        ) {
          item.completed.push(
            `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
          );
        }
      }
    });
  } else {
    habitData.map((item) => {
      if (item.id === e.target.id) {
        const index = item.completed.indexOf(
          `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        );

        if (index > -1) {
          item.completed.splice(index, 1);
        }
      }
    });
  }

  window.localStorage.setItem("HABIT_DATA", JSON.stringify(habitData));
}

export default toggleHabits;
