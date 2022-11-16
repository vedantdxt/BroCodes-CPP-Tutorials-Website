const quizDB=[
    {
        question:"Q1. How many types of comments are there in C++?",
        a: "1",
        b: "3",
        c: "2",
        d: "4",
        ans: "ans3"
    },
    {
        question:"Q2. What is a comment in C++?",
        a:"comments are the part of the source code disregarded by the compiler",
        b:"comments are executable code",
        c:"comments are executed by the compiler to find the meaning of the comment",
        d:"comments are executed by the interpreter",
        ans:"ans1",
    },
    {
        question:"Q3. What types of comments does C++ support?",
        a:"Multi Line comment",
        b:"Single Line comment",
        c:"reusable Line",
        d:"Single line and Multi Line comment",
        ans:"ans4",
    },
    {
        question:"Q4. What is the correct syntax for writing Milti Line Comment ?",
        a:"/$.....*/",
        b:"//",
        c:"/*.......*/",
        d:"None of the above.",
        ans:"ans3",
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

