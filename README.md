# TriviaGame
Unit 5 Project - Timed Trivia Game

About ------------------------------------------------------------------------------------------------

This project will create a web app that will display trivia questions. The user will have a time limit to answer the current question correctly. Upon time expiring the html will update to show either correct, or incorrect and display the correct answer. The questions will automatically be replaced with new ones after either condition is met upon a certain value of time determined by the program.


Things I need to make this work------------------------------------------------------------------------

-Set of questions paired with multiple answers (use objects for this feature?)
    -object could look like:
        var question1 = {
            question: What is life?
            correct: some good stuff
            wrong: lies
            wrong: a virtual reality simulation

        }

-A way for the program to randomly select a question (array of question objects as seen above?)
    - const questArray = [];
    -Use Math.floor(Math.random) etc... for random array select.
    -could also just loop through the array and avoid randomizing (this would simplify the duplicate question problem)

-A way for the program to determine when an answer has been clicked
    -create div with attribute "correct" and assign questionobject.correct to this div

-A way to randomize the order that possible answers are arranged

-A way for the program to determine if user clicked correct answer
    -create user answer variable and check if it .has(.correct) or something similar

-A way to give the users selection a new class and update its style to reflect selection
    -also remove this class if users changes selection

-Question function that displays question for a certain interval of time
    -will update to correct or incorrect message display upon expiring(these should be functions call upon by if/else)
    -both possible functions will operate for a set time and then call the question function 

-A button that will trigger the initial first iteration of the question function

-A way for the program to know when all questions have been answered
    -will display a score
    -will display a button to reset game




