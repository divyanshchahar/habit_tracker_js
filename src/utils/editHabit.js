import utcLikeDate from "./utcLikeDate";

/**
 * function to edit habits
 * @param {String} habitName - name of the habit
 * @param {String} habitStartDate - habit start date
 * @param {String} habitEndDate - habit end date
 * @param {Object} e - event object
 */
function editHabit(habitName, habitStartDate, habitEndDate, e) {
  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA"));

  const startDate = new Date(utcLikeDate(habitStartDate));

  const endDate = new Date(utcLikeDate(habitEndDate));

  if (startDate >= endDate) {
    alert("end date should be later than start date");
    return;
  }

  const habitExists =
    habitData.find((item) => {
      return item.name === habitName && item.id !== e.target.parentElement.id;
    }) || null;

  if (!habitExists) {
    const newData = habitData.map((item) => {
      if (item.id === e.target.parentElement.id) {
        return {
          ...item,
          name: habitName,
          startDate: utcLikeDate(habitStartDate),
          endDate: utcLikeDate(habitEndDate),
        };
      }
      return item;
    });

    window.localStorage.setItem("HABIT_DATA", JSON.stringify(newData));

    return;
  }

  alert("Habit name exists");
}

export default editHabit;
