$(document).ready(function() {
  function getValue() {
    var id = $('#accntno').val();
    alert(id);
   var url = "https://script.google.com/macros/s/AKfycbxJyekpyzvZyG_mhp5Rjc2hw_mEauEbpN8GOfgLC70TN74pjJpqFWd-D_U7nfnewu7biA/exec";

    $.ajax({
      
      url: url,
      type: 'POST',
      data: {
        id: id
      },
      success: function(value) {
        setValue(value);
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  }
  
  function setValue(value) {
    $('#name').val(value);
  }
});
