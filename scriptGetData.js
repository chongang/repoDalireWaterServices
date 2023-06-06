$(document).ready(function() {
  google.script.run.withSuccessHandler(setAccount).getAccount();
});

function setAccount(data) {
  var value = data[0][0]; // Adjust the index based on your data structure
  $('#name').val(value);
}
