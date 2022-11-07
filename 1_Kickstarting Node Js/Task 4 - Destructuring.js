// Destructuring
// 1)
const person = {
  name: "Amar",
  age: 26,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

// 2)
const printName = (personData) => {
  console.log(personData.name);
};
printName(person);

const person2 = {
  name: "Amar2",
  age: 26,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName2 = ({ name }) => {
  console.log("from person2 -> " + name);
};
printName2(person2);

// 3)
const hobbies = ["Amar", "Karan"];
const [hobb1, hobb2] = hobbies;
console.log(hobb1, hobb2);
// in the output we not get square brackets because we're not locking an array here
// we are logging the individual values which we get via array destructuring.
