const quizDB=[
    {
        question:"Q1. What is the identifier given to string class to declare string objects?",
        a:"STRING",
        b:"String",
        c:"string",
        d:"None of the above",
        ans:"ans3",
    },

    {
        question:"Q2. What will be the\nthe output of following code?\n#include <iostream>\n#include <string>\nusing namespace std;\nint main()\n{\nstring str={''Hello World''};\ncout<<str;\nreturn 0;\n }",
        a: "Error",
        b: "Hello World",
        c: "str",
        d: "Segmentation Fault",
        ans: "ans2"
    },
    {
        question:"Q3. What is the header file for the string class?",
        a:"#include<str>",
        b:"#include<strio>",
        c:"#include<string>",
        d:"#include<ios>",
        ans:"ans3",
    },
    {
        question:"Q4. Which is used to return the number of characters in the string?",
        a:"Name",
        b:"Length",
        c:"Size",
        d:"Both Size and Lenght",
        ans:"ans4",
    },
    {
        question:"Q5. Which method do we use to append more than one character at a time?",
        a:"data",
        b:"operator+=",
        c:"append",
        d:"Both append and operator+=",
        ans:"ans4",
    },
    {
        question:"Q6. Pick the incorrect statement about Character-Array.",
        a:"Character-Array can be terminated by a null character(‘\0’)",
        b:"Character-Array has a dynamic size",
        c:"Character-Array has a static size",
        d:"Character-Array has a threat of array-decay",
        ans:"ans2",
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

