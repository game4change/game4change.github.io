var current = 0,
    slides = document.getElementsByClassName("fade");
var current1 = 0,
    slides1 = document.getElementsByClassName("textfade");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);



setInterval(function() {
  for (var i = 0; i < slides1.length; i++) {
    slides1[i].style.opacity = 0;
  }
  current1 = (current1 != slides1.length - 1) ? current1 + 1 : 0;
  slides1[current1].style.opacity = 1;
}, 3000);

