

var monthOfYear = function (month) {
  
switch (month) {
  case 1:
    console.log(`"${month}"This month is January`);
    break;
  case 2:
    console.log(`"${month}"This month is Feb`);
    break;
  case 3:
    console.log(`"${month}"This month is March`);
    console.log(`"${month}"My birthday is in month MARCH`);

    break;
  case 4:
    console.log(`"${month}"This month is April`);
    break;
  case 5:
    console.log(`"${month}"This month is May`);
    break;
  case 6:
    console.log(`"${month}"This month is June`);
    break;
  case 7:
    console.log(`"${month}"This month is Jully`);
    break;
  case 8:
    console.log(`"${month}"This month is Augast`);
    break;
 
  case 9:
    console.log(`"${month}"This month is Sept`);
    break;
  case 10:
    console.log(`"${month}"This month is October`);
    break;
  case 11:
    console.log(`"${month}"This month is November`);
    break;
  case 12:
    console.log(`"${month}"This month is December`);
    break;
  default:
    console.log(`"${month}'Not valid month value provided,Please provide acceptable data`);
    break;
}
}
monthOfYear (1);
monthOfYear (5);
monthOfYear (12);
monthOfYear (15);
monthOfYear (100);
monthOfYear (3);
