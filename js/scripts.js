$(document).ready(function() {
  // global variable

  // on the event submit button is clicked
  // use branching to determine which celebrity to show or hide
  $('form').submit(function(event) {

    // assign the inputted age to a variable
    var age = $('input#ageInput').val();

    // branching based on age input
    if (age >= 16) {
      // alert('your branch works and age is set to '+age);
      // show and hide content
      $('.allcelebrities').children().removeClass('celebrityHidden');

    } else {
      // alert('your else branch works and age is set to '+age);
      alert('You are not old enough to date!')

    };


    // work around for error with submitting forms without a connect server
    event.preventDefault();
  });

});
