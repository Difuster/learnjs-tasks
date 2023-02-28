let x = +prompt("Введите число", "1");
let n = +prompt("Введите степень", "1");

function pow(a, b) {
  if(b < 1 || isNaN(b)) {
    return alert("Степень  не поддерживается, используйте натуральное число");
  }

  return alert(a ** b);
}

pow(x, n);
