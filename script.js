    function showTab(tabName) {
      // Hide all tab contents
      var tabContents = document.getElementsByClassName('tab-content');
      for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
      }

      // Show the selected tab content
      document.getElementById(tabName).style.display = 'block';
