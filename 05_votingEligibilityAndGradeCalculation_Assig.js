console.log(`--------------------Grade of student-----------------------`)


var gradeCalculation = function (marks){
    if (marks>=90 && marks <=100){
        console.log(`Extraordinary marks - "${marks}": your grade is A+"`);//used " "
    }
    if (marks>75 && marks <90) {
        console.log(`Excellent marks - "${marks}":your grade is A` );
    }
    if (marks>50 && marks<75){
        console.log(`Good marks - ${marks}: your grade is B`);//without using ""
    }
    if (marks>35 && marks<50 && marks<50){
        console.log(`below average marks- ${marks}: you need to improve your study`);
    }
    if (marks== 0 || marks < 0 || marks > 100){
        console.log(`marks are "${marks}": Please provide a valid marks`);
    }
}
gradeCalculation(98);
gradeCalculation(90);
gradeCalculation(80);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");

console.log(`--------------------Voting Eligibility using "if" and "else"-----------------------`)

var votingEligibility = function (age){
    if (age <= 0 || age > 120){
        console.log(`Invalid Data:Because Your Age Is"${age}"`);
    }else{
        if(age>=18){
            console.log(`your age is "${age}": Congratulation you are eligibility for voting.`);
        } else{
            console.log(`your age is "${age}": sorry you are not eligibility for voting.`);
        }
    }
}

votingEligibility(45);
votingEligibility(17);
votingEligibility(08);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);


