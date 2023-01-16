console.log(`----------------Function expression with two arguments and No return value----------------------`);

var greatest = function (num1, num2){
    var result=(num1>num2) ? `The greatest number amoung "${num1}" and "${num2}" is = ${num1}.`:
    `The greatest number amoung "${num1} and "${num2} is = ${num2}`;
    console.log(result);

}
greatest(10,-10);
greatest(800,899);

console.log(`---------Even Odd Number and fun expression using one argument with its Return Value--------`);

var evenOrOdd= function (num1){
    var newResult= num1%2==0 ? `the number ${num1} is EVEN = True number.`:
`The number ${num1} is ODD = False Number.`;
console.log(newResult);
}
evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);

console.log(`---------Length of Word Assignment--------`);
var evenOddLength = function (value){
    var result1= value.length%2==0 ?  `The length of word "${value}' is Even.`:
    `The length of word "${value}' is Odd.`
    console.log(result1);
}
evenOddLength("JavaScript");
evenOddLength("Developer");
evenOddLength("Google");


