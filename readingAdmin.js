
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
   // var dataValues = getSheetData("ReadingDB");
  alert("got in!");
      var dataValues = [
        { MeterNo: "12345", Date: "2023-06-01", PreviousReading: "1000",CurrentReading: "1200", CBMRate: 2.5, CBM: 200,Cost: 500, Remarks: "Sample remarks", IsLastReading: "Yes"  },
        { MeterNo: "12135", Date: "2023-06-01", PreviousReading: "1000",CurrentReading: "1200", CBMRate: 2.5, CBM: 200,Cost: 500, Remarks: "Sample remarks", IsLastReading: "Yes"  },
        { MeterNo: "12755", Date: "2023-06-01", PreviousReading: "1000",CurrentReading: "1200", CBMRate: 2.5, CBM: 200,Cost: 500, Remarks: "Sample remarks", IsLastReading: "Yes"  }
      ];
  
  Object.entries(dataValues).forEach(function([key, value]) {
    alert(key + ": " + value);
  });
  
    //  var spreadsheet = SpreadsheetApp.openById('your_spreadsheet_id');
   //   var sheet = spreadsheet.getSheetByName('your_sheet_name');
   //   var dataRange = sheet.getDataRange();
    //  var dataValues = dataRange.getValues();

      var headers = dataValues[0];
      var data = [];

      for (var i = 1; i < dataValues.length; i++) {
        var rowData = {};
        for (var j = 0; j < headers.length; j++) {
          rowData[headers[j]] = dataValues[i][j];
        }
        data.push(rowData);
      }

      var tableHtml = '<table>';
      tableHtml += '<tr>';
      for (var k = 0; k < headers.length; k++) {
        tableHtml += '<th>' + headers[k] + '</th>';
      }
      tableHtml += '</tr>';

      for (var l = 0; l < data.length; l++) {
        tableHtml += '<tr>';
        for (var m = 0; m < headers.length; m++) {
          tableHtml += '<td>' + data[l][headers[m]] + '</td>';
        }
        tableHtml += '</tr>';
      }

      tableHtml += '</table>';

      // Inject the table HTML into an HTML element on your webpage
      document.getElementById('tableContainer').innerHTML = tableHtml;
}

function downloadTable(){
  // Specify the ID or class of the HTML table you want to convert
  var tableSelector = 'myTable';
alert("Got in!");
  // Export the table to Excel
  $(tableSelector).table2excel({
    filename: 'C:\\Users\\DILG_NCR\\Downloads' // Specify the desired file name with the .xlsx extension
  });
 alert("downloaded!");
}
