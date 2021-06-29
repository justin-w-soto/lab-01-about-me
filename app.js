// get button element
// add 'click' event listener to button element
// confirm user wants to start the quiz
// if yes prompt for at least 3 questions and store answer
// for each answer check if it was the correct value
// track num of correct answers
// at quiz end, update results section with number of correct answers from quiz.

import { correctAnswer } from "./test/utils.js";

const quizButton = document.getElementById('click-me');
const results = document.getElementById('results');

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Are you ready to start the quiz?');
    console.log(confirmed);
    if (confirmed) {
        const name = prompt('What is your name?');
        const ans1 = prompt('Is Michelangelos favorite food pizza?');
        const ans2 = prompt('Does he like to do skateboards?');
        const ans3 = prompt('Is Michelangelo a Karate expert?');
        const ans4 = prompt('Does the Shredder totally suck?');
        console.log(name, ans1, ans2, ans3, ans4);

        let score = 0;

        if (correctAnswer(ans1)) {
            score ++;
        }
        console.log('ans1 score', score);
        if (correctAnswer(ans2)) {
            score ++;
        }
        console.log('ans2 score', score);
        if (correctAnswer(ans3)) {
            score ++;
        }
        console.log('ans3 score', score);
        if (correctAnswer(ans4)) {
            score ++;
        }
        console.log('ans4 score', score);
        console.log('final score', score);
        results.textContent = `${name}, you entered ${score} correct answers!`;
    } else {
        console.log('user cancelled');
    }
});