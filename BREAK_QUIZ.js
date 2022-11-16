const quizDB=[
    {
        question:"Q1. What will be the output of the following code?\n#include <iostream>\nusing namespace std;\nint main()\n{\nint a = 0, i = 0, b;\nfor (i = 0;i < 5; i++)\n{\na++;\nif (i == 3)\nbreak;\n}\ncout<<i;\n}",
        a: "1",
        b: "2",
        c: "3",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question:"Q2. The keyword ‘break’ cannot be simply used within _________",
        a:"do-while",
        b:"for",
        c:"while",
        d:"if-else",
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
        question:"Q4. What will be the output of the following C code?\n#include <iostream>\nusing namespace std;\nint main()\n{\nint i = 0;\nfor (i = 0;i < 5; i++)\nif (i < 4)\n{\ncout<<''Hello'';\nbreak;\n}\n}",
        a:"Hello",
        b:"Hello is printed 5 times",
        c:"Hello is printed 3 times",
        d:"Hello is printed 4 times",
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

