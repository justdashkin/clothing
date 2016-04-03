$(document).ready(function() {

  // media query event handler
  if (window.matchMedia) {
    var mq = window.matchMedia("(min-width: 769px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
  // media query change
  function WidthChange(mq) {

    if (mq.matches) {
      basketMaxWidth();
    } else {
      basketMinWidth();
    }

    function basketMaxWidth() {
      var basket = JSON.parse(localStorage.getItem('basket')),
        total = document.getElementsByClassName('total-price'),
        templateSec = $('#cart-data').html(),
        t = _.template(templateSec);

      $('.breadcrumbs').html("<a href = 'index.html'>HOME / </a><a href = 'category-all.html'>" +
        localStorage.getItem('gender') + "</a> / <a href = 'pdp.html'>" +
        localStorage.getItem('itemClicked') + "</a>");

      function getTotal(basket) {
        var q = basket.length,
          p = 0;
        while (q--) {
          p += +basket[q].amount * +basket[q].value;
        }
        return p.toFixed(2);
      }

      function deleteFromBasket(itemName, itemSize) {
        var basket = localStorage.getItem('basket'),
          basketArr = JSON.parse(basket);

        for (var i = 0; i < basketArr.length; i++) {
          if (basketArr[i].name == itemName && basketArr[i].size == itemSize) {
            basketArr.splice(i, 1);
          }
        }
        localStorage.setItem('basket', JSON.stringify(basketArr));
      }

      function takeValue() {
        $('.input-number').on('input', function(e) {
          var basket = JSON.parse(localStorage.getItem('basket')),
          elemName = $(e.target).closest('tr').children('.col2').children('h3').html(),
          elemSize = $(e.target).closest('tr').children(".col4").html();

          for (var i = 0; i < basket.length; i++) {
            if (basket[i].name == elemName && basket[i].size == elemSize) {
              basket[i].value = e.target.value;
            }
          }
          localStorage.setItem('basket', JSON.stringify(basket));

          total[0].innerHTML = getTotal(basket);
          removeElement();
        });
      }

      function removeElement() {
        $('.delete').click(function(event) {
          var target = event.target,
            item,
            itemSize,
            basket;

          if (target.tagName != "IMG") return;

          itemName = $(event.target).closest('tr').children('.col2').children('h3').html(),
          itemSize = $(event.target).closest('tr').children(".col4").html();

          deleteFromBasket(itemName, itemSize);
          basket = JSON.parse(localStorage.getItem('basket'));
          total[0].innerHTML = getTotal(basket);
          $(event.target).closest('tr').remove();
        });
      }

      $('.bag-table1').html(t({data:basket}));
      total[0].innerHTML = getTotal(basket);
      removeElement();
      takeValue();
    }

    function basketMinWidth() {

      var basket = JSON.parse(localStorage.getItem('basket')),
        total = document.getElementsByClassName('total-price'),
        templateSec = $('#cart-data-small').html(),
        t = _.template(templateSec);

      $('.breadcrumbs').html("<a href = 'index.html'>HOME / </a><a href = 'category-all.html'>" +
        localStorage.getItem('gender') + "</a> / <a href = 'pdp.html'>" +
        localStorage.getItem('itemClicked') + "</a>");

      function getTotal(basket) {
        var q = basket.length,
          p = 0;
        while (q--) {
          p += +basket[q].amount * +basket[q].value;
        }
        return p.toFixed(2);
      }

      function deleteFromBasket(itemName, itemSize) {
        var basket = localStorage.getItem('basket'),
          basketArr = JSON.parse(basket);

        for (var i = 0; i < basketArr.length; i++) {
          if (basketArr[i].name == itemName && basketArr[i].size == itemSize) {
            basketArr.splice(i, 1);
          }
        }

        localStorage.setItem('basket', JSON.stringify(basketArr));
      }

      function takeValue() {
        $('.input-number').on('input', function(e) {

          var basket = JSON.parse(localStorage.getItem('basket')),
            elemName = $(e.target).closest('td').children("h3").html(),
            elemSize = $(e.target).closest('td').children(".value-size").html();

          for (var i = 0; i < basket.length; i++) {
            if (basket[i].name == elemName && basket[i].size == elemSize) {
              basket[i].value = e.target.value;
            }
          }
          localStorage.setItem('basket', JSON.stringify(basket));
          total[0].innerHTML = getTotal(basket);
          removeElement();

        });
      }

      function removeElement() {
        $('.delete').click(function(e) {
          var target = e.target,
            itemName,
            itemSize,
            basket;

          if (target.tagName != "IMG") return;

          itemName = $(e.target).closest('tr').children(".col2").children("h3").html();
          itemSize = $(e.target).closest('tr').children(".col2").children(".value-size").html();

          deleteFromBasket(itemName, itemSize);

          basket = JSON.parse(localStorage.getItem('basket'));
          total[0].innerHTML = getTotal(basket);
          $(e.target).closest('tr').remove();

        });
      }

      $('.bag-table2').html(t({data: basket}));
      total[0].innerHTML = getTotal(basket);
      removeElement();
      takeValue();
    }
  }

});
