let count = 0;
let colorIndex = 0
let colors = ["Red", "Orange", "Yellow", "Green"];

$("#magic-button").click(function() {
   let reminder= count % colors.length; 
   $("#magic-button").html("Clicked " + count + "times"+ colors[count]);

   $("#magic-button").html(count + " " + colors[colorIndex]);

   count = count + 1; 
   colorIndex = colorIndex + 1;
   if (colorIndex == 4) { colorIndex = 0; } 

});
