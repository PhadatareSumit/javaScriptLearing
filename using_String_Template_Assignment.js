
console.log(`--------------------String value is Argument---------------------`);
var squareOfWordLength= function (value){
    console.log(`length of word ${value} is =${value.length}.& its square is = ${value.length * value.length}`);
}
squareOfWordLength(`JavaScript`)
squareOfWordLength(`Google Chrome`)
squareOfWordLength(`Developer Smart`)

console.log(`--------------------Function Expression with No argument and No Return---------------------`);

var newFunction = function(){
    var myString = "I am Angular Developer";
    var myWord = myString.split(" ");
    console.log(`length of string = ${myString.length}\n
total number of word in string = ${myWord.length} \n 
string length divied by number of words = ${myString.length/myWord.length} \n
After multiplying string length by total words in string = ${myString.length*myWord.length}`);
} 
newFunction()