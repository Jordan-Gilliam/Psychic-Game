var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//score var
var win = 0;

var loss = 0;

var userGuess = [];

var guessesLeft = 10;

var keyPressed;

var computerGuess;


function reset() {


    guessesLeft = 10;
    keyPressed = [];
    computerGuess = computerChoices[Math.floor(Math.random() * 25)];
    console.log(computerGuess);
}



//// functions

reset();

document.onkeyup = function(event) {



    var userGuess = event.key;
    keyPressed.push(userGuess);
    console.log(userGuess);

    var computerGuess = computerChoices[Math.floor(Math.random() * 25)];

    if (userGuess === computerGuess) {
        alert("its the same");
        (win++);
        reset();
    }

    else if (guessesLeft === 0) {
        (loss++);
        reset();
    }

    else {
        (guessesLeft--);
    }


    var html =
        "<p>You chose: " + keyPressed + "</p>" +
        "<p>wins: " + win + "</p>" +
        "<p>numGuesses: " + guessesLeft + "</p>" +
        "<p>losses: " + loss + "</p>";


    document.querySelector("#game").innerHTML = html;


};
