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

//  *** Task - Q) What will be the output of the following ? ***
// 1
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
const { key1, key3 } = { ...obj1 };
console.log(key1, key3);

// 2
const arr1 = ['value1', 'value2']
const [ val1, val2 ] = arr1

console.log(val1)
console.log(val2)

// 3
const obj2 = {'key1': 1, "key2": 2, "key3": 1000}
let { key4, key6}  = obj2
key4 = 20;
key6 = 123

console.log(obj2.key1, obj2.key3)
