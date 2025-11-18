$(document).ready(function () {
  
 
  const myBugs = ["beetle", "cricket", "earthworm", "poison mosquito"];
  const myFavoriteBugs = {
    type: "poisonous",
    color: "brown",
    sound: "zzzzz",
    hasWings: true
  };

  const bugList = myBugs.join(", ");
  const bugText = `
    <p>The most common bugs here are: ${bugList}.</p>
    <p>The bug in your ear possesses these characteristics: 
    type: ${myFavoriteBugs.type}, color: ${myFavoriteBugs.color}, 
    makes the sound: ${myFavoriteBugs.sound}.</p>
  `;
  $("#output").html(bugText);


  let ravenFlying = false;

  $("#raven").hover(function () {
    if (ravenFlying) return; 
    ravenFlying = true;

    const raven = $(this);

    raven.animate(
      { left: "+=300", top: "-=60", opacity: 0.6 },
      800
    );

    // Return home
    setTimeout(() => {
      raven.animate(
        { left: "-=300", top: "+=60", opacity: 1 },
        800,
        () => { ravenFlying = false; }
      );
    }, 1200);
  });


  let count = 0;

  $("#bite-button").click(function () {
    count++;

    let mood;
    if (count < 3) mood = "ouch!";
    else if (count < 5) mood = "getting sleepy...";
    else mood = "you died!";

    $("#bite-button").text(`You've been bitten ${count} times :(`);
    $("#output").append(`<p>${mood}</p>`);

    // Glow
    $("#fullmoon").css('filter', 'drop-shadow(0 0 25px rgba(255,255,255,0.8))');
    setTimeout(() => {
      $("#fullmoon").css('filter', '');
    }, 800);

    if (count >= 5) {
      setTimeout(() => {
        count = 0;
        $("#bite-button").text("Click to swat the bug");
        $("#output").html(bugText);
      }, 2000);
    }
  });

});
