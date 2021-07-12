$( document ).ready( () => {
  $( '.hamburger' ).on( 'click', function() {
    $( this ).toggleClass( 'is-active' );
    $( '.header__nav_list' ).toggleClass( 'menu-active' );
  } );

  // переключение класса кнопок на странице мероприятий
  $( '.events__button' ).on( 'click', function() {
    $( '.events__button' ).removeClass( 'active_button' );
    $( this ).addClass( 'active_button' );
  } );

  // пагинация
  $( '.events__list' )
  
  var items = $(".events__list .events__item");
  var numItems = items.length;
  var perPage = 2;

  items.slice(perPage).hide();

  $('.pagination-container').pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
          var showFrom = perPage * (pageNumber - 1);
          var showTo = showFrom + perPage;
          items.hide().slice(showFrom, showTo).show();
      }
  });

  $('.news__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false
  })
});