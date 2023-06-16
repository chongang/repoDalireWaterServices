
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
  
alert(tableHtml);
      // Inject the table HTML into an HTML element on your webpage
      document.getElementById('tableContainer').innerHTML = tableHtml;
}


// Load the API client and auth2 library
gapi.load('client:auth2', initReadinAdmin);
function initReadinAdmin(){

   gapi.client.init({
      apiKey: 'AIzaSyATxIfMaydkkFzjFUBz7uwAw-9xOLxg4yg',
      clientId: '325341223761-pf5ti9jbtt99gkmgsqg8f6b109e85scp.apps.googleusercontent.com',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      scope: 'https://www.googleapis.com/auth/drive.readonly'
    }).then(function() {
      // Authorization successful
      // Call the function to download the Google Sheet
      downloadSheet();
    }, function(error) {
      // Authorization failed
      console.error('Error initializing Google Drive API:', error);
    });
}

function downloadSheet() {
  // ID of the Google Sheet
  const sheetId = '1qGj_GDant2py8NXYW1q7GagZxkz2Gz7NwhoFnREeA0s';
  //const sheetId = 'YOUR_SHEET_ID';
  // Set the MIME type to download as Excel (.xlsx)
  const mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

  gapi.client.drive.files.export({
    fileId: sheetId,
    mimeType: mimeType
  }).then(function(response) {
    const fileData = response.body;
    const fileName = 'sheet.xlsx'; // Change the file name if needed

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = 'data:' + mimeType + ';base64,' + fileData;
    link.download = fileName;
    link.click();
  }, function(error) {
    console.error('Error downloading Google Sheet:', error);
  });
}
