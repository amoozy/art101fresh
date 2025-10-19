let myCommutes = ["stevie, ", "the bus, ", "my feet, ", "green bike"];
let myFavouriteCommute = {
    type: "Bus",
    route: 19,
    print: "Deep sea creatures",
    hasMiddleDoor: true,
    drivers: ["Ben Sibley"],
};

let megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + myCommutes[1] + myCommutes[2] + myCommutes[3] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type: " + myFavouriteCommute.type + ", route number:" + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence);



