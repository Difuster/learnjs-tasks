let number = 10;

nextNumber: for (let i = 2; i <= number; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextNumber;
  }

  alert( i );
}
