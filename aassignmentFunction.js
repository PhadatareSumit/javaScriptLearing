console.log("-------------Assignment with No argument and No return-------------");


function college () {
    console.log("agriculture college baramati");
}
college ()

function superCar (){
    console.log("Bugatti chiron");
}
superCar () 
console.log("-------------------------------------------------------------");

console.log("-------------Assignment of Argument and no return -------------");

function personalDetail (firstName, LastName, collegeName) {
console.log("First Name : Sumit");
console.log("Last Name : Phadatare");
console.log("College Name : College of Agriculture and Allied Science, Baramati");
}
personalDetail()

console.log("-------------Assignment of Function with Argument and swap -------------");

function swap (value1, value2){
    console.log("Before swap:", value1, value2);
    var temp = value1
value1= value2
value2 = temp

console.log("After swap:", value1, value2);
}
swap ("Anushka", "virat");
swap (1000, 2000)

console.log("-------------Assignment of Addition of three values -------------");

function additionOfThreeNumbers (value1, value2, value3){
    console.log("Addition of three Numbers:", value1 + value2 + value3);
}
additionOfThreeNumbers (10.23, 600, 40)
additionOfThreeNumbers ("Hello", "Good", "Morning")
