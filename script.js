$(document).ready(function() {
  $("#myForm").on("submit",function(event){
    event.preventDefault(); // Prevent the form from submitting normally

    var clickedButton = $(document.activeElement);
    var action = clickedButton.data("action");
    var meterno = $('#meternumberbase').val()+$('#meternumber').val()
    

    if (action==="saveReading"){
      var isFound = searchValue(meterno,"A:A","ReadingDB");
      alert("isFound:"+isFound);
      if (isFound){
        alert("Meter No. [" + meterno + "] is already saved, please to delete previous data, and try again");
        return;
      }
    }
    

    var formData = {
      meternumber: meterno,
      accountno: $('#accountno').val(),
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

function handleResponse(response,action) {
  // Your code here to handle the response
  //Object.entries(response).forEach(function([key, value]) {
  //  alert(key + ": " + value);
  //});
  
  //Get Account
  if (action === "getAccount") {
          $('#name').prop('readonly', function(_, readonly) {
            $('#name').val(response.name);
            $('#accntno').val(response.accountno);
            $('#contactno').val(response.contactno);
            $('#address').val(response.address);
            $('#email').val(response.email);
            $('#prvmonth').val(response.lastreading);
            $('#curmonth').val(response.lastreading); //set same initially
            return !readonly; // Toggle the readonly state
          });
  }

  // Reset the form after successful submission
  //$('#myForm')[0].reset();
  if (response.returnmsg === undefined){
    alert("Success!");
  }else{
    alert(response.returnmsg);
  }
    
}


function searchValue(Search,Range,SheetName){
    
    action = "searchValue";
    var formData = {
        sheetname: SheetName,
        range: Range,
        search: Search
    }
    
    var url = "https://script.google.com/macros/s/AKfycbwhZ02JFw86QYux8LXF5DR_Nu3vchRBRGlTSDJjFCmj1efM81DaKcvV8LUg7hyungu-sw/exec";
    url += "?function=" + action;
    url += "&" + $.param(formData);

    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(response) {
       
         Object.entries(response).forEach(function([key, value]) {
          alert(key + ": " + value);
        });
        alert("Iffdfd:" + response.found);
         return response.found;
      },
      error: function() {
        console.error("There was an error while searching.");
      }
    });

}
