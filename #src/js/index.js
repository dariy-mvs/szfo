$( document ).ready( () => {
  $( '.hamburger' ).on( 'click', function() {
    //$( this ).toggleClass( 'is-active' );
    if (!$(this).hasClass('is-active')) {
      $( this ).addClass( 'is-active' );
      $( '.header__nav_list' ).fadeIn(500);
    } else {
      $( this ).removeClass( 'is-active' );
      $( '.header__nav_list' ).fadeOut(500);
    }
    
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
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'dots-news'
          //infinite: true
        }
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'dots-news'
        }
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: 'dots-news'
        }
  }, 
  {
    breakpoint: 531,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 'dots-news',
      arrows: false
    }
}]
})
});