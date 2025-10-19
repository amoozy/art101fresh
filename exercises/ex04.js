let count = 0;
let colors=["Orchid","Coral","HotPink","Plum"];


$("#needy-button").click( function() {
   let reminder= count % colors.length; 
   $("#needy-button").html("Clicked " + count + "times"+ colors[count]);

   $("body").css("background-color",colors[count]);
  count = count + 1; 
});

