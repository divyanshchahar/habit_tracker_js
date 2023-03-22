function deleteHabit(e) {
  const habitData = JSON.parse(window.localStorage.getItem("HABIT_DATA"));

  const newData = habitData.filter((item) => {
    return item.id !== e.target.parentElement.id;
  });

  window.localStorage.setItem("HABIT_DATA", JSON.stringify(newData));
}

export default deleteHabit;
