// Data
let questions = [
    {
        singelQuestion: "Which langauge is use for websites?",
        options: ["Java", "javaScript", "C++", "Python"],
        correctAnswer: "javaScript"
    },

    {
        singelQuestion: "Which City is pakistan largest city?",
        options: ["karachi", "peshawar", "Lahore", "Multan"],
        correctAnswer: "karachi"
    },

    {
        singelQuestion: 'What does CPU stand for?',
        options: ["Central Process Unit", "Central Processing Unit", "Central Processor Unit", " Central Processing Unit"],
        correctAnswer: "Central Processing Unit"
    },

    {
        singelQuestion: 'What does HTTP stand for?',
        options: ["Hyper Transfer Text Protocol", "Hypertext Transmission Protocol", "Hyper Text Transfer Protocol", "High Transfer Text Protocol"],
        correctAnswer: "Hyper Text Transfer Protocol"
    },

    {
        singelQuestion: 'Which of the following is an input device?',
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        correctAnswer: "Keyboard"
    },
]

let questionTitle = document.getElementById('questionTitle');
let labels = document.querySelectorAll('label');
let firstQuestion = document.getElementById('firstQuestion');
let submit = document.getElementById('submit');
let radios = document.querySelectorAll('input[type="radio"]')
let studentMarks = document.getElementById('studentMarks');
let currentQuestion = 0;
let totalMarks = 0

// Rest Radios 
function restRadios() {
    radios.forEach((radio) => {
        radio.checked = false
    })
}

// submit Button listner
submit.addEventListener('click', () => {

    let selectedAnswer = ""
    radios.forEach((radio) => {
        if (radio.checked) {
            selectedAnswer = radio.nextElementSibling.textContent
        }

    })

    if (!selectedAnswer) {
        alert("Please Select Answer");
        return;
    }


    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        alert("correct Answer");
        totalMarks = totalMarks + 2;
        studentMarks.textContent = totalMarks
    }
    else {
        alert(`Incorrect Answer \nThe correct Answer is:  ${questions[currentQuestion].correctAnswer}`)
    }

    currentQuestion++
    displayQuestions()

})


function displayQuestions() {

    if (currentQuestion < questions.length) {
        questionTitle.textContent = `${questions[currentQuestion].singelQuestion}`; //Question Title
        labels.forEach((label, index) => {
            let choice = questions[currentQuestion].options
            label.textContent = `${choice[index]}`
        });

        firstQuestion.innerHTML = `<b>${currentQuestion + 1}</b>`;
        restRadios();

    }

    else {
        studentMarks.textContent = totalMarks
        let playAgain = prompt(`your Marks is :${totalMarks} \nDo you want play again? y/n`);
        
        if (playAgain === "y" || playAgain === "Y") {
            currentQuestion = 0;
            totalMarks = 0;
            studentMarks.textContent = totalMarks
            
            displayQuestions();
        }

        else if (playAgain === "n" || playAgain === "N") {
            restRadios();
            submit.disabled = true
            radios.forEach((radio) => {
                radio.disabled = true;
            })

        }
    }

}

displayQuestions()
