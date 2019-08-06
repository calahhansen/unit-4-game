
// define variables
let scoreCounter = 0;
const randomNumber = 50;

document.getElementById("random-number").innerHTML = randomNumber;

// on-click event that responds to button clicks of the crystal images associated with class item5.
document.querySelectorAll(".item5").forEach(function(node){
    node.addEventListener("click", function() {
    // Each time the user clicks the crystal the counter goes up by 1 and triggers an alert message.
        scoreCounter += 10;
      // Clicking the button triggers an alert message.
      alert("You clicked this crystal " + scoreCounter + " times!");

    });
  })


//