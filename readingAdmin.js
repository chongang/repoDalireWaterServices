
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
