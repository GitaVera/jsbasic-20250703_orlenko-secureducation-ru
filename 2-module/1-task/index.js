function sumSalary(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    salary = parseInt(salary);
    if (!isNaN(salary)) {
      sum += parseInt(salary);
    }
  }
  return sum;
}