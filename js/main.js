jQuery(function($) {
    $(".touchslider").touchSlider({
      delay: 4000, // initial auto-scrolling delay for each loop
      mouseTouch: false,
      autoplay: true, // whether to move from image to image automatically
    });
});

document.addEventListener("DOMContentLoaded", ready);

function ready() {

  var heightOfSlider = 537;

  var sliderViewport = document.querySelector(".touchslider-viewport"),
      sliderItems = document.querySelectorAll(".touchslider-item");

  sliderViewport.style.height = heightOfSlider + "px";
  for (var i = 0; i < sliderItems.length; ++i) {
    sliderItems[i].style.height = heightOfSlider + "px";
  }

  sliderSize();
  function sliderSize () {

    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


      if (viewportWidth > 1000) {


      sliderViewport.style.width = viewportWidth + "px";
      for (var i = 0; i < sliderItems.length; ++i) {
        sliderItems[i].style.width = viewportWidth + "px";
      }

      

    }
  }

  $( window ).resize(function() {
    sliderSize();
  });
};

