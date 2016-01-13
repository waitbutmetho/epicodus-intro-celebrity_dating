$(document).ready(function() {
  // global variable

  // on the event submit button is clicked
  // use branching to determine which celebrity to show or hide
  $('form').submit(function(event) {

    // assign the inputted age to a variable
    var age = $('input#ageInput').val();

    // branching based on age input
    if (age <= 16) {
      // prompt that you are not old enough
      alert('You are not old enough to date!');
    } else if (age > 16 && age < 25) {
      // hide all previously revealed info
      $('.allcelebrities').children().addClass('celebrityHidden');
      // show celebrity1
      $('.allcelebrities').children('.celebrity1').removeClass('celebrityHidden');

    } else if (age > 24 && age < 65) {
      // hide all previously revealed info
      $('.allcelebrities').children().addClass('celebrityHidden');
      // show celebrity2
      $('.allcelebrities').children('.celebrity2').removeClass('celebrityHidden');

    } else {
      // hide all previously revealed info
      $('.allcelebrities').children().addClass('celebrityHidden');
      // show celebrity3
      $('.allcelebrities').children('.celebrity3').removeClass('celebrityHidden');

    };


    // work around for error with submitting forms without a connect server
    event.preventDefault();
  });

});
