const quizDB=[
    {
        question:"Q1. #include <iostream>\nusing namespace std;\n\nint main() \n{\nint n = 15;\nfor (; ;)\ncout << n;\nreturn 0;\n}",
        a: "Error",
        b: "Infine times of printing n",
        c: "15",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question:"Q2. Which looping process is best used when the number of iterations is known?",
        a:"For Loop",
        b:"Do While Loop",
        c:"While Loops",
        d:"Switch Case",
        ans:"ans1",
    },
    {
        question:"Q3. What is true about the loop structure…",
        a:"Condition",
        b:"Body of the Loop",
        c:"Loop control variable",
        d:"All the above",
        ans:"ans4",
    },
    {
        question:"Q4. Which of the following loop inside another loop is called…",
        a:"Bounded Loop",
        b:"Inner Loop",
        c:"Internal Loop",
        d:"Nested Loop",
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

