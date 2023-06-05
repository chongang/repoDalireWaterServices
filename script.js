$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var formData = {
      name: $('#name').val(),
      email: $('#email').val()
    };

    var url = "https://script.google.com/macros/s/AKfycbxJyekpyzvZyG_mhp5Rjc2hw_mEauEbpN8GOfgLC70TN74pjJpqFWd-D_U7nfnewu7biA/exec";
    //url += "?name=" + encodeURIComponent(formData.name);
    //url += "&email=" + encodeURIComponent(formData.email);
    
    var params = {
      name: formData.name,
      email: formData.email,
      callback: "handleResponse"
    };
    
    $.ajax({
      url: url,
      dataType: "json",
      success: function(response) {
        handleResponse(response);
      },
      error: function() {
        console.error("There was an error submitting the form. Please try again.");
      }
    });
  });
});


