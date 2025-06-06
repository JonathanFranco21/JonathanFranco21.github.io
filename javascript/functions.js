var countDownDate1 = new Date("Apr 1, 2025 00:00:00").getTime();
var countDownDate2 = new Date("May 2, 2025 00:00:00").getTime();
var countDownDate3 = new Date("Jun 24, 2025 00:00:00").getTime();
var countDownDate4 = new Date("Jul 25, 2025 00:00:00").getTime();
var countDownDate5 = new Date("Aug 6, 2025 18:00:00").getTime();
var countDownDate6 = new Date("Oct 3, 2025 00:00:00").getTime();


var timer1 = document.getElementById("timer1");
var timer2 = document.getElementById("timer2");
var timer3 = document.getElementById("timer3");
var timer4 = document.getElementById("timer4");
var timer5 = document.getElementById("timer5");
var timer6 = document.getElementById("timer6");
var timer7 = document.getElementById("timer7");
var timer8 = document.getElementById("timer8");

function countdown(finish_date, timer){
  var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = finish_date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = days + " day(s), " + hours + " hour(s), " + minutes + " minute(s), " + seconds + " second(s)";


    if (distance < 0) {
      clearInterval(x);
      timer.innerHTML = "NOW AVAILABLE";
    }
  }, 1000);
}

countdown(countDownDate1, timer1)
countdown(countDownDate2, timer2)
countdown(countDownDate3, timer3)
countdown(countDownDate4, timer4)
countdown(countDownDate5, timer5)
countdown(countDownDate6, timer6)
countdown(countDownDate7, timer7)
countdown(countDownDate8, timer8)

function phase1hider() {
  var x = document.getElementById("phase1");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phase2hider() {
  var x = document.getElementById("phase2");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phase3hider() {
  var x = document.getElementById("phase3");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phase4hider() {
  var x = document.getElementById("phase4");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phase5hider() {
  var x = document.getElementById("phase5");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phase6NextHider() {
  var x = document.getElementById("phase6Next");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phase6UpcomingHider() {
  var x = document.getElementById("phase6Upcoming");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phase6Hider() {
  var x = document.getElementById("phase6");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phaseUnknownHider() {
  var x = document.getElementById("phaseUnknown");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var modal = document.getElementById("ironManModal");

// Get the button that opens the modal
var btn = document.getElementById("ironManBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}