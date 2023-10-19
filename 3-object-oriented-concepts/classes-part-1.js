// === Class in JavaScript =====

/*
  - A class is a blueprint for the object. You can create an object from the class.
  - You can think of the class as a sketch (prototype) of a house. 
  - It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.
*/

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getUserDetails() {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }
}

/*
  - A constructor is a special function that creates and initializes an object instance of a class
  - In JavaScript, a constructor gets called when an object is created using the new keyword
*/

// === Creating new objects from a class ========

const user1 = new User(
  "Terry Yang",
  "terry_yang@gmail.com",
  "udbwakbdkuw@kbwkaubdkuwab"
);

const user2 = new User(
  "Sarah Jones", 
  "sarah@foo.com", 
  "kudbwkuabdkuwabdkubaw"
);