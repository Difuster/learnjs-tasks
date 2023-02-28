let login = prompt("Кто там?", "");

if (login === null || login === "") {
  alert("Отменено");
} else if (login === "Админ") {
  let password = prompt("Пароль?", "");

    if (password === null || password === "") {
      alert("Отменено");
    } else if (login === "Админ") {
      alert("Здравствуйте!");
    } else {
      alert("Неверный пароль");
    }

} else {
  alert("Я вас не знаю");
}
