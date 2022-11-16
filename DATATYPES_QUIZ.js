const quizDB=[
    {
        question:"Q1. Which of the following data type is supported in C++ but not in C?",
        a: "int",
        b: "float",
        c: "bool",
        d: "double",
        ans: "ans3"
    },
    {
        question:"Q2. Using which of the following data type can 19.54 be represented?",
        a:"void",
        b:"float",
        c:"int",
        d:"None of the above",
        ans:"ans2",
    },
    {
        question:"Q3. Identify the size of float datatype in C++.",
        a:"2 byte",
        b:"4 byte",
        c:"1 byte",
        d:"8 byte",
        ans:"ans2",
    },
    {
        question:"Q4. Which data ttype holds the integers or real numbers with 8 bytes of memory allocated? ",
        a:"int",
        b:"char",
        c:"float",
        d:"double",
        ans:"ans4",
    },
    {
        question:"Q5. What is the size of void in bytes?",
        a:"1",
        b:"2",
        c:"0",
        d:"3",
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

