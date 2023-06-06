$(document).ready(function() {
  google.script.run.withSuccessHandler(populateInputBox).getDataFromSheet();
});

function populateInputBox(data) {
  var value = data[0][0]; // Adjust the index based on your data structure
  $('#myInput').val(value);
}
