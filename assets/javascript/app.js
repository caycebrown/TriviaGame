//qBank(question bank) array with question objects containing questions and answers------------------

qBank = [
    q1 = {
        question : "This is question 1",
        correct : "This matches the answer",
        wrong1 : "this is wrong answer 1",
        wrong2 : "this is wrong answer 2",
        wrong3 : "this is wrong answer 3",
        answer : "this is the answer",
    },

    q2 = {
        question : "This is question 2",
        correct : "This is correct answer 1",
        wrong1 : "this is wrong answer 1",
        wrong2 : "this is wrong answer 2",
        wrong3 : "this is wrong answer 3",
    },

    q3 = {
        question : "This is question 1",
        correct : "This is correct answer 1",
        wrong1 : "this is wrong answer 1",
        wrong2 : "this is wrong answer 2",
        wrong3 : "this is wrong answer 3",
    }
];

i = 0;

function showQuestion(){
    $('#card').html('<p>' + qBank[0] + '</p>')
    setTimeout(answerTimer, 15000);
    i++;

};

showQuestion();

function answerTimer(){
    $('#card').html('<p>THIS SAYS YAY YOURE CORRECT OR BOO YOURE INCORRECT</p>')
};

var test = $('button').attr('id')
