// ==== CONSTRUCTOR FUNCTIONS ======

/*
  - A constructor function is just a regular function 
  - It allows us to create one or more object instances
  - There are 2 convention when using contructor functions:
    1. They are named with first letter as capital
    2. They are excuted only with the "new" keyword
*/

function User(fisrtName, lastName, gender, age) {
  this.fisrtName = fisrtName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

const user1 = new User("Naruot", "Uzumaki", "M", 11);
const user2 = new User("Hinata", "Hyuga", "F", 11);
const user3 = new User("Itachi", "Uchiha", "M", 20);

console.log(user1);
console.log(user2);
console.log(user3);