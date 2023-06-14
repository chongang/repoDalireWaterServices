
  // Retrieve the checkbox element
  var checkbox = document.getElementById("myCheckbox");

  // Add an event listener to detect checkbox state changes
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      // Checkbox is checked
      console.log("Checkbox is checked");
      // Add your desired actions here
    } else {
      // Checkbox is not checked
      console.log("Checkbox is not checked");
      // Add your desired actions here
    }
  });


function loadReadingResult(){

      var data = [
        { MeterNo: "12345", Date: "2023-06-01", PreviousReading: "1000",CurrentReading: "1200", CBMRate: 2.5, CBM: 200,Cost: 500, Remarks: "Sample remarks", IsLastReading: "Yes"  },
        { MeterNo: "12135", Date: "2023-06-01", PreviousReading: "1000",CurrentReading: "1200", CBMRate: 2.5, CBM: 200,Cost: 500, Remarks: "Sample remarks", IsLastReading: "Yes"  },
        { MeterNo: "12755", Date: "2023-06-01", PreviousReading: "1000",CurrentReading: "1200", CBMRate: 2.5, CBM: 200,Cost: 500, Remarks: "Sample remarks", IsLastReading: "Yes"  }
      ];

      // Get a reference to the table element
      var table = document.getElementById("myTable");

      // Generate table header row
      var header = table.createTHead();
      var headerRow = header.insertRow();
      for (var key in data[0]) {
        var th = document.createElement("th");
        th.innerHTML = key;
        headerRow.appendChild(th);
      }

      // Generate table body rows
      var body = table.createTBody();
      for (var i = 0; i < data.length; i++) {
        var row = body.insertRow();
        for (var key in data[i]) {
          var cell = row.insertCell();
          cell.innerHTML = data[i][key];
        }
      }
  /*
    var dllink = document.getElementById("downloadExcelLink");
     var downloadDetails = generateExcelDownloadUrl();
      var downloadLink = '<a href="' + downloadDetails.downloadUrl + '" download="' + downloadDetails.fileName + '">Download Excel File</a>';
      dllink.innerHTML = showDownloadLink();
      */
}

function downloadTable(){
  // Specify the ID or class of the HTML table you want to convert
  var tableSelector = 'myTable';
alert("Got in!");
  // Export the table to Excel
  $(tableSelector).table2excel({
    filename: 'ReadingData.xlsx' // Specify the desired file name with the .xlsx extension
  });
 alert("downloaded!");
}
