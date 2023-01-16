var string= "I am very good IT Developer";
console.log(`Given string is = ${string}`);
var count=0;
for (let index = 0; index < string.length; index++) {
    var charString = string.charAt(index);
    var charString = charString.toLowerCase();
    if (charString=="a" || charString=="e" || charString=="i" || charString=="o" || charString=="u") 
    {
     count = count + 1;
        
    }
    
}
console.log(`Total numbers of vowels in string is ${count}`);

console.log(`-----------------------------------------------------------------------------------------------`);

console.log(`some of cube of numbers from 1 to 5.`);
function sumOfCube() {
    var sum = 0;
    for (let index =1; index <= 5; index++){
        var cube = (index*index*index);
        sum = sum + cube;
    }
    console.log(`(1*1*1)+(2*2*2)+(3*3*3)+(4*4*4)+(5*5*5):${sum}`);
}
sumOfCube();

console.log(`-----------------------------------------------------------------------------------------------`);
function oddPositionedChars (string){
    console.log(`The given string is : ${string}`);
    var emptyString = "";
    var myString = string.split(" ").join (" ");
    console.log(myString);
    for (let index = 0; index < myString.length; index++) {
         if (index % 2 !=0) {
            emptyString = emptyString + myString[index];
         }
        }
         console.log(`odd position chars in the string is: ${emptyString}`);
}
oddPositionedChars("Hard work always pays back");
console.log(`-----------------------------------------------------------------------------------------------`);

oddPositionedChars("Soon I will be angular IT champ");

console.log(`-----------------------------------------------------------------------------------------------`);

function  factorial(num) {
var fact = 1;
for (let index=1;index <=num; index ++ ){
    fact=fact*index;
}    console.log(`Factirial of "${num}"is:${fact}`);
}
factorial(5);
factorial(7);
factorial(8);
factorial(12);