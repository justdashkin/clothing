$(document).ready(function() {



  var $searchButton = $('.search-butt');
  $('.input-search').on('blur', searchBlur);
  $searchButton.on('click', activeSearch);
  $searchButton.on('mousedown', submitForm);
  $('#nav-menu').on('click', takeGender);
  basketCounter();


  $('.owl-carousel').owlCarousel({
      margin:0,
      nav:true,
      navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
      responsive:{
          0:{
              items:2
          },
          600:{
              items:4
          },
          1000:{
              items:5
          }
      }
  });


  function searchBlur() {
    $(".search-butt").toggleClass("active-butt");
    $(".input-search").toggleClass("active-input");
    if ($('.search-butt').hasClass('active-butt')) {
      $('.icon-search').attr("src", "img/icon_search_white.png");
    } else {
      $('.icon-search').attr("src", "img/icon_search.png");
    }
  }

  function activeSearch() {
    $(".search-butt").toggleClass("active-butt");
    $(".input-search").toggleClass("active-input").focus();
    if ($('.search-butt').hasClass('active-butt')) {
      $('.icon-search').attr("src", "img/icon_search_white.png");
    } else {
      $('.icon-search').attr("src", "img/icon_search.png");
    }
  }

  function submitForm() {
    if ($('.search-butt').hasClass('active-butt')) {
      $('.form-search').submit();
    }
  }

  function takeGender(e) {
    if (e.target.tagName != 'A') return;
    var gend = e.target.innerHTML;
    localStorage.setItem('gender', gend);
  }

  function basketCounter() {
    var basket = JSON.parse(localStorage.getItem('basket')),
      sum = 0;
    for (var i = 0; i < basket.length; i++) {
      sum += +basket[i].value;
    }
    $('.numb-items').html(sum);
  }


});
