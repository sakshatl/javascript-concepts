// ==== CREATING MULTIPLE OBJECTS =====

var employee1 = {};
employee1.firstName = "Michael";
employee1.lastName = "Scott";
employee1.gender = "M";
employee1.designation = "Engineering Manager";

/*
  NOTE: 
  - to create a new employee object the above code needs to be copied and then the values need to be changed
  - or else we can create a function that takes in some parameters and returns a new employee object
*/

function createEmployeeObject(firstName, lastName, gender, designation) {
  var obj = {};
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.gender = gender;
  obj.designation = designation;

  return obj;
}

var employee2 = createEmployeeObject("Boom", "Box", "M", "Software Developer");
var employee3 = createEmployeeObject("Sarah", "Letho", "F", "Product Designer");
var employee4 = createEmployeeObject("Halo", "Cart", "M", "Product Manager");

console.log(employee1, employee2, employee3, employee4);