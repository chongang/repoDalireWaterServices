
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
        { name: "John", age: 25, city: "New York" },
        { name: "Jane", age: 30, city: "London" },
        { name: "Bob", age: 35, city: "Paris" }
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

}
