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
      // show celebrity1
      $('.allcelebrities').children('.celebrity1').removeClass('celebrityHidden');

    };


    // work around for error with submitting forms without a connect server
    event.preventDefault();
  });

});
