function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
  }

  this.calculate = function(str) {
    let [a, operator, b] = str.split(" ");

    if (!this.methods[operator] || isNaN(+a) || isNaN(+b)) {
      return "Проверьте правильность ввода"
    }

    return this.methods[operator](+a, +b);
  }

  this.addMethod = function(method, fn) {
    this.methods[method] = fn;
  }
}
