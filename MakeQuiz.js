const questions = [];

let ConfirmQuestion = () => {
    var question = document.forms['create-question']['Question'].value;
    var choiceOne = document.forms['create-question']['ChoiceOne'].value;
    var choiceTwo = document.forms['create-question']['ChoiceTwo'].value;
    var choiceThree = document.forms['create-question']['ChoiceThree'].value;
    var choiceFour = document.forms['create-question']['ChoiceFour'].value;

    var confirmation = confirm('Question: ' + question + '\n' +
        'Choice One: ' + choiceOne + '\n' +
        'Choice Two: ' + choiceTwo + '\n' +
        'Choice Three: ' + choiceThree + '\n' +
        'Choice Four: ' + choiceFour
    );

    if (confirmation == true) {
        alert('Question Stored');
        return true;
    } else {
        alert('Please make the necessary changes');
        window.history.go();
    }
}
$(document).ready(function() {

    $("button[name='GetAndStore']").click(function() {
        var question = document.forms['create-question']['Question'].value;
        /*shortOrMultiple = true;
        if (shortOrMultiple = true) {
            document.forms['create-question']['MultipleChoice'].value;
        } else {
            document.forms['create-question']['ShortAnswer'].value;
        }*/
        let choiceOne = document.forms['create-question']['ChoiceOne'].value;
        let choiceTwo = document.forms['create-question']['ChoiceTwo'].value;
        let choiceThree = document.forms['create-question']['ChoiceThree'].value;
        let choiceFour = document.forms['create-question']['ChoiceFour'].value;

        if (!ConfirmQuestion()) return false;

        else {
            const testQuestion = {
                question: question,
                choice1: choiceOne,
                choice2: choiceTwo,
                choice3: choiceThree,
                choice4: choiceFour,
                //qAnswer: document.forms['create-question']['Answer'].value
            };
            questions.push(testQuestion);
        }
        console.log(questions.length);
    });

});