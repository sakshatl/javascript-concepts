// === CLONING ======

/*
  - We can create a new object and replicate its properties and structre 
    by iterating over its properties and copying them
*/

let user = {
  name: "Sakshat",
  age: 25
};

// 1. Using for...in loop

let clone1 = {};

for (let key in user) {
  clone1[key] = user[key];
}

console.log("clone1:", clone1);

// 2. Using Object.assign()

/*
  - SYNTAX: Object.assign(DESTINATION, ...SOURCES)

  - The first argument is the target object
  - Further arguments is list of source objects
  - It copies the properties of the source objects inot the destination and returns the result
*/

let clone2 = Object.assign({ }, user);
console.log("clone2", clone2);

// 3. Deep Cloning / Structure Cloning (copying nested objects)

user['address'] = {
  city: 'New Delhi',
  pincode: '110017'
};

console.log("user:", user);


