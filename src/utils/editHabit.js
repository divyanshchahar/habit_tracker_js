import utcLikeDate from "./utcLikeDate";

function editHabit(e) {
  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA"));

  console.log(habitData);
  const startDate = new Date(
    utcLikeDate(document.querySelector("#edit-start-date").value)
  );

  const endDate = new Date(
    utcLikeDate(document.querySelector("#edit-end-date").value)
  );

  if (startDate >= endDate) {
    alert("end date should be later than start date");
    return;
  }

  const habitExists =
    habitData.find((item) => {
      return item.name === document.querySelector("#edit-habit").value;
    }) || null;

  if (!habitExists) {
    const newData = habitData.map((item) => {
      if (item.id === e.target.parentElement.id) {
        return {
          ...item,
          name: document.querySelector("#edit-habit").value,
          startDate: utcLikeDate(
            document.querySelector("#edit-start-date").value
          ),
          endDate: utcLikeDate(document.querySelector("#edit-end-date").value),
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
