let calculator = {
  a: 0,
  b: 0,
  read: function() {
    this.a = +prompt("Введите первое число", this.a);
    this.b = +prompt("Введите второе число", this.b);
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
