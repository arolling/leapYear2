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
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    if (year === ""){

    } else {

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
