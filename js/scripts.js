$(document).ready(function() {
  // global variable

  // on the event submit button is clicked
  // use branching to determine which celebrity to show or hide
  $('.btn').click(function(event) {
    alert('your button click works');


    // work around for error with submitting forms without a connect server
    event.preventDefault();
  });

});
