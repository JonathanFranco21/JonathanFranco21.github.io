var countDownDate1 = new Date("Aug 17, 2023 00:00:00").getTime();
var countDownDate2 = new Date("Sep 6, 2023 00:00:00").getTime();
var countDownDate3 = new Date("Oct 6, 2023 00:00:00").getTime();
//var countDownDate3 = new Date("Oct 13, 2023 00:00:00").getTime();
//var countDownDate3 = new Date("Oct 20, 2023 00:00:00").getTime();
//var countDownDate3 = new Date("Oct 27, 2023 00:00:00").getTime();
//var countDownDate3 = new Date("Nov 3, 2023 00:00:00").getTime();
var countDownDate4 = new Date("Nov 10, 2023 00:00:00").getTime();
//var countDownDate4 = new Date("Nov 10, 2023 00:00:00").getTime();
//var countDownDate4 = new Date("Nov 10, 2023 00:00:00").getTime();
var countDownDate5 = new Date("Nov 29, 2023 00:00:00").getTime();

var timer1 = document.getElementById("timer1");
var timer2 = document.getElementById("timer2");
var timer3 = document.getElementById("timer3");
var timer4 = document.getElementById("timer4");
var timer5 = document.getElementById("timer5");


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