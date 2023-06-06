$(document).ready(function() {
  
  // GET DATA
  $('#getaccount').click(function() {
    alert("get account is pressed!");
    var id = $('#accntno').val();
    alert(id);
    getValueFromSheet(id);
  });
  
    function getValueFromSheet(id) {
      var url = "https://script.google.com/macros/s/AKfycbxJyekpyzvZyG_mhp5Rjc2hw_mEauEbpN8GOfgLC70TN74pjJpqFWd-D_U7nfnewu7biA/exec";
    $.ajax({
      url: url,
      type: 'POST',
      data: {
        function: 'getAccount',
        id: id
      },
      success: function(value) {
        setValue(value);
        alert("get data, success");
      },
      error: function(error) {
        console.log('Error:', error);
        alert("error: " + error);
      }
    });
  }
  
  function setValue(value) {
    // Update the necessary field with the retrieved value
    alert("get data, set value");
    $('#name').val(value);
  }
  
 //SET DATA
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
alert("completed document");
    var formData = {
      name: $('#name').val(),
      email: $('#email').val()
    };

    var url = "https://script.google.com/macros/s/AKfycbxJyekpyzvZyG_mhp5Rjc2hw_mEauEbpN8GOfgLC70TN74pjJpqFWd-D_U7nfnewu7biA/exec";
    url += "?name=" + encodeURIComponent(formData.name);
    url += "&email=" + encodeURIComponent(formData.email);
    
//alert("completed var params");
    $.ajax({
      url: url,
      dataType: "json",
      success: function(response) {
        handleResponse(response);
        //alert("completed var ajax");
      },
      error: function() {
        console.error("There was an error submitting the form. Please try again.");
        //alert("fail var ajax");
      }
    });
  });
});

 //SET DATA
  $('#myAccountForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
alert("completed document");
    var formData = {
      id: $('#accountno').val(),
    };

    var url = "https://script.google.com/macros/s/AKfycbxJyekpyzvZyG_mhp5Rjc2hw_mEauEbpN8GOfgLC70TN74pjJpqFWd-D_U7nfnewu7biA/exec";
    url += "?id=" + encodeURIComponent(formData.id);
    
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
    alert("Form submitted successfully!");
    $('#myForm')[0].reset(); // Reset the form after successful submission
  } else {
    console.error("There was an error submitting the form. Please try again.");
  }
}
