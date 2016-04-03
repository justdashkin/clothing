  $(document).ready(function() {
      $('.breadcrumbs').append("<a> " + localStorage.getItem('gender') + "</a>");

      function takeProduct(e) {
        var item = $(e.target).closest("div").attr('data-item'),
          sectionId = $(e.target).closest("section").attr('id');

        if (e.target.tagName === 'H3' || e.target.tagName === 'IMG') {
          localStorage.setItem('itemClicked', item);
          localStorage.setItem('sectionClicked', sectionId);
        }
      }


      $('#coats, #outwear, #tshirts').on('click', takeProduct);

    });
