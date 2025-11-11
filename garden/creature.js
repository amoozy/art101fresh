

//when button is clicked (event)
$("#add-creature").click(
    function(){

  //a variable for storing names 
  let crName = $("#creature-name").val();
  $("#creature-list").append(crName + ", ");

  //remove the name after adding
    $("#creature-name").val("");
});

//the magic move