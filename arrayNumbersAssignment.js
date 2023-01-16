const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is ${arrayNumbers}`);

console.log(`--------------------------------------------------------------`);
const totalLength = arrayNumbers.length
console.log(`Length of given array is:${totalLength}`);

console.log(`--------------------------------------------------------------`);

console.log(`The first element of given array is: ${arrayNumbers[0]} and The last element of given array is:${arrayNumbers[totalLength-1]}`);

console.log(`The Third last element of given array is: ${arrayNumbers[totalLength-3]}}`);

console.log(`--------------------------------------------------------------`);
console.log(`Even numbers in given array is:`);
let evenNumArray=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        evenNumArray=evenNumArray.concat(element)
    }
}
console.log(`${evenNumArray}`);
console.log(`--------------------------------------------------------------`);

let oddNumArray=[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        oddNumArray=oddNumArray.concat(element)
    }
}
console.log(`${oddNumArray}`);

console.log(`--------------------------------------------------------------`);

var pos=[]; 
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index %2== 0) {
        pos = pos.concat(arrayNumbers[index]);
    }
}
console.log(`Even positioned elements is"${pos}"`);

console.log(`--------------------------------------------------------------`);

var pos=[]; 
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index %2!= 0) {
        pos = pos.concat(arrayNumbers[index]);
    }
}
console.log(`odd positioned elements is"${pos}"`);

console.log(`--------------------------------------------------------------`);
console.log(` Sum off elements of given array`);
let sumOfElements = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  sumOfElements = sumOfElements + element;
}
console.log(sumOfElements);
console.log(`--------------------------------------------------------------`);

console.log(`Numbers which are multiples of 5`);
let multiple = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    multiple = multiple.concat(element);
  }
}
console.log(multiple);

console.log(`--------------------------------------------------------------`);

console.log(`Is number 115 available in given array`);
let numAvailable = arrayNumbers.includes(115);
console.log(numAvailable);

console.log(`--------------------------------------------------------------`);

console.log(`Is number 23 available in given array`);
let isAvailable = arrayNumbers.includes(23);
console.log(isAvailable);

console.log(`--------------------------------------------------------------`);

console.log(` Inserting 55, 66 before index 3`);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log(`--------------------------------------------------------------`);

console.log(` Deleting 3 elements starting from index 4`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);