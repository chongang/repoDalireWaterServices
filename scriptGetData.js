<script>
  function getValue() {
    google.script.run.withSuccessHandler(setValue).getAccount(document.getElementById('inputId').value);
  }
  
  function setValue(value) {
    document.getElementById('inputId').value = value;
  }
</script>
