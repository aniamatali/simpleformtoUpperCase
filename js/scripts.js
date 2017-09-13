$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yournameInput = $("input#yourName").val().toUpperCase();

    $(".yourName").text(yournameInput);

    $("#nameOutput").show();

    event.preventDefault();

  });

  $("#formTwo").submit(function(event) {
    var yourageInput = $("input#yourAge").val();

    $(".yourAge").text(yourageInput);

    $("#ageOutput").show();

    event.preventDefault();

  });





});
