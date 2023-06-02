$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var formData = {
      name: $('#name').val(),
      email: $('#email').val()
    };

    var url = "https://script.google.com/macros/s/AKfycbz9wyOZaUxtE9hJb6tAK3u-TJh1qhp9OBAJBxgklA07DimIw9c-nThr9xIs9uqLDLz1WQ/exec";
    var params = {
      name: formData.name,
      email: formData.email
    };

    $.ajax({
      url: url,
      dataType: "json",
      data: params,
      success: function(response) {
        handleResponse(response);
      },
      error: function() {
        console.error("There was an error submitting the form. Please try again.");
      }
    });
  });
});

