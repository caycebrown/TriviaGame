//qBank(question bank) array with question objects containing questions and answers------------------
qBank = [
    q1 = {
        question : "According to modern day estimates the Roman Colesseum seated this number of people.",
        a1 : "50,000",
        a2 : "27,000",
        a3 : "18,000",
        a4 : "80,000",
        answer : "50,000",
    },

    q2 = {
        question : "Christ the Redeemer in Rio De Janeiro sits atop this mountain.",
        a1 : "Pedra da Mina",
        a2 : "Sugarloaf Mountain",
        a3 : "Mount Roraima",
        a4 : "Mount Corvocado",
        answer : "Mount Corvocado",
    },

    q3 = {
        question : "The Great Wall of China - including all of its branches - is how long?",
        a1 : "8,769 Miles",
        a2 : "13,171 Miles",
        a3 : "4,515 Miles",
        a4 : "17,846 Miles",
        answer : "13,171 Miles",
    },

    q4 = {
        question : "The ancient city of Petra in Jordan is sometimes called what?",
        a1 : "The City of Stone",
        a2 : "The Rose City",
        a3 : "The Red City",
        a4 : "The Salt City",
        answer : "The Rose City",
    },

    q5 = {
        question : "Which of these structures does NOT exist in the Mayan city of Chichen Itza?",
        a1 : "The Temple of Water",
        a2 : "The Great Ball Court",
        a3 : "The Temple of Jaguars",
        a4 : "The Kukulkan Pyramid",
        answer : "The Temple of Water",
    },

    q6 = {
        question : "The Taj Mahal was constructed to be what?",
        a1 : "A Mosque",
        a2 : "The ending site of a popular pilgrimage",
        a3 : "A tribute to the Mughal emperor, Shah Jahan",
        a4 : "A Mausoleum",
        answer : "A Mausoleum",
    },

    q7 = {
        question : "Machu Piccu was home to what ancient civilization?",
        a1 : "The Aztecs",
        a2 : "The Incas",
        a3 : "The Teotihuacans",
        a4 : "The Purépechas",
        answer : "The Incas",
    }
];

var i = 0; 
var right = 0;
var wrong = 0;
var qItem = '<div class="row qItem">'
var input = "";
var answer = qBank[i].answer;
var time = 30;


function showQuestion(){
    $('#card').html('');//clears out element to prep for new questions and answers
    $('#card').append('<div class = "row" id="question">' + qBank[i].question + '</div>')
    $('#card').append(qItem + qBank[i].a1 + '</div>')
    $('#card').append(qItem + qBank[i].a2 + '</div>')
    $('#card').append(qItem + qBank[i].a3 + '</div>')
    $('#card').append(qItem + qBank[i].a4 + '</div>')
    answer = qBank[i].answer;

    setTimeout(answerTimer, 31001);

    intervalId = setInterval(countDown, 1000);
    function countDown(){
        $('#time').html('Time: &nbsp;' + time);
        time--;
    }
};

function correct() {
    clearInterval(intervalId);
    $('.selected').css('background-color', 'green' )
    i++;
    right++;
    if ( i < qBank.length) {
        setTimeout(showQuestion, 6000);
        time = 30;
    } else {
        results();
    }
    
};

function incorrect() {
    clearInterval(intervalId);
    $('.selected').css('background-color', 'red' )
    $('#card').append('<div><h2>Correct answer: ' + qBank[i].answer + '</h2> </div>')
    i++;
    wrong++;
    if ( i < qBank.length) {
        setTimeout(showQuestion, 6000);
        time = 30;
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
    $('#card').append('<h2>You got: ' + right + ' answers correct</h2>')
    $('#card').append('<h2>You got: ' + wrong + ' answers incorrect</h2>')

}

$('#start').on('click', function (){
    showQuestion();
});



$('#card').on('click', '.qItem', function(){
    $('.qItem').removeClass('selected'); //clears out the 'selected' class from the previous choice (if any)
    $(this).addClass('selected');//Adds 'selected' class to current selection
    input = $(this).text();
})


