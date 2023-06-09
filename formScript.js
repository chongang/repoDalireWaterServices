function initForm(){
  
// Add an event listener for the input of meter ID
  input.addEventListener("meternumber", function() {
    eventMeterNumberChange();
  });
  
// Add an event listener for the input of Current Month
  input.addEventListener("curmonth", function() {
    eventCurrentMonthChange();
  });
  alert("initialized");
}

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

function eventMeterNumberChange() {
  var inputElement = document.getElementById("meternumber");
  var buttonElement = document.getElementById("getAccount");
  
  if (inputElement.value.length < 6) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
}

function eventCurrentMonthChange() {
  var buttonElement = document.getElementById("calculateCBM");
    buttonElement.disabled = false;
}

function calcCBM(){
  // get values
 var cbmrate = document.getElementById("cbmrate").value;
 var curmonth = document.getElementById("curmonth").value;
 var prvmonth = document.getElementById("prvmonth").value;
  
  //calculate
  if (curmonth < prvmonth){
    alert("Current Reading cannot be lower than Previous Reading!");
    return;
  }
 var cbm = (curmonth-prvmonth)
 var cost = (cbm*cbmrate)
 
 //set values
  document.getElementById("cbm").value = cbm;
  document.getElementById("cost").value = cost;
  document.getElementById("calculateCBM").disabled = true;
}
