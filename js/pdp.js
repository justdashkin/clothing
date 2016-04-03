$(document).ready(function() {


  $('.breadcrumbs').append("<a href = 'category-all.html'>" + localStorage.getItem('gender') + "</a>").append(" / <a>" + localStorage.getItem('itemClicked') + "</a>");

  $('#small-images').on('click', showPicture);
  $('#sizeDiv').on('click', takeSize);
  $('#add-to-card').on('click', addToBasket);
  $('.close').on('click',closeWindow);

  function closeWindow(){
    var modal = $('#modalWindow');
    $(modal).css({'display':'none'});
  }

  function modalWindow(){
    var modal = $('#modalWindow');
    $(modal).css({'display':'block'})
  }


  function addToBasket(e) {
    var buttons = $('.size'),
      sizeClicked = false;
    for (var i = 0; i < buttons.length; i++) {
      if ($(buttons[i]).hasClass('activeSize')) {
        sizeClicked = true;
      }
    }
    if (sizeClicked) {
      var item = JSON.parse(localStorage.getItem('product')),
        valueMatch = false, // if the values match
        basket = JSON.parse(localStorage.getItem('basket'));

      item.size = localStorage.getItem('size');
      for (var i = 0; i < basket.length; i++) {
        if (basket[i].name == item.name && basket[i].size == item.size && basket.length != 0) {
          basket[i].value = +basket[i].value + 1;
          valueMatch = true;
          break;
        }
      }
      if (valueMatch == true) {
        localStorage.setItem('basket', JSON.stringify(basket));
      } else {
        basket.push(item);
        localStorage.setItem('basket', JSON.stringify(basket));
      }
    } else {
      alert("Please, choose size!");
      e.preventDefault();
    }
    valueMatch = false;
  }


  function takeSize(e) {
    var target = e.target;
    if (target.tagName != 'BUTTON') return;
    var buttons = $('.size');
    for (var i = 0; i < buttons.length; i++) {
      if ($(buttons[i]).hasClass('activeSize')) {
        $(buttons[i]).removeClass('activeSize');
      }
    }
    $(target).addClass('activeSize');
    localStorage.setItem('size', target.innerHTML);
  }



  function showPicture(e) {
    var target = e.target;
    if (target.tagName != "IMG") return;
    var source = target.getAttribute('src'),
      resultSrc = source.replace(/_small_/ig, '_big_');
    $("#main_picture").fadeOut(300, function() {
      $(this).attr('src', resultSrc).bind('load', function() {
        if (this.complete) {
          $(this).fadeIn(300);
        }
      });
    });

  }


});
