const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0,
    },
    
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1,
    },
    
    {
    question: "Which HTML element is used to define the title of a document?",
    options: [
        "<head>",
        "<title>",
        "<meta>",
        "<header>"
    ],
    correct: 1,
},

{
    question: "Which attribute is used to provide a unique identifier to an HTML element?",
    options: [
        "class",
        "name",
        "id",
        "type"
    ],
    correct: 2,
},
{
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
    ],
    correct: 1,
},
{
    question: "Which HTML element is used for an unordered list?",
    options: [
        "<ol>",
        "<li>",
        "<list>",
        "<ul>"
    ],
    correct: 3,
},
{
    question: "What does CSS stand for?",
    options: [
        "Computer Style Sheets",
        "Creative Style System",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
    ],
    correct: 2,
},
{
    question: "Which property is used to change the background color in CSS?",
    options: [
        "color",
        "bgcolor",
        "background-color",
        "background"
    ],
    correct: 2,
},
{
    question: "Which input type is used to create a checkbox in HTML forms?",
    options: [
        "text",
        "checkbox",
        "radio",
        "button"
    ],
    correct: 1,
},
{
    question: "Which HTML element is used to display a picture on a webpage?",
    options: [
        "<picture>",
        "<image>",
        "<img>",
        "<src>"
    ],
    correct: 2,
},
];

// Select labels
const questionElm = document.getElementById("question");
const option1 = document.getElementById("option_1");
const option2 = document.getElementById("option_2");
const option3 = document.getElementById("option_3");
const option4 = document.getElementById("option_4");

// Select radio buttons
const answerElm = document.querySelectorAll(".answer");

// Submit button
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// Load quiz
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    questionElm.innerText = question;
    option1.innerText = options[0];
    option2.innerText = options[1];
    option3.innerText = options[2];
    option4.innerText = options[3];

    // Clear previous selection
    answerElm.forEach((el) => (el.checked = false));
};

loadQuiz();

 

const getSelectedOption = () => {
    
   
      let ans_index;
         answerElm. forEach((curOption, index) => {
 if(curOption.checked) {
    ans_index = index;
         }
   });

   return ans_index;
};

submitBtn.addEventListener('click', () => {
const selectedOptionIndex = getSelectedOption();
console.log(selectedOptionIndex);

if(selectedOptionIndex === quizData[currentQuiz].correct){
    score = score+1;
}

currentQuiz++;
if(currentQuiz < quizData.length){
    loadQuiz();
}
else{
    quiz.innerHTML=`
    <div class= "result">
    <h2> Your Score: ${score}/${quizData.length} Correct Answer   </h2>
<p> Congratulations on completing the quiz !  </p>
<button class="reload-button" onclick= "location.reload()">Play Again </button>  
</div>
`;  
}
});


