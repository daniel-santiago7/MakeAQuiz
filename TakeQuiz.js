import { questions } from './MakeQuiz.js';

$(document).ready(function() {
    for (i = 0; i <= questions.length; i--) {
        Math.floor(Math.random() * questions[i])
        $(Questions).html(questions[i]);
    }

});