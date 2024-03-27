$(document).ready(function() {
    "use strict";

    $(".header_block_other_burger").click(function() {
      $(".modal").addClass("active");
      $("body").addClass("scroll");
    });

    $(".modal_close").click(function() {
      $(".modal").removeClass("active");
      $("body").removeClass("scroll");
    });

    $(".header_block_other ul li span").click(function() {
      var attr = $(this).attr("data-target");
      if(attr == 'main') {
        $([document.documentElement, document.body]).animate({
          scrollTop: 0
        }, 1500);
      } else {
        $([document.documentElement, document.body]).animate({
          scrollTop: $(`#${attr}`).offset().top
        }, 1500);
      }
    });

    $(".modal ul li span").click(function() {
      var attr = $(this).attr("data-target");
      $(".modal").removeClass("active");
      $("body").removeClass("scroll");
      if(attr == 'main') {
        $([document.documentElement, document.body]).animate({
          scrollTop: 0
        }, 1500);
      } else {
        $([document.documentElement, document.body]).animate({
          scrollTop: $(`#${attr}`).offset().top - 50
        }, 1500);
      }
    });

    $('.presentation_sliders').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      autoplay: false,
      infinite: true,
      cssEase: 'linear',
      appendDots: $(".dots"),
      fade: false,
      arrows: true,
      prevArrow: $('.slide-m-prev'),
      nextArrow: $('.slide-m-next'),
      responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              fade: true,
              slidesToScroll: 1
            }
          }
        ]
    });

});