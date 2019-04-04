//qBank(question bank) array with question objects containing questions and answers------------------

qBank = [
    q1 = {
        question : "This is question 1",
        a1 : "This matches the answer",
        a2 : "this is wrong answer 1",
        a3 : "this is wrong answer 2",
        a4 : "this is wrong answer 3",
        answer : "this is the answer",
    },

    q2 = {
        question : "This is question 2",
        a1 : "This is a1 answer 1",
        a2 : "this is wrong answer 1",
        a3 : "this is wrong answer 2",
        a4 : "this is wrong answer 3",
        answer : "this is the answer",
    },

    q3 = {
        question : "This is question 1",
        a1 : "This is a1 answer 1",
        a2 : "this is wrong answer 1",
        a3 : "this is wrong answer 2",
        a4 : "this is wrong answer 3",
        answer : "this is the answer",
    }
];

i = 0;

var qItem = '<div class="row" id="qItem">'

function showQuestion(){
    $('#card').append(qItem + qBank[0].question + '</div>')
    $('#card').append(qItem + qBank[0].a1 + '</div>')
    $('#card').append(qItem + qBank[0].a2 + '</div>')
    $('#card').append(qItem + qBank[0].a3 + '</div>')
    $('#card').append(qItem + qBank[0].a4 + '</div>')
    setTimeout(answerTimer, 4000);
    i++;

};

showQuestion();

function answerTimer(){
    $('#card').html('<div class="row">THIS SAYS YAY YOURE a1 OR BOO YOURE INa1</div>')
};

var test = $('button').attr('id')
