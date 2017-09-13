$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yournameInput = $("input#yourName").val().toUpperCase();

    $(".yourName").text(yournameInput);

    $("#nameOutput").show();

    event.preventDefault();

  });






});
