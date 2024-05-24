var countDownDate1 = new Date("Jul 26, 2024 00:00:00").getTime();
var countDownDate2 = new Date("Sep 19, 2024 00:00:00").getTime();
var countDownDate3 = new Date("Dec 31, 2024 00:00:00").getTime();

var timer1 = document.getElementById("timer1");
var timer2 = document.getElementById("timer2");
var timer3 = document.getElementById("timer3");
var timer4 = document.getElementById("timer4");
var timer5 = document.getElementById("timer5");
var timer6 = document.getElementById("timer6");
var timer7 = document.getElementById("timer7");

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

function phase5NextHider() {
  var x = document.getElementById("phase5Next");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function phase5UpcomingHider() {
  var x = document.getElementById("phase5Upcoming");
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