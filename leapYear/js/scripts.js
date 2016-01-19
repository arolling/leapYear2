// Business logic
var leapYear = function(year) {
  console.log(year);
  if ("" === year) {
    return "empty";
  } else {
    year = parseInt(year);
    console.log(year);

    if (isNaN(year)) {
      return "NaN";
    } else if (year < 0){
      return "negative";
    } else if (year > 10000){
      return "tooLarge";
    } else {
      return ((year % 100 !== 0) && (year % 4 === 0)) || (year % 400 === 0);
    }
  }
};



// User Interface
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {

    var year = $("input#year").val();

    var result = leapYear(year);
    console.log(result);


    $('#errors').show();
    $("#result").hide();

    if (result === 'NaN'){
      $(".error").text("not entered a number");
    } else if (result === "empty") {
      $(".error").text("not entered anything");
    } else if (result === "negative") {
      $(".error").text("entered a negative year");
    } else if (result === "tooLarge") {
      $('.error').text("have chosen a year beyond our predictive capacity");
    } else {
      //clean of errors
      $(".year").text(year);
      console.log(result);
      if (!result) {  //equivalent to if result === false
        $(".not").text("not");
      } else {
        $(".not").text(" ");
      }
      $("#errors").hide();

      $("#result").show();
    }


    event.preventDefault();
  });
});
