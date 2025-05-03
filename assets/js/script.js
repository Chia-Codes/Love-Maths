// Listen for DOM content to be loaded then executes function
// Code to be executed when the user clicks a button
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            alert("You clicked Submit!");
        } else {
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
            }
        });
    }
})

/** Games Area **/

    /** Controls Area **/
    /**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    // Creates 2 random number between 1 & 25
    // Math.random() returns a number between 0 and 1, so we multiply by 25 to get a number between 0 and 25
 let num1 = Math.floor(Math.random() * 25) + 1;
 let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(){

}

function calculateCorectAnswers(){

}


    /** Questions Area **/
function displayAdditionQuestion(){

}

function displaySubtractQuestion(){
}

function displayMultiplyQuestion(){
}

    /** Score Area **/
function incrementScore(){

}
    
function incrementWongAnswetr(){
    
}