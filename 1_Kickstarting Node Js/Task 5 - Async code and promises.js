// Async Code & Promises
// Async Code
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

// Promises
const fetchData2 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise-Done!");
    }, 1500);
  });
  return promise;
};

// Async / asynchronous code -> because it does not execute immediately.
setTimeout(() => {
  console.log("Promise-Timer is Done");
  fetchData2()
    .then((text2) => {
      console.log(text2);
      return fetchData2();
      // again return fetchData2() -> because if we have another use like this.
    })
    .then((text3) => {
      console.log(text3);
    });
}, 5000); // 5000 millisecond = 5 second

// synchronous code -> because it execute immediately.
console.log("Promise-Hello!");
console.log("Promise-Hi!");

//  *** Task Question - What willl be the output of this ***
// 1
console.log("a");
console.log("b");
//setTimeOut(() => console.log('c'), 3000)
setTimeout(() => {
  console.log("c");
}, 3000);
console.log("d");

// 2
console.log("a");
console.log("b");
setTimeout(() => console.log("c"), 3000);
setTimeout(() => console.log("d"), 0);
console.log("e");

// Challenge
async function task() {
  const taskData = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("c"));
    }, 3000);
  });
}

async function task2() {
  const taskData2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("d"));
    }, 0);
  });
}

console.log("a");
console.log("b");
task().then(() => {
  task2().then(() => {
    console.log("e");
  });
});