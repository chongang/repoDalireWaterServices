$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var formData = {
      name: $('#name').val(),
      email: $('#email').val()
    };

    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbz9wyOZaUxtE9hJb6tAK3u-TJh1qhp9OBAJBxgklA07DimIw9c-nThr9xIs9uqLDLz1WQ/exec",
      method: "GET",
      dataType: "json",
      data: formData,
      success: function(response) {
        alert("Form submitted successfully!");
        $('#myForm')[0].reset(); // Reset the form after successful submission
      },
      error: function(xhr, status, error) {
        console.error(status + ": " + error);
        alert("There was an error submitting the form. Please try again.");
      }
    });
  });
});
