const quizDB=[
    {
        question:"Q1. Continue statement used for",
        a: "To handle run time erroe",
        b: "To continue to the next lne of code ",
        c: "To stop the current iteration and begin the next iteration from the beginning",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question:"Q2. The 'continue' statement is used to",
        a:"permit two different expressions to appear in situations where only one expression would ordinarily be used",
        b:"alter the normal sequence of program execution by transferring control to some other part of the program",
        c:"terminate loops or to exit from a switch",
        d:"None of the above",
        ans:"ans4",
    },
    {
        question:"Q3. What will be the output of the following C code?#include <iostream>\nusing namespace std;\nint main()\n{\nint i = 0;\nint j = 0;\nfor (i = 0;i < 5; i++)\n{\nfor (j = 0;j < 4; j++)\n{\nif (i > 1)\ncontinue;\ncout<<''Hi'';\n}\n}\n}\n",
        a:"Hi is printed 9 times",
        b:"Hi is printed 7 times",
        c:"Hi is printed 8 times",
        d:"Hi is printed 6 times",
        ans:"ans3",
    },
    {
        question:"Q4. Which keyword is used to come out of a loop only for that iteration?",
        a:"return;",
        b:"break;",
        c:"continue;",
        d:"resume;",
        ans:"an3",
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

