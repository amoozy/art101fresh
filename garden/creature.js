

//when button is clicked (event)
$("#add-creature").click(
    function(){

  //a variable for storing names 
  let crName = $("#creature-name").val();
  $("#creature-list").append(crName + ", ");

  //remove the name after adding
    $("#creature-name").val("");
});


      
$("#clear-creatures").click(function() {

  // trigger a quick shake animation on the form for feedback
  $("#creature-form").addClass("shake").one("animationend webkitAnimationEnd", function() {
    $(this).removeClass("shake");
  });

  // clear the list and reset the input
  $("#creature-list").html(" Creatures list will be here: ");
  $("#creature-name").val("").focus();

});

//the magic move