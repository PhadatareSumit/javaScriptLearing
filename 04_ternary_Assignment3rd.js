console.log(`-----------------Ternary operator and function expression with no return value--------------------`);
var tcsInterviewEligibility= function(gradeScore,hscScore,sscScore,candidateName){
   var result= (gradeScore>"70%" || hscScore>"80%" || sscScore>"90%" ) ? `congracts ${candidateName} you are eligible for TCS interview, go ahed` :
   `Unfortunately ${candidateName} you are not eligible for TCS interview, TRY again`
   console.log(result);
}
tcsInterviewEligibility("80%","86%","90%","AJINKYA PATIL")
tcsInterviewEligibility("70%","65%","55%","VISHAL MOKASHI")
tcsInterviewEligibility("60%","79%","88%","TUSHAR THOPATE")