

// get button element
// add 'click' event listener to button element
// confirm user wantes to start the quiz
// if yes prompt for at least 3 questions and store answer
// for each answer check if it was the correct value
// track num of correct answers
// at quiz end, update results section with number of correct answers from quiz.

// const quizButton = document.getElementById('click-me');
// const results = document.getElementById('results');

// quizButton.addEventListener('click', ()=>{
//     const confirmed = confirm('Would you like to start the quiz?');
//     console.log(confirmed);
//     if (confirmed) {
//         const name = prompt('What is your name?');
//         const ans1 = prompt('Q1');
//         const ans2 = prompt('Q2');
//         const ans3 = prompt('Q3');
//         const ans4 = prompt('Q4');
//         console.log(name, ans1, ans2, ans3, ans4);
//         let score = 0;
//         if (ans1 === 'yes') {
//             score ++;
//         }
//         if (ans2 === 'yes') {
//             score ++;
//         }
//         if (ans3 === 'yes') {
//             score ++;
//         }
//         if (ans4 === 'yes') {
//             score ++;
//         }
//         else {
//             console.log('user cancelled');
//         }
//     }
// });