function checkSpam(str) {
  let spam = ['viagra', 'XXX'];

  for (let i = 0; i < spam.length; i++) {
    if(str.toLowerCase().indexOf(spam[i].toLowerCase()) >= 0) {
      return true;
    }
  }

  return false;
}

alert(checkSpam(prompt("Введите предложение", "")));
