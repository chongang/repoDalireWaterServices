function showTab(tabName) {
  // Hide all tab contents
  var tabContents = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove('active');
  }

  // Remove 'active' class from all navigation links
  var tabLinks = document.getElementsByClassName('tab-link');
  for (var j = 0; j < tabLinks.length; j++) {
    tabLinks[j].classList.remove('active');
  }

  // Show the selected tab content and set the navigation link as active
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}
