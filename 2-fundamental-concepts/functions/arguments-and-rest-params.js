// === Rest Parameters =====================

function add(a, b) {
  console.log(a + b);
}

function add2(a, b, ...restParams) {
  let result = a + b;
  restParams.forEach((param) => {
    result += param;
  })
  console.log(result);
}

// === Arguments Object ======================

function foo(x, y) {
  console.log(arguments); // Arguments Object
  console.log(arguments.callee);
  console.log(arguments.length); // 4

  console.log(arguments instanceof Array); // false
  console.log(arguments[0], arguments[1]); // 5 10
  console.log(Array.from(arguments)); // [5, 10, 15, 20]
}

var foo2 = (x, y) => {
  console.log(arguments); // Error: not defined
}

add(2, 3);
add2(2, 3, 4, 5);

console.log("===========================")

foo(5, 10, 15, 20);
// foo2(5, 10);