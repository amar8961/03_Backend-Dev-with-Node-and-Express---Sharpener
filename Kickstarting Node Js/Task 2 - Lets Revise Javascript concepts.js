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

//  *** Understanding Spread & Rest Operators ***
const hobbies4 = ["Sports4", "Coocking4"];
const copiedArray = hobbies4.slice(); // The slice() method returns selected elements in an array, as a new array.
console.log(copiedArray);

const hobbies5 = ["Sports5", "Coocking5"];
const copiedArray2 = [hobbies5]; // Create a nested array
console.log(copiedArray2);

const hobbies6 = ["Sports6", "Coocking6"];
const copiedArray3 = [...hobbies6]; // spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
console.log(copiedArray3);

const person3 = {
  name: "Amar-person3",
  age: 26,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
const copiedPerson = { ...person3 }; // spread operator ( ... )
console.log(copiedPerson);

const toArray = (...args) => {
  // ( ... ) Rest Operators -> are you using (...) it to merge multiple arguments into an array and you use it in the argument list of a function then it's the Rest Operators.
  return args;
};
console.log(toArray(4, 5, 6, 7));

//  >>> Task Question - Watch video 15 and create a student object <<<
const student = {
  classes: "Class-1 to CLass-10",
  Section: "A, B, C, D",
  Estd: 2016,
};
const copiedStudent = { ...student }; // / ( ... ) using as spread operator
console.log(copiedStudent);

const student2 = ["Amar", "Section-A"];
const copiedStudent2 = [...student2]; // ( ... ) using as spread operator
console.log(student2);

const studenttoArray = (...args) => {
  // ( ... ) using as Rest Operator.
  return args;
};
console.log(toArray("AK", "Section-B", "Roll No.-4"));
