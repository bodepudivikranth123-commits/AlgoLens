const startScreen=document.getElementById("startScreen");
const quizScreen=document.getElementById("quizScreen");
const resultScreen=document.getElementById("resultScreen");

const category=document.getElementById("category");
const difficulty=document.getElementById("difficulty");

const startBtn=document.getElementById("startBtn");

const questionNumber=document.getElementById("questionNumber");
const scoreText=document.getElementById("score");

const question=document.getElementById("question");
const options=document.getElementById("options");

const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");

const finalScore=document.getElementById("finalScore");

let quizQuestions=[];
let currentQuestion=0;
let score=0;

const userAnswers=[];

startBtn.addEventListener("click",startQuiz);

function startQuiz(){

   quizQuestions=questions
.filter(q=>{

    const categoryMatch=
    category.value==="All"||
    q.category===category.value;

    const difficultyMatch=
    difficulty.value==="All"||
    q.difficulty===difficulty.value;

    return categoryMatch&&difficultyMatch;

})
.sort(()=>Math.random()-0.5)
.slice(0,10);

    if(quizQuestions.length===0){

        alert("No questions available.");

        return;

    }

    startScreen.style.display="none";

    quizScreen.style.display="block";

    loadQuestion();

}

function loadQuestion(){

    const q=quizQuestions[currentQuestion];

    questionNumber.textContent=
    `Question ${currentQuestion+1} / ${quizQuestions.length}`;

    scoreText.textContent=`Score : ${score}`;

    question.textContent=q.question;

    options.innerHTML="";

    q.options.forEach((option,index)=>{

        const div=document.createElement("div");

        div.className="option";

        div.textContent=option;

        if(userAnswers[currentQuestion]===index){

            div.classList.add("selected");

        }

        div.onclick=()=>selectOption(index);

        options.appendChild(div);

    });

}

function selectOption(index){

    userAnswers[currentQuestion]=index;

    const optionDivs=document.querySelectorAll(".option");

    optionDivs.forEach(div=>{

        div.classList.remove("selected");

    });

    optionDivs[index].classList.add("selected");

}

nextBtn.addEventListener("click",()=>{

    if(userAnswers[currentQuestion]===undefined){

        alert("Please select an option.");

        return;

    }

    if(currentQuestion<quizQuestions.length-1){

        currentQuestion++;

        loadQuestion();

    }

    else{

        finishQuiz();

    }

});

prevBtn.addEventListener("click",()=>{

    if(currentQuestion>0){

        currentQuestion--;

        loadQuestion();

    }

});

function finishQuiz(){

    score=0;

    let reviewHTML="";

    quizQuestions.forEach((q,index)=>{

        const correct=userAnswers[index]===q.answer;

        if(correct){

            score++;

        }
        else{

            reviewHTML+=`

            <div class="review-card">

                <h3>Question ${index+1}</h3>

                <p><strong>${q.question}</strong></p>

                <p style="color:red;">
                    Your Answer :
                    ${q.options[userAnswers[index]]}
                </p>

                <p style="color:green;">
                    Correct Answer :
                    ${q.options[q.answer]}
                </p>

            </div>

            `;

        }

    });

    quizScreen.style.display="none";

    resultScreen.style.display="block";

    finalScore.textContent=
    `You scored ${score} / ${quizQuestions.length}`;

    let performance="";

    if(score===quizQuestions.length){

        performance="🏆 Excellent! Perfect Score.";

    }
    else if(score>=8){

        performance="⭐ Very Good!";

    }
    else if(score>=6){

        performance="👍 Good Job!";

    }
    else if(score>=4){

        performance="📚 Keep Practicing.";

    }
    else{

        performance="💪 Don't Give Up! Practice More.";

    }

    document.getElementById("performance").textContent=performance;

    if(reviewHTML===""){

        reviewHTML="<h3 style='color:green;'>🎉 All answers are correct!</h3>";

    }

    document.getElementById("reviewAnswers").innerHTML=reviewHTML;

}