function getAverageAge(users) {
  let usersAgesSum = 0;
  users.forEach(user => usersAgesSum += user.age);
  return usersAgesSum / users.length;
}
