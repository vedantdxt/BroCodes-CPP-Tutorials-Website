const quizDB=[
    {
        question:"Q1. Which loop is faster in C Language, for, while or Do While.?",
        a: "For loop",
        b: "Do while loop",
        c: "While loop",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question:"Q2. Choose a correct C do while syntax.",
        a:"do while(condition)\n{\n//statements\n}",
        b:"do\n{\n//statements\n}\nwhile(condition)",
        c:"do\n{\n\n//statements\n}\nwhile(condition);",
        d:"None of the above",
        ans:"ans3"
    },
    {
        question:"Q3. Find the output of the given program?\n#include<iostream>\nusing namespace std;\nint main()\n{\ndo\n{\ncout<<''Know Program'';\n} while();\nreturn 0;\n}",
        a:"Compile-time error",
        b:"Compiled Successfully, No Output",
        c:"Know Program",
        d:"Know Program is printed infinite times.",
        ans:"ans1"
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

