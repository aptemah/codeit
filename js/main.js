'use strict'

jQuery(function($) {
    $(".touchslider").touchSlider({
      delay: 4000, // initial auto-scrolling delay for each loop
      mouseTouch: false,
      autoplay: true, // whether to move from image to image automatically
    });

  //scroll width
  var div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);


  const heightOfSlider = 537;
  const proportionsOfSlider = 0.537;

  var sliderViewport = document.querySelector(".touchslider-viewport"),
      sliderItems = document.querySelectorAll(".touchslider-item");

  sliderViewport.style.height = heightOfSlider + "px";
  for (var i = 0; i < sliderItems.length; ++i) {
    sliderItems[i].style.height = heightOfSlider + "px";
  }

  sliderSize();
  function sliderSize () {

    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth < 1000) {
      var relativeHeightOfSlider = viewportWidth * proportionsOfSlider;
      sliderViewport.style.height = relativeHeightOfSlider + "px";
      for (var i = 0; i < sliderItems.length; ++i) {
        sliderItems[i].style.height = relativeHeightOfSlider + "px";
      }
    } else {
      sliderViewport.style.height = heightOfSlider + "px";
      for (var i = 0; i < sliderItems.length; ++i) {
        sliderItems[i].style.height = heightOfSlider + "px";
      }
    };


      sliderViewport.style.width = viewportWidth - scrollWidth + "px";
      for (var i = 0; i < sliderItems.length; ++i) {
        sliderItems[i].style.width = viewportWidth - scrollWidth + "px";
      }

  }

  $( window ).resize(function() {
    sliderSize();
  });

  $("#feedback").on("click", function () {
    $(".popup").addClass("show");
  });

  $(".popup").on("click", function () {
    $(".popup").removeClass("show");
  });

  $(".popup .close").on("click", function () {
    $(".popup").removeClass("show");
  });

  $(".popup .content").on("click", function (e) {
    e.stopPropagation();
  });
});