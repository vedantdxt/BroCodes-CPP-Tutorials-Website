const quizDB=[
    {
        question:"Q1. How many types of variables are there in C++?",
        a: "1",
        b: "3",
        c: "2",
        d: "4",
        ans: "ans2"
    },
    {
        question:"Q2. Which is not the type of variables in C++?",
        a:"Local Variable.",
        b:"Instance Variable.",
        c:"Dynamic Variable.",
        d:"static Variable.",
        ans:"ans3",
    },
    {
        question:"Q3. Static Variables are known as?",
        a:"Class variables.",
        b:"Function Variables.",
        c:"Global variables.",
        d:"none of the above.",
        ans:"ans1",
    },
    {
        question:"Q4. Variable=expression Which one is evaluated first?",
        a:"Both are them evaluated at a same time.",
        b:"Expression",
        c:"variable",
        d:"None of the above",
        ans:"ans2",
    },
    {
        question:"Q5. What is the value of X when the following program segment ends. int x; for(z=0;z<50<z++)",
        a:"49",
        b:"51",
        c:"50",
        d:"None of the above",
        ans:"ans1",
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

