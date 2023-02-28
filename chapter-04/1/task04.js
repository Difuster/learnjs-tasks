// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. 
// Должно получиться 390.

function getSum(employeesSalaries) {
  let sum = 0;

  for (let employee in employeesSalaries) {
    sum += employeesSalaries[employee];
  }

  return sum;
}
