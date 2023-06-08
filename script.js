$(document).ready(function() {
  $("#myForm").on("submit",function(event){
    event.preventDefault(); // Prevent the form from submitting normally

    var clickedButton = $(document.activeElement);
    var action = clickedButton.data("action");
    
alert("action: " + action + " is clicked");
    
    var formData = {
      accountno: $('#accountno').val(),
      meternumber: $('#meternumberbase').val()+$('#meternumber').val(),
      name: $('#name').val(),
      prvmonth: $('#prvmonth').val(),
      curmonth: $('#curmonth').val(),
      cbmrate: $('#cbmrate').val(),
      cbm: $('#cbm').val(),
      cost: $('#cost').val(),
      date: $('#date').val(),
      contactno: $('#contactno').val(),
      email: $('#email').val(),
      address: $('#address').val()
    };
     var url = "https://script.google.com/macros/s/AKfycbwhZ02JFw86QYux8LXF5DR_Nu3vchRBRGlTSDJjFCmj1efM81DaKcvV8LUg7hyungu-sw/exec";
    url += "?function=" + action;
    url += "&" + $.param(formData);

//alert("completed var params");
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(response) {
        handleResponse(response,action);
      },
      error: function() {
        console.error("There was an error submitting the form. Please try again.");
      }
    });
    
  });
});

function handleResponse(response,functionName) {
  // Your code here to handle the response
  //Object.entries(response).forEach(function([key, value]) {
    //alert(key + ": " + value);
  //});
alert("functionName:"+functionName);
  
  //Get Account
  if (functionName === "getAccount") {
      alert("name:"+response.name);
          $('#name').prop('readonly', function(_, readonly) {
            $('#name').val(response.name);
            return !readonly; // Toggle the readonly state
          });
  }

  // Reset the form after successful submission
  //$('#myForm')[0].reset();
  alert("Success!");
}


