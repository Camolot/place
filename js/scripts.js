$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedNote = $("input#new-note").val();
    var newLocation = { Name: inputtedName, Landmark: inputtedLandmark, Date: inputtedDate, Note: inputtedNote }

    $(ul#locations).append("<li><span class='contact'>" + newLocation.name + " " + newLocation.landmark + " " + newLocation.date + " " newLocation.note + "</span></li>");

    $("input#new-name").val("");
    $("input#new-landmark").val("");
    $("input#new-date").val("");
    $("input#new-note").val("");
  })
})
