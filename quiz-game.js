"use strict"

/* PLANNING / PSEUDOCODE
1-initialize score=0
2-Question= 5+3
-variable name =AdditionAnswer
-correct anwer =8
-validate with ===

3-Question2=10-4
-variable name = SubtractionAnswer
-correct Answer=6
-validate with===

4-Question3=4*3
-variable name = MultiplificationAnswer
-correct Answer=12
-validate with===

5-Question4=20/5
-variable name = DivisionAnswer
-correct Answer=4
-validate with===

6-Question5=what is your favorite subject?
-variable name = FavoriteSubject
-correct Answer=Math
-validate with trim(), toLowercase()and check for answer  if any one clicked the cancel.

7- Calculate the percentage=(all scores/5)*100
8- Final performance sith IF else and elseif .*/

let score=0;
//question 1//
const AdditionAnswer= Number(prompt("Question1 = 5+3?"));
if (AdditionAnswer===8){
    alert("your answer is correct.");
    score ++;
}
else if(AdditionAnswer>=8){
    alert("No, the answer is 8");
}
else{
    alert(" the  correct answer is 8.");
}
//question 2//
const SubtractionAnswer= Number(prompt("Question2 = 10-4"));
if (SubtractionAnswer===6){
    alert("correct!");
    score ++;
}
else{
    alert(' NO the correct answer is 6');
}
//question 3//
const MultiplificationAnswer= Number(prompt("question 3= 4*3"));
if (MultiplificationAnswer===12){
    alert("correct!");
    score++;
}
else {
    alert("the correct answer is 12.");
}
//question4//
const DivisionAnswer= Number(prompt("Question4=20/5"));
if(DivisionAnswer===4){
    alert("correct");
    score++;
}
else if(DivisionAnswer<4){
    alert("close but not correct, the answer is 4");
}
else {
    alert(" the answer is 4");
}
//question5//
const FavoriteSubject=prompt("What is your favorite subject?");
if (FavoriteSubject===null) {
    alert("Oops you refused to answer !");
}
else if (FavoriteSubject.trim()===""){
    alert("you forgot to answer this question?");
}
else if (FavoriteSubject.toLowerCase()=="math"){
    alert("you are so smart!");
    score++;
}
else{
    alert("good choice");
}
//calculation of score //
const percentage=(score/5)*100;
if (score===3){
    console.log("you got 3 out of 5!")
}

 if (score===3){
    alert("keep practicing!");
}
else if(score<=3){
    alert ("keep practicing maybe next time!");
}
else{
    alert("Good job");
}
//percentage //
alert("your final score is "+score+"and your percentage is "+percentage+"% .");






 