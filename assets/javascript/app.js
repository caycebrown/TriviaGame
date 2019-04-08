//qBank(question bank) array with question objects containing questions and answers------------------
qBank = [
    q1 = {
        question : "This is question 1",
        a1 : "this is the answer",
        a2 : "this is wrong answer 1",
        a3 : "this is wrong answer 2",
        a4 : "this is wrong answer 3",
        answer : "this is the answer",
    },

    q2 = {
        question : "This is question 2",
        a1 : "this is the answer 2",
        a2 : "this is wrong answer 1",
        a3 : "this is wrong answer 2",
        a4 : "this is wrong answer 3",
        answer : "this is the answer 2",
    },

    q3 = {
        question : "This is question 3",
        a1 : "this is answer 3",
        a2 : "this is wrong answer 1",
        a3 : "this is wrong answer 2",
        a4 : "this is wrong answer 3",
        answer : "this is answer 3",
    }
];

var i = 0; 
var right = 0;
var wrong = 0;
var qItem = '<div class="row qItem">'
var input = "";
var answer = qBank[i].answer;

function showQuestion(){
    $('#card').html('');//clears out element to prep for new questions and answers
    $('#card').append('<div class = "row" id="question">' + qBank[i].question + '</div>')
    $('#card').append(qItem + qBank[i].a1 + '</div>')
    $('#card').append(qItem + qBank[i].a2 + '</div>')
    $('#card').append(qItem + qBank[i].a3 + '</div>')
    $('#card').append(qItem + qBank[i].a4 + '</div>')
    answer = qBank[i].answer;
    setTimeout(answerTimer, 10000);
    
};

function correct() {
    $('.selected').css('background-color', 'green' )
    i++;
    right++;
    if ( i < qBank.length) {
        setTimeout(showQuestion, 3000);
    } else {
        results();
    }
    
};

function incorrect() {
    $('.selected').css('background-color', 'red' )
    $('#card').append('<div>Correct answer: ' + qBank[i].answer + ' </div>')
    i++;
    wrong++;
    if ( i < qBank.length) {
        setTimeout(showQuestion, 3000);
    } else {
        results();
    }
};

function answerTimer(){
    if (input === answer) {
        correct();
    } else {
        incorrect();
    }
};

function results(){
    $('#card').html('');
    $('#card').append('<h3>You got: ' + right + ' answers correct</h3>')
    $('#card').append('<h3>You got: ' + wrong + ' answers incorrect</h3>')

}

$('#start').on('click', function (){
    showQuestion();
});



$('#card').on('click', '.qItem', function(){
    $('.qItem').removeClass('selected'); //clears out the 'selected' class from the previous choice (if any)
    $(this).addClass('selected');//Adds 'selected' class to current selection
    input = $(this).text();
})
