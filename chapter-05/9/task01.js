function sumSalaries(obj) {
  let sum = 0;
  let salaries = Object.values(obj);
  salaries.forEach(salary => sum += salary);
  return sum;
}
