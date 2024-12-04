
const questionElement =  document.getElementById('question');
const answerButtons =  document.getElementById('answer-buttons');
const nextButton =  document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // when start the quiz set currentQuestionIndex(to loop the 'questions' variable from 0) & score to 0
    currentQuestionIndex = 0;
    score = 0;

    // if finished all the quiz will show the btn will show 'restart', so after restart the quiz set the btn to 'Next'
    nextButton.innerHTML = "Next"

    //after reset al the sttings then show the question
    showQuestion()
}



function showQuestion(){
    //remove all the previous question/choices(answer-btn) , then show all the next question/choices(answer-btn)
    resetState();

    let currentQuestion = questions[currentQuestionIndex];  //questions[0::]

    // first index is 0 but we wanna show '1)' so add 1
    let qeustionNo = currentQuestionIndex + 1;

    //display the question: 1. Which is largest...    //questions[0(currentQuestionIndex)]['question']
    questionElement.innerHTML = qeustionNo + '. ' + currentQuestion.question;

    //displaying the question
    // questions[0(currentQuestionIndex)]['answer'][0::]
    currentQuestion.answer.forEach(answer => {
        // create a button tag
        const button = document.createElement('button');

        // set a text inside the button tag
        button.innerHTML = answer.text;

        //set a class to that button
        button.classList.add('btn');

        // append the newly create button tag to '<div id="answer-buttons">
        answerButtons.appendChild(button)

        //check if: question[0].answer.correct === 'true' ? xxx
        if(answer.correct){
            // set a data attribute of correct 'data-correct="true"'  dataset.correc(correct here can change to whatever word you want) in browser will be data-correct = 'true
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}


//removing the prvious question and all it's answer btn
function resetState() {
    
     //reove the Next button
    nextButton.style.display = 'none';

    while(answerButtons.firstChild){
        //remove all the previous answer button 1 by 1 until it finished
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(event) {
    console.log(event.target.className)
    console.log(event)
    const selectedBtn = event.target;


    //when you click the aswerButton, js will check the below
    //set the answerbutton where it has data attrbute correct = 'true' and assign it to 'isCorrect' variable
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect) {
        selectedBtn.classList.add('correct');
        score += 1;
    }else{
        selectedBtn.classList.add('incorrect')
    }


    //set the button that has dataset.correct === 'true' to green
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        //after setting to green disabled all the hover(css)
        button.disabled = 'true'
    })
    //dislay the next btn as we set it to none in css file
    nextButton.style.display = 'block'
}


//function when completing all questions
function showScore(){
    //remove the question and aswer tbn so that we can only display the result
    resetState()
    //display score
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    //set next btn to show 'play again'
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
}




//function when clicking 'next' btn
function handleNextButton(){
    //increse the currentQuestionIndex so that we can execute the next question
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()  //technically is when the next btn become 'play again'
    }
})

//now call the function
startQuiz()