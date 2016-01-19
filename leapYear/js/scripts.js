// Business logic
var leapYear = function(year) {
  if (isNaN(year)) {
    return "NaN";
  } else if ("" === year){
    return "empty";
  } else if (year < 0){
    return "negative";
  } else if (year > 10000){
    return "tooLarge";
  } else {
    return ((year % 100 !== 0) && (year % 4 === 0)) || (year % 400 === 0);
  }
};



// User Interface
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {

    var yearStr = $("input#year").val();
    if (yearStr === '') {
      var result = leapYear(yearStr);
    } else {
      var year = parseInt($("input#year").val());
      var result = leapYear(year);
    }

    $('#errors').hide();
    $("#result").hide();

    if (result === 'NaN'){
      $(".error").text("not entered a number");
      $('#errors').show();
    } else if (result === "empty") {
      $(".error").text("not entered anything");
      $('#errors').show();
    } else if (result === "negative") {
      $(".error").text("entered a negative year");
      $('#errors').show();
    } else if (result === "tooLarge") {
      $('.error').text("have chosen a year beyond our predictive capacity");
      $('#errors').show();
    } else {
      //clean of errors
      $(".year").text(year);

      if (!result) {  //equivalent to if result === false
        $(".not").text("not");
      } else {
        $(".not").text(" ");
      }

      $("#result").show();
    }


    event.preventDefault();
  });
});
