$(document).ready(function() {
  $("#myForm").on("submit",function(event){
    event.preventDefault(); // Prevent the form from submitting normally

    var clickedButton = $(document.activeElement);
    var action = clickedButton.data("action");
    
alert("action: " + action + " is clicked");
    
    var formData = {
      accountno: $('#accountno').val(),
      meternumber: $('#meternumber').val(),
      name: $('#name').val(),
      prvmonth: $('#prvmonth').val(),
      curmonth: $('#curmonth').val(),
      cbmrate: $('#cbmrate').val(),
      cbm: $('#cbm').val(),
      cost: $('#cost').val(),
      cbm: $('#date').val(),
      contactno: $('#contactno').val(),
      email: $('#email').val(),
      address: $('#address').val()
    };
     var url = "https://script.google.com/macros/s/AKfycbxu7jcTXleROegX1KZAm383D39AU1clNFBwZ2S27-cvhMoue54DqsUuXxwPqcemjjyl/exec";
    url += "?function=" + action;
    url += "&" + $.param(formData);

//alert("completed var params");
    $.ajax({
      url: url,
      dataType: "jsonp",
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
 

  
  Object.entries(response).forEach(function([key, value]) {
    alert(key + ": " + value);
  });

  // Reset the form after successful submission
  $('#myForm')[0].reset();
  alert("Success!");
}

