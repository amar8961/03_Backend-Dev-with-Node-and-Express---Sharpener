// Async Code & Promises
const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

// Async / asynchronous code -> because it does not execute immediately.
setTimeout(() => {
  console.log("Timer is Done");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

// synchronous code -> because it execute immediately.
console.log("Hello!");
console.log("Hi!");
