// Get the modals by id
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");

// Get the buttons that open the modals
let btn1 = document.getElementById("mini1");
let btn2 = document.getElementById("mini2");
let btn3 = document.getElementById("mini3");
let btn4 = document.getElementById("mini4");

// Get the close buttons for each modal
let close1 = document.getElementsByClassName("close")[0];
let close2 = document.getElementsByClassName("close")[1];
let close3 = document.getElementsByClassName("close")[2];
let close4 = document.getElementsByClassName("close")[3];

// Open the modals when the buttons are clicked
btn1.onclick = function() {
  modal1.style.display = "block";
};

btn2.onclick = function() {
  modal2.style.display = "block";
};

btn3.onclick = function() {
  modal3.style.display = "block";
};

btn4.onclick = function() {
  modal4.style.display = "block";
};

// Close the modals when the close buttons are clicked
close1.onclick = function() {
  modal1.style.display = "none";
};

close2.onclick = function() {
  modal2.style.display = "none";
};

close3.onclick = function() {
  modal3.style.display = "none";
};

close4.onclick = function() {
  modal4.style.display = "none";
};

// Close the modals when the user clicks anywhere outside the modal
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  }
};


const scrollDiv = document.getElementById('quote1');
const scrollBut = document.getElementById('topbutton');

function scrollToDiv() {
  scrollDiv.scrollIntoView({behavior: 'smooth'});
}
// Find out more button scrolls to content NOT WORKING

scrollBut.onclick = scrollToDiv;