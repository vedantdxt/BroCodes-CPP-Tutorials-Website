const quizDB=[
    {
        question:"Q1. Which of the following operator is used after case keyword in switch statement?",
        a: ";(Semi-Colon)",
        b: ",(Comma)",
        c: ":(Colon)",
        d: ".(Dot)",
        ans: "ans3"
    },
    {
        question:"Q2. default statement is ____________ in switch statement.",
        a:"Optional",
        b:"Mandatory",
        c:"Enforced",
        d:"None of the above",
        ans:"ans1",
    },
    {
        question:"Q3. Within a switch statement?",
        a:"Continue cannot be used but Break can be used",
        b:"Continue can be used but Break cannot be used",
        c:" Neither Continue nor Break can be used",
        d:"Both Continue and Break can be used",
        ans:"ans1",
    },
    {
        question:"Q4. In the switch case block which keyword is used to cover unhandled possibilities?",
        a:"continue",
        b:"default",
        c:"break",
        d:"all of the above",
        ans:"ans2",
    },
    {
        question:"Q5. What will be the output of the given C program?\n#include<iostream>\nusing namespace std;\nint main()\n{\nint a = 2;\nswitch(a)\n{\n}\ncout<<''Know Program'';\nreturn 0;\n}\n",
        a:"Compile time error",
        b:"Run time error",
        c:"Know Program",
        d:"None of the above",
        ans:"ans3",
    },
    {
        question:"Q6. Find the output of the below program?\n#include<iostream>\nusing namespace std;\nint main()\n{\nint a = 3;\nswitch(a)\n{\ncase 1:cout<<''X'';\nbreak;\ncase 2:cout<<''Y'';\nbreak;\ndefault:cout<<''Z'';\nbreak;\n}\ncout<<''L'';\n}",
        a:"Z",
        b:"L",
        c:"ZL",
        d:"None of the above",
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

