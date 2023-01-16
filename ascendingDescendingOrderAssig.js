
const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
console.log(`Given Array is ${array_roll_numbers}`);

console.log("Reverce of given array is ");
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log("Change after using sort term ");

array_roll_numbers.sort();
console.log(array_roll_numbers);

console.log(`Array in ascending order`);
array_roll_numbers.sort((a, b)=>{
    return a>b ? 1 : -1;
 });
console.log(array_roll_numbers);

// console.log(`Array in ascending order2`);
// array_roll_numbers.sort((a, b)=>{
//     return a<b ? -1 : 1;
//  });
// console.log(array_roll_numbers);

console.log(`Array in descending order`);
array_roll_numbers.sort((a,b)=>{
    return a>b ? -1 : 1 ;
});
console.log(array_roll_numbers);

// console.log(`Array in descending order2`);
// array_roll_numbers.sort((a,b)=>{
//     return a<b ? 1 : -1 ;
// });
// console.log(array_roll_numbers);

console.log(`Biggest number in array is ==> ${array_roll_numbers[0]}`);

console.log(`smallest number in array is ==> ${array_roll_numbers[array_roll_numbers.length-1]}`);


console.log("Removing repeated numbers");
const removeDuplicateNum =[ ... new Set (array_roll_numbers)]
console.log(removeDuplicateNum);


