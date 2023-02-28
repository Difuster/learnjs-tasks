function topSalary(salaries) {
  let maxSalary = 0;
  let employeeName = "";

  for(let [name, salary] of Object.entries(salaries)) {
    if(salary > maxSalary) {
      maxSalary = salary;
      employeeName = name;
    }
  }

  return employeeName;
}
