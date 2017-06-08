// FlexSlider
$(window).on('load',function() {
  $('.flexslider').flexslider({
    animation: "fade",
    slideshow: false,
    controlNav: true,
    controlsContainer: "#navbar",
    manualControls: ".nav_ul li",
    animationLoop: true,
    directionNav: true
  });

  var nav_link = document.getElementsByClassName("nav_link");
  nav_link[0].addEventListener('click', function() {
    window.scrollTo(0,0);
  });
  nav_link[1].addEventListener('click', function() {
    window.scrollTo(0,0);
  });
  nav_link[2].addEventListener('click', function() {
    window.scrollTo(0,0);
  });
});
