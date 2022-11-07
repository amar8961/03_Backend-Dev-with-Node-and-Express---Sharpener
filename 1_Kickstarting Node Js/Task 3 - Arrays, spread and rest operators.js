//  *** Task Question ***
// 2
const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
console.log(array);
const array2 = [];
array.map((i) => {
  i === " " ? array2.push("empty string") : array2.push(i);
});
// array.map((i) => {
//   if(i===" "){
//     array2.push("empty string")
//   } else {
//     array2.push(i)
//   }
// })
console.log(array2);

// 3
// Object in Arrays are so-called Reference Types therefor when we store an array in a 'const' hobbies we can edit this without any error.
const hobbies3 = ["Sports3", "Coocking3"];
hobbies3.push("Coding");
console.log(hobbies3);

// 4) spread operator ( ... )
const hobbies6 = ["Sports6", "Coocking6"];
const copiedArray3 = [...hobbies6]; // spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
console.log(copiedArray3);

// 5) Rest Operators ( ... )
const toArray = (...args) => {
  // ( ... ) Rest Operators -> are you using (...) it to merge multiple arguments into an array and you use it in the argument list of a function then it's the Rest Operators.
  return args;
};
console.log(toArray(4, 5, 6, 7));

// What will be the output of this
// 1) 
const obj1 = {'key1': 1}
const obj2 = { ...obj1}
if(obj2 === obj1){
console.log('same objects')
}
else{
console.log('different objects')
}

//2) 
const obj3 = {'key1': 1 , 'key2' : 2}
const obj4 = { ...obj3, key1: 1000}
console.log(obj3)
console.log(obj4)