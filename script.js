$(document).ready(function() {
  $("#myForm").on("submit",function(event){
    event.preventDefault(); // Prevent the form from submitting normally

    var clickedButton = $(document.activeElement);
    var action = clickedButton.data("action");
    
alert("action: " + action + "clicked");
    
    var formData = {
      accountno: $('#accountno').val(),
      meternumber: $('#meternumber').val(),
      name: $('#name').val(),
      prvmonth: $('#prvmonth').val(),
      curmonth: $('#curmonth').val(),
      contactno: $('#contactno').val(),
      email: $('#email').val(),
      address: $('#address').val()
    };
    
    var url = "https://script.google.com/macros/s/AKfycbxJyekpyzvZyG_mhp5Rjc2hw_mEauEbpN8GOfgLC70TN74pjJpqFWd-D_U7nfnewu7biA/exec"; 
    url += "?function=" + action;
    url += "&" + $.param(formData);

//alert("completed var params");
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

function handleResponse(response) {
  // Your code here to handle the response
  if (response.success) {
    alert("Form submitted successfully! " + response);
    $('#myForm')[0].reset(); // Reset the form after successful submission
  } else {
    console.error("There was an error submitting the form. Please try again.");
  }

}
