// count the total number character 'a' or 'A'
function countCharA(string) {
    console.log(string);
    var counter = 0;
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
        var charCopy= char.toLowerCase();
        if (charCopy== 'a') {
            counter = counter+1;
        }
    }
    console.log(`Total number a and A in given string is ${counter}`);
}
countCharA(`I am learning javascript,The language of internet`);
console.log(`-----------------------------------------------------`);
countCharA(`"My favourite movie is LAggAn"`)