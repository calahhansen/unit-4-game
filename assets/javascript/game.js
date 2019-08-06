
// define variables
let scoreCounter = 0;
const randomNumber = 50;

// Here we created code that selects a number either 10 or 11.
    // We'll set this number at the start of the "game".
    const numberOptions = [10, 11];
    const increment = numberOptions[Math.round(Math.random())];

document.getElementById("random-number").innerHTML = randomNumber;

// on-click event that responds to button clicks of the crystal images associated with class item5.
document.querySelectorAll(".item5").forEach(function(node){
    node.addEventListener("click", function() {
    // Each time the user clicks the crystal the counter goes up by 1 and triggers an alert message.
        scoreCounter += increment;
      // Clicking the button triggers an alert message.
      alert("New Score: " + scoreCounter);
        // Here we created some logic to "check" if the click counter matches the targetNumber.
        // Remember, this click event will be triggered with each click.
        // With each click the counter will increase by 10 and be re-evaluated against target.
        if (scoreCounter === randomNumber) {

            // If the numbers match we'll celebrate the user's win.
            alert("You win!");
          }
        // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
        else if (scoreCounter >= randomNumber) {

          // Then they are alerted with a loss.
          alert("You lose!!");
        }

        // This is fine except the way our code is written every user will win first (when they hit 50).
        // But will then lose immediately if they click again. Seems pointless right?
        // To make this a game we need to create additional code to randomize the counter and targetScore.
    });
  })


//