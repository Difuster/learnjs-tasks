function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(extractCurrencyValue(prompt("Введите сумму", "")));
