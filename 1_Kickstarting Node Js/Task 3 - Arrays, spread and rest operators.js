// // Async Code & Promises
// // Async Code
// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Done!");
//   }, 1500);
// };

// // Async / asynchronous code -> because it does not execute immediately.
// setTimeout(() => {
//   console.log("Timer is Done");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

// // synchronous code -> because it execute immediately.
// console.log("Hello!");
// console.log("Hi!");

// // Promises
// const fetchData2 = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise-Done!");
//     }, 1500);
//   });
//   return promise;
// };

// // Async / asynchronous code -> because it does not execute immediately.
// setTimeout(() => {
//   console.log("Promise-Timer is Done");
//   fetchData2()
//     .then((text2) => {
//       console.log(text2);
//       return fetchData2();
//       // again return fetchData2() -> because if we have another use like this.
//     })
//     .then((text3) => {
//       console.log(text3);
//     });
// }, 5000); // 5000 millisecond = 5 second

// // synchronous code -> because it execute immediately.
// console.log("Promise-Hello!");
// console.log("Promise-Hi!");

// [Watch video 17] and [Watch video 18] are wrong here.

const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
console.log(array);
const array2 = []
array.map((l) => {
  l === " " ? "Empty" : array2.push(l);
});
console.log(array2); // map() creates a new array from calling a function for every array element.
