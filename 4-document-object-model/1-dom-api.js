
/*
  - DOM has a bunch of interfaces
  - It allows us to access elements on our HTML
*/

// document
console.log(document);

// head
console.log(document.head);

// body
console.log(document.body);

const body = document.body;

body.append('MY NEW THINGY');

const heading = document.createElement('h1');
heading.innerText = `${(new Date()).getHours()}:${(new Date()).getMinutes()}`;
body.appendChild(heading);