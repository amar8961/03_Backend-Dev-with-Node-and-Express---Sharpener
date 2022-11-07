//  *** Understanding Arrow Functions ***
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

//  anonymous arrow function
const addRandom = () => 2 + 3;
console.log(addRandom());

//  *** Working with Objects, Properties & Methods ***
const person = {
  name: "Amar",
  age: 26,
};
console.log(person);

const person2 = {
  name: "Amar",
  age: 26,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
person2.greet();

//  *** Arrays & Array Methods ***
const hobbies = ["Sports", "Coocking"];
for (let hobby of hobbies) {
  console.log(hobby);
}

const hobbies2 = ["Sports2", "Coocking2"];
console.log(hobbies2);
console.log(hobbies2.map((hobby) => "Hobby: " + hobby)); // map() creates a new array from calling a function for every array element.

//  *** Arrays, Objects & Reference Types ***
// Object in Arrays are so-called Reference Types
// therefor when i store an array in a 'const' hobbies3 we can edit this.
const hobbies3 = ["Sports3", "Coocking3"];
hobbies3.push("Coding");
console.log(hobbies3);

//  >>> Task Question - Write an arrow function which returns the product of two numbers <<<
const task = (a, b) => {
  return a + b;
};
console.log(task(5, 6));
