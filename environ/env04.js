$(document).ready(function() {
  const myBugs = ["beetle", "cricket", "earthworm", "poison mosquito"];
  const myFavoriteBugs = {
    type: "poisonous",
    color: "brown",
    sound: "zzzzz",
    hasWings: true,
  };

  
  const bugList = myBugs.join(", ");
  const megaSentence = `
    <p>The most common bugs here are: ${bugList}.</p>
    <p>The bug in your ear possesses these characteristics: 
    type: ${myFavoriteBugs.type}, color: ${myFavoriteBugs.color}, makes the sound: ${myFavoriteBugs.sound}.</p>
  `;
  $("#output").html(megaSentence);

  
  let count = 0;
  $("#bite-button").click(function() {
    count++;

    let mood;
    if (count < 3) {
      mood = "ouch!";
    } else if (count < 5) {
      mood = "getting sleepy...";
    } else {
      mood = "you died!";
      $("#fullmoon").removeClass("glow").addClass("bloodmoon");
    }

   
    $("#bite-button").text(`You've been bitten ${count} times :(`);
    $("#output").append(`<p>${mood}</p>`);

   
    $("#fullmoon").addClass("glow");
    setTimeout(() => {
      $("#fullmoon").removeClass("glow");
    }, 800);

    
    if (count === 5) {
      setTimeout(() => {
        count = 0;
        $("#bite-button").text("Click to swat the bug");
        $("#output").html(megaSentence);
        $("#fullmoon").removeClass("bloodmoon"); 
      }, 2000);
    }
  });
});
