function header(arg) {
  const nav = document.createElement("header");
  const habit = document.createElement("p");
  const user = document.createElement("p");

  habit.innerText = "--";
  user.innerText = "--";

  habit.classList.add("habit-status");
  user.classList.add("selected-user");

  nav.append(habit);
  nav.append(user);

  arg.append(nav);
}

export default header;
