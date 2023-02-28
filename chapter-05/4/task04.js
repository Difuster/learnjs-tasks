function sumInput() {
  let numbers = [];
  let value = "";
  let sum = 0;

  do {
    value = prompt("Введите число", 0);
    let num = +value;
    if(typeof num === "number" && !isNaN(num)) {numbers.push(num)}
  } while (value !== null && !isNaN(value));

  numbers.forEach((num) => sum += num);
  return sum;
}

alert(sumInput());
