
$(document).ready(function() {
  
  $("#myForm").on("submit",function(event){
    event.preventDefault(); // Prevent the form from submitting normally
    meterno = $('#meternumberbase').val() + $('#meternumber').val();
    
    var clickedButton = $(document.activeElement);
    var action = clickedButton.data("action");

      if (action === "saveReading") {
        var objFound = searchValue(meterno, "A:A", "ReadingDB", function(objFound) {
        alert("objF: " + objFound);
        Object.entries(objFound).forEach(function([key, value]) {
          alert(key + " objFnd: " + value);
        });

        if (objFound.found) {
          alert("Meter No. [" + meterno + "] is already saved. Please delete the previous data and try again.");
          return;
        }
      });
    }

    
    //var meterno = $('#meternumberbase').val()+$('#meternumber').val();
    var formData = {
      meternumber: meterno,
      accountno: $('#accountno').val(),
      name: $('#name').val(),
      prvmonth: $('#prvmonth').val(),
      curmonth: $('#curmonth').val(),
      cbmrate: $('#cbmrate').val(),
      cbm: $('#cbm').val(),
      cost: $('#cost').val(),
      date: Date.now(), //$('#date').val(),
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
//  Object.entries(response).forEach(function([key, value]) {
//    alert(key + ": " + value);
//  });
  
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
            $('#cbmrate').val(response.rateamount); //set same initially
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


function searchValue(Search, Range, SheetName, callback) {
  var action = "searchValue";
  var searchData = {
    sheetname: SheetName,
    range: Range,
    search: Search
  };
 
  var url = "https://script.google.com/macros/s/AKfycbwhZ02JFw86QYux8LXF5DR_Nu3vchRBRGlTSDJjFCmj1efM81DaKcvV8LUg7hyungu-sw/exec";
  url += "?function=" + action;
  url += "&" + $.param(searchData);

  $.ajax({
    url: url,
    dataType: "jsonp",
    success: function(response) {
      var searchResult = {
        found: response.found,
        index: response.index
      };
      callback(searchResult); // Pass the result to the callback function
    },
    error: function() {
      console.error("There was an error while searching.");
    }
  });
}
