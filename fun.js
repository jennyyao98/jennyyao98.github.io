$(function() {
    $('body').removeClass('fade-out');
});
// document.getElementsByClassName("btn2").style.filter = "grayscale(100%)";
// var button2 = document.getElementsByClassName("style");
// var button1 = document.getElementsByClassName("style");

$(document).ready(function(){
  $(".grid2").hide();
  $(".grid").show();
  $(".btn1").click(function(){
    // e.preventDefault();
    // button2.style.filter = "grayscale(100%)";
    // button1.style.filter = "grayscale(0%)";

    $(".grid2").hide();
    $(".grid").show();
    // button1.style.filter = "grayscale(0%)";
  });
  $(".btn2").click(function(){
    // e.preventDefault();
    $(".grid").hide();
    $(".grid2").show();
    // button1.style.filter = "grayscale(100%)";
    // button2.style.filter = "grayscale(0%)";


  });
});
