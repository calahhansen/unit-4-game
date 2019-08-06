
// define variables
let scoreCounter = 0;
const randomNumber = 50;

// Here we created code that selects a number either 10 or 11.
    // We'll set this number at the start of the "game".
    const numberOptions = [10, 5, 3, 7];
    const increment = numberOptions[Math.round(Math.random())];

    // Next we create a for loop to create crystals for every numberOption.
    for (let i = 0; i < numberOptions.length; i++) {

        // For each iteration, we will create an imageCrystal
        const imageCrystal = document.createElement("img");
  
        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.classList.add("crystal-image");
  
        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.setAttribute("src", "data:image/jpeg;base64,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");
  
        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.setAttribute("data-crystalvalue", numberOptions[i]);
  
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        document.getElementById("crystals").append(imageCrystal);
      }

document.getElementById("random-number").innerHTML = randomNumber;

// on-click event that responds to button clicks of the crystal images associated with class item5.
document.querySelectorAll(".crystals").forEach(function(node){
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