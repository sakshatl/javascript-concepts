const start = Date.now();

// === Promise.all() ========

/*
  - Used to handle multiple promises, takes in an iterable of promises
  - Promise.all waits for all the promises to settle
  - If any of the promise reject, Promise.all also gets rejected with the same error
  - It is either good for all or nothing
*/

const promises1 = Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]);

promises1
  .then(response => {
    console.log("promises1:", response);
    console.log("ended:", `${(Date.now()  - start) / 1000} second(s)`);
  });

const promises2 = Promise.all([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error(1)), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]);

promises2
  .then(response => {
    console.log("promises2:", response);
    console.log("ended:", `${(Date.now()  - start) / 1000} second(s)`);
  })
  .catch(err => {
    console.log(err);
  })

// === Promise.allSetteled() =====

/*
  - it waits for all promises to settle
*/

const promises3 = Promise.allSettled([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error(1)), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]);

promises3
  .then(reponse => {
    console.log("promises3:", reponse);
    console.log("ended:", `${(Date.now()  - start) / 1000} second(s)`);
  });

// === Promise.race() =====

/*
  - as soon as any one of the promises settles it gives the result
  - promise can settle in case of error and success
*/

const promises4 = Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]);

promises4
  .then(response => {
    console.log("promises4:", response);
    console.log("ended:", `${(Date.now()  - start) / 1000} second(s)`);
  });

// === Promise.any() =====

/*
  - Very similary to Promise.race() the only difference is that it waits for the promise to get resolved (success)
  - It is success seeking race
*/
