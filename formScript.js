function initForm(){
 // alert("initializing...");
  
// Add an event listener for the input of meter ID
 /*
  var inputMeternumber = document.getElementById("meternumber");
   inputMeternumber.addEventListener("input", function() {
    eventMeterNumberChange();
  });
  */
 
// Add an event listener for the input of Current Month
  var inputCurmonth = document.getElementById("curmonth");
  inputCurmonth.addEventListener("input", function() {
    eventCurrentMonthChange();
  });
  
  //preset values
  //Preset date
    var currentDate = new Date();
  // Format the date as YYYY-MM-DD
    var formattedDate = currentDate.toISOString().split("T")[0];
    document.getElementById("date").value = formattedDate;
  
 // alert("initialized");
}
function setReadOnlyElementValue(e, v){
  // Assuming 'lockedElement' is the locked element you want to change
  var lockedElement = document.getElementById(e);
 
  // Remove the readonly attribute
  lockedElement.removeAttribute('readonly');
  
  // Update the value
  lockedElement.value = 'New Value';
  
  // Restore the readonly attribute
  lockedElement.setAttribute('readonly', 'true');
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
  calcCBM();
 // var buttonElement = document.getElementById("calculateCBM");
  //  buttonElement.disabled = false;
}

function calcCBM(){
  // get values
 var cbmrate = document.getElementById("cbmrate").value;
 var curmonth = document.getElementById("curmonth").value;
 var prvmonth = document.getElementById("prvmonth").value;
 var calcNote = document.getElementById("calcNote");
 var saveReading = document.getElementById("saveReading");
  
  //calculate
  if (curmonth < prvmonth){
    calcNote.style.display = "block";
    saveReading.disabled = true;
    calcNote.value = "Current Reading cannot be lower than Previous Reading!";
    return;
  } else {
    calcNote.style.display = "none";
    saveReading.disabled = false;
  }
  
 var cbm = (curmonth-prvmonth)
 var cost = (cbm*cbmrate)
 
 //set values
  document.getElementById("cbm").value = cbm;
  document.getElementById("cost").value = cost;
 //setValue("cbm",cbm);
 //setValue("cost",cost);
 // document.getElementById("calculateCBM").disabled = true;
}

function setValue(elementId,elementValue) {
  var element = document.getElementById(elementId);
  if (element.readOnly) {
    element.readOnly = false;
    element.value = elementValue;
    element.readOnly = true;
  }
}

function clearAllData(){
 
}


function showDWSMessageBox(message) {
  var messageBox = document.getElementById("customMessageBox");
  var messageText = document.getElementById("messageText");
  messageText.textContent = message;
  messageBox.style.display = "flex";
}



function showDWSWindow(e) {
  var messageBox = document.getElementById(e);
  messageBox.style.display = "flex";
}

function hideDWSWindow(e) {
  var messageBox = document.getElementById(e);
  messageBox.style.display = "none";
}
