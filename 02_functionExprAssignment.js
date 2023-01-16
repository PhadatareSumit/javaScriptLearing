var square = function (value1){
var result = value1 * value1;
// console.log("result", result);
return result;
}
var result = square(5);
console.log("square of 5:",result);
var result = square(6);
console.log("square of 6:",result);
var result = square(25);
console.log("square of 25:",result);
var result = square(100);
console.log("square of 100:",result);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",);


// console.log("type of square:");
console.log("typeof square is:", typeof square);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",);

var areaOfRectanglePlot = function (value1, value2){
    var result = value1 * value2;
// console.log("result", result);
//using result
return result;
}
var result = areaOfRectanglePlot (917,499);
console.log("Area Of Rectangle Plot",result);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",);

// without using result
var swap = function (value1, value2){
    var result = value1;
console.log("Before swap:", value1,value2);
var temp = value1;
var value1 = value2;
var value2= temp;
console.log("After swap:",value1,value2);
}
swap ("Virat", "Anushka");
swap (1000,2000);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",);

var statement = "JS the most popular language";
console.log("given string is statement is -",statement );

console.log("Total character of string is-",statement.length);

console.log("The character at index 6 is-",statement.charAt(6));

console.log("The character at index 11 is-",statement.charAt(11));

console.log("The last character of statement is-",statement.length-1);

var lengthTotal= statement.length;
console.log("The last character of statement is-",statement.charAt(lengthTotal-1));

console.log("The first character at index is-",statement.charAt(0));

console.log("Total length of string is-",statement.length);

// console.log("Square of string length is-",statement.length * statement.length);

var squareLength = function (value){
    console.log("Square of total length of string is-",value * value);
}
squareLength(28);




