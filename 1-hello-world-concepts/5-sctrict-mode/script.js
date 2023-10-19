"use strict"

function main() {
  try {
    // 1. Cannot use variables before declaring
    a = 10; //ReferenceError
    console.log("Value of a is:", a);

    // 2. Cannot use reserved words (keywords that can be part of language in future)
    var interface = "hello world, from interface"; // SyntaxError
    console.log(interface); 

  } catch (err) {
    handleError(err);
  }
}

main();

// helper function to handle errors
function handleError(error) {
  if(error instanceof Error) {
    let errorResponse = {
      type: error.name,
      message: error.message
    }
    console.error("Error:", errorResponse);
  }
}


