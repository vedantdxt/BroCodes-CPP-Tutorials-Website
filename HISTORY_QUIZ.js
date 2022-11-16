const quizDB=[
    {
        question:"Q1. Who has developed C++ language?",
        a: "Bjarne Stroustrup",
        b: "B Language Developers",
        c: "Henry Fayol",
        d: "None of the above.",
        ans: "ans1"
    },
    {
        question:"Q2. C++ is _________ in nature.",
        a: "Procedural language",
        b: "Object oriented language",
        c: "Both Procedural and Object oriented language",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question:"Q3. Which languages are closer to C++?",
        a: "Python",
        b: "Java",
        c: "B language",
        d: "C# and Java",
        ans: "ans4"
    },
    {
        question:"Q4. C++ was initially known as ?",
        a: "C language(C)",
        b: "BCPL",
        c: "C with classes(C++)",
        d: "B language.",
        ans: "ans3"
    },
    {
        question:"Q5. Which of the following approach is used by C++?",
        a: "Left-right",
        b: "Right-left",
        c: "Bottom-up",
        d: "Top-bottom",
        ans: "ans3"
    },
    {
        question:"Q6. By default, all the files in C++ are opened in _______ mode?",
        a: "Binary",
        b: "Text",
        c: "VTC",
        d: "ISCII",
        ans: "ans2"
    },
    {
        question:"Q7. In which year C++ language was renamed?",
        a: "1984",
        b: "1985",
        c: "1983",
        d: "1982",
        ans: "ans3"
    },
    {
        question:"Q8. Which is the latest C++ version and in which year it was released?",
        a: "C++20,2020",
        b: "C++23,2020",
        c: "C++19,2019",
        d: "C++21,2021",
        ans: "ans1"
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

