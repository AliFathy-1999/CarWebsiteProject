$(document).ready(function(){
    $("#hide").click(function(){
          $("#style-ul").toggle();
    });
  });
  document.querySelector('video').play();
  var audio = new Audio('../images/carsound.wav');
  function playMotorSound(){
      audio.play();
  }

