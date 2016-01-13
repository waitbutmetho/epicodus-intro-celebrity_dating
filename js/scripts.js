$(document).ready(function() {
  // global variable

  // on the event submit button is clicked
  // use branching to determine which celebrity to show or hide
  $('form').submit(function(event) {

    // assign the inputted age to a variable
    var age = $('input#ageInput').val();
    alert('your button click works and age is set to '+age);

    // branching based on age input
      // show and hide content


    // work around for error with submitting forms without a connect server
    event.preventDefault();
  });

});
