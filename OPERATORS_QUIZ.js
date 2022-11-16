const quizDB=[
    {
        question:"Q1. What are the essential operators in c++?",
        a: "*",
        b: "<=",
        c: "||",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question:"Q2. Pick out the compound assignment statement.",
        a:"a=a-5",
        b:"a-=5",
        c:"a=a/b",
        d:"a=a+5",
        ans:"ans2",
    },
    {
        question:"Q3. What will be the output of the following C++ code?\n#include <iostream>\nusing namespace std;\nint main()\n{\nint a1, b1;\na1 = 10;\nb1 = 4;\na1 = b1;\nb = 7;\ncout <<a1:<< a1;\ncout <<\nb1:<< b1;\nreturn 0;\n}",
        a:"a:10,b:4",
        b:"a:4,b:10",
        c:"a:4,b:7",
        d:"a:4,b:6",
        ans:"ans3",
    },
    {
        question:"Q4. What is the associativity of add(+); ?",
        a:"right to left",
        b:"left to right",
        c:"top to bottom",
        d:"right to left & left to right",
        ans:"ans2",
    },
    {
        question:"Q5. What is this operator called ?: ?",
        a:"relational",
        b:"casting operator",
        c:"unrelational",
        d:"conditional",
        ans:"ans4",
    },
    
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let questionCount=0;
let score=0;

const loadQuestion=() => {
    const questionList=quizDB[questionCount];
    question.innerText= questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}

loadQuestion();
const getcheckedanswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
            if(curAnsElem.checked)
            {
                answer=curAnsElem.id;
            }
            
    });
    return answer;
}
const deSelectall=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false)
}
submit.addEventListener('click',()=>
{
    const checkedanswer=getcheckedanswer();
    console.log(checkedanswer);
   if(checkedanswer===quizDB[questionCount].ans){
    score++;
   };
   questionCount++;
   deSelectall();
   if(questionCount<quizDB.length){
    loadQuestion();
   }else{
    showscore.innerHTML=`
    <h3>You scored ${score}/${quizDB.length}</h3>
   `;
   showscore.classList.remove('scorearea');
}
});

