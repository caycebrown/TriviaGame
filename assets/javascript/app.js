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
        a1 : "This is the answer",
        a2 : "this is wrong answer 1",
        a3 : "this is wrong answer 2",
        a4 : "this is wrong answer 3",
        answer : "this is the answer",
    },

    q3 = {
        question : "This is question 3",
        a1 : "This is the answer",
        a2 : "this is wrong answer 1",
        a3 : "this is wrong answer 2",
        a4 : "this is wrong answer 3",
        answer : "this is the answer",
    }
];

i = 0;

var qItem = '<div class="row qItem">'

input = "";
answer = qBank[i].answer;

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
    setTimeout(showQuestion, 3000);
};

function incorrect() {
    $('.selected').css('background-color', 'red' )
    i++;
    setTimeout(showQuestion, 3000);  
};

function answerTimer(){
    if (input === answer) {
        correct();
    } else {
        incorrect();
    }
};


showQuestion();


$('.qItem').on('click', function(){
    $('.qItem').removeClass('selected'); //clears out the 'selected' class from the previous choice
    $(this).addClass('selected');//Adds 'selected' class to current selection
    input = $(this).text();
})
