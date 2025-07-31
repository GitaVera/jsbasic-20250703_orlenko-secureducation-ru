function showSalary(users, age) {
  return users
    .filter(user => user.age <= age)                     // Оставляем только тех, чей возраст <= age
    .map(user => `${user.name}, ${user.balance}`)         // Преобразуем в строку "Имя, баланс"
    .join('\n');                                          // Соединяем строки переводом строки
}
