$(document).ready(function() {
let myBugs = ["beetle, ", "cricket, ", "earthworm, ", "mosquito"];
let myFavoriteBugs = {
    type: "mosquito",
    color: "brown",
    sound: "buzzzzz",
    hasWings: true,
};

let megaSentence = "<p>The most common bugs here are: " + myBugs[0] + myBugs[1] + myBugs[2] + myBugs[3] + "</p>";
megaSentence = megaSentence + "<p>The bug in your ear possesses these characteristics: type: " + myFavoriteBugs.type + ", color:" + myFavoriteBugs.color + ", makes the sound: " + myFavoriteBugs.sound + "</p>";
$("#output").html(megaSentence);


let count = 0;
$("#bite-button").click( function() {
   count = count + 1;
   $("#bite-button").text("You've been bitten " + count + " times :(");
});
});