const quizDB=[
    {
        question:"Q1. Decision Control statements in C++ can be implemented using",
        a: "if ",
        b: "if-else",
        c: "Conditional Operator",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question:"Q2. In situations where we need to execute body of the loop before testing the condition, we should use_____.",
        a:"For Loop",
        b:"Do While Loop",
        c:"While Loops",
        d:"Nested For Loop",
        ans:"ans2",
    },
    {
        question:"Q3. Loops in C++ are immplemented using?",
        a:"While Loop",
        b:"For Loop",
        c:"Do While Loop",
        d:"All the above",
        ans:"ans4",
    },
    {
        question:"Q4. What is the way to suddenly come out of or quit any loop in C++?",
        a:"break; statement",
        b:"continue; statement",
        c:"quit; statement",
        d:"leave; statement",
        ans:"ans1",
    },
    {
        question:"Q5. Which of the following is an entry-controlled loop?",
        a:"For loop",
        b:"while loop",
        c:" do-while loop",
        d:"both b & c",
        ans:"ans4",
    },
    {
        question:"Q6. Which of the following is an exit-controlled loop?",
        a:"For loop",
        b:"while loop",
        c:" do-while loop",
        d:"both b & c",
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

