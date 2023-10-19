function User(fisrtName, lastName, gender, age) {
  this.fisrtName = fisrtName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

const user = new User("Terry", "Yang", "M", 25);

console.log(user);