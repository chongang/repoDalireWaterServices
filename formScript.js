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

function calcCBM(){
  // get values
 var cbmrate = document.getElementById("cbmrate").value;
 var curmonth = document.getElementById("curmonth").value;
 var prvmonth = document.getElementById("prvmonth").value;
  
//  alert("cbmrate:" + cbmrate);
//  alert("curmonth:" + curmonth);
//  alert("prvmonth:" + prvmonth);
  
  //calculate
 var cbm = (curmonth-prvmonth)
 var cost = (cbm*cbmrate)
 
 //alert("cbm:" + cbm);
  //alert("cost:" + cost);
 //set values
  document.getElementById("cbm").value = cbm;
  document.getElementById("cost").value = cost;
}
