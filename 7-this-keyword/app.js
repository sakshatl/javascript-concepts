// == GLOBAL SPACE ==

console.log(this); // global object (Window)

// == FUNCTIONS ==

// A. without strict mode
function func1() {
  console.log(this); // global object (Window)
}

func1();

// B. with strict mode 
function func2() {
  "use strict";
  console.log(this); // undefined
}

func2();

// == OBJECT METHODS ==

const obj1 = {
  name: 'Sakshat',
  printName: function() {
    console.log(this); // the object itself (obj1)
  }
};

obj1.printName();

// == CALL, APPLY & BIND ==

// == ARROW FUNCTIONS ==

// - Arrow funtions do not have their own this they borrow from the lexically enclosed environment

const arrFunc1 = () => {
  console.log(this); // borrows from enclosing lexical env, which is global space (Window)
}

arrFunc1();

const someObj = {
  name: 'Brozkie',
  someFunc: function () {
    const someArrFunc = () => {
      console.log(this); // borrows from the enclosing lexical env, which is 'someObj'
    }
    someArrFunc();
  }
}

someObj.someFunc();
