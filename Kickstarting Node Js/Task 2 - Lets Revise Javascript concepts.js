//  Understanding Arrow Functions
const name = "Max"; // we can't change 'const' value
let age = 29; // we can change 'let' value
const hasHobbies = true;

age = 30;
const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies: " +
    userHasHobby
  );
};
console.log(summarizeUser(name, age, hasHobbies));

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// Another way
const add1 = (a, b) => a + b;
console.log(add1(3, 4));

const addOne = (a) => a + 1;
console.log(addOne(1));

const addRandom = () => 2 + 3;
console.log(addRandom());
