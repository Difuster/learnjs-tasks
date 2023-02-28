function readNumber() {
  let number;

  do {
    number = prompt("Введите число", 0);
  } while (!isFinite(number));

  if(number === null) {
    return number;
  }

  return number;
}

alert(readNumber());
