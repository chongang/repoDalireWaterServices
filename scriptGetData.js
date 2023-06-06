<script>
  function getValue() {
    google.script.run.withSuccessHandler(setValue).getAccount(document.getElementById('accntno').value);
  }
  
  function setValue(value) {
    document.getElementById('name').value = value;
  }
</script>
