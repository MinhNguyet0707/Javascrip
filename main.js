let quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];
const btn = document.getElementById('btn');
const quizContainer = document.querySelector('.quiz-container');

btn.addEventListener('click', () => {
    quizes.forEach((quiz) => {
        const answerIndex = Math.floor(Math.random() * quiz.answers.length);
        quizContainer.innerHTML += `
      <div class="quiz">
        <h3>${quiz.question}</h3>
        <label>
           <input type="radio" name="answer-${quiz.id}" value="${quiz.answers[answerIndex]}" checked>
           ${quiz.answers[answerIndex]}
         </label>
    `;
    });
});

