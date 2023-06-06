$(document).ready(function() {
  google.script.run.withSuccessHandler(getAccount).getAccount();
});

function getAccount(data) {
  var value = data[0][0]; // Adjust the index based on your data structure
  $('#name').val(value);
}
