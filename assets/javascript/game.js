
// define variables
let winCounter = 0;
let lossCounter = 0;
let scoreCounter = 0;

let winsText = document.getElementById("win-counter");
let lossesText = document.getElementById("loss-counter");
console.log(winsText, lossesText);

//issue with random number 1-9
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
document.getElementById("random-number").innerHTML = randomNumber;

// define numberOptions array and increment random/round
const numberOptions = [10, 5, 3, 7];
//let increment = numberOptions[Math.round(Math.random())];
//console.log(numberOptions, increment);

const gameImages = "../gameimages/index.js";

// Next we create a for loop to create crystals for every numberOption.
for (let i = 0; i < numberOptions.length; i++) {

    // for ( let j = 0; j < gameImages.length; j++) {
  // For each iteration, we will create an imageCrystal
  const imageCrystal = document.createElement("img");
  console.log(imageCrystal);
  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.classList.add("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.setAttribute("src", gameImages);
  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.setAttribute("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  document.getElementById("crystals").append(imageCrystal);
    
}




// on-click event that responds to button clicks of the crystal images associated with class item5.
document.querySelectorAll(".crystal-image").forEach(function (node) {
  node.addEventListener("click", function () {
    // Each time the user clicks the crystal the counter goes up by 1 and triggers an alert message.
    const crystalValue = node.getAttribute("data-crystalvalue");
    crystalValue = parseInt(crystalValue);

    scoreCounter += crystalValue;
    console.log(scoreCounter);
    // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (scoreCounter === randomNumber) {
      winCounter++;
      winsText.textContent = "Wins: " + wincounter;
      
      // If the numbers match we'll celebrate the user's win.
      //alert("You win!");
    }
    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (scoreCounter > randomNumber) {
      lossCounter++;
      lossesText.textContent = "Losses: " + lossCounter;
      // Then they are alerted with a loss.
     //alert("You lose!!");
    }

    // This is fine except the way our code is written every user will win first (when they hit 50).
    // But will then lose immediately if they click again. Seems pointless right?
    // To make this a game we need to create additional code to randomize the counter and targetScore.
  });
})


//