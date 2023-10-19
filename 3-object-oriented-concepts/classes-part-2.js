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

class Admin extends User {
  constructor(name, email, password) {
    /*
      - the "super" keyword used inside the child class denotes the parent class
      - super(name, email, password) calls the super class constructor and passes the parameters
    */
    super(name, email, password);
    this.role = "admin";
  }
}

const user = new User(
  "Terry Yang",
  "terry_yang@gmail.com",
  "udbwakbdkuw@kbwkaubdkuwab"
);

const admin = new Admin(
  "Sarah Jones",
  "sarah@foo.com",
  "kudbwkuabdkuwabdkubaw"
);