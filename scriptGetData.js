$(document).ready(function() {
  function getValue() {
    var id = document.getElementById('accntno').value;
    alert(id);
    google.script.run.withSuccessHandler(setValue).getAccount(id);
  }
  
  function setValue(value) {
    document.getElementById('name').value = value;
  }
});
