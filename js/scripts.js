// Everything OK?
console.log('OK');

// Your Awesome Scripts
console.log("Cafe coffee is coffeelicious");

$('.cafe').lettering();

var clicks = 0;

$('#pour-button').click(function() {
   
  
  if (clicks == 0){ //first click
        $("#pour-button").text("Pour!");
        $('.cafe-wrapper').addClass('cafe-move');
      $('.mug-wrapper').addClass('mug-slide');
    } else{
      if ($("#pour-button").text() == "Pour!") {
        $("#pour-button").text("Empty");
      } else {
        $("#pour-button").text("Pour!");
      }

      
        $('.pot-wave').toggleClass('wave-pour');
        $('#pot').toggleClass('pour');
        $('.wave-container').toggleClass('move');
        $('.wave-container').addClass('move-back');
    }
    ++clicks;
});
