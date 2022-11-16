const quizDB=[
    {
        question:"Q1. Which of the following correctly declares an array?",
        a: "int array;",
        b: "array{10}",
        c: "array{50}",
        d: "int array[10]",
        ans: "ans4"
    },
    {
        question:"Q2.What is the index number of the last element of an array with 92 elements?",
        a:"90",
        b:"91",
        c:"90",
        d:"None of the above",
        ans:"ans2",
    },
    {
        question:"Q3.  Which of the following accesses the ninth element stored in array?",
        a:"array[8]",
        b:"array{8}",
        c:"array[9]",
        d:"array{9}",
        ans:"ans1",
    },
    {
        question:"Q4.What is the output of this program?\n#include <iostream>\nusing namespace std;\nint main()\n{\nint array[] = {10, 20, 30};\ncout << -2[array];\nreturn 0;\n}\n",
        a:"compile time error",
        b:"-15",
        c:"garbage value",
        d:"-30",
        ans:"an4",
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

