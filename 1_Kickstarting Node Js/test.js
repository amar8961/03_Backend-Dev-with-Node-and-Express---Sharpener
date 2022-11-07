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
