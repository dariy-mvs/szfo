$( document ).ready( () => {

  // переключение класса меню
  $( '.hamburger' ).on( 'click', function() {
    $( this ).toggleClass( 'is-active' );
    $( '.header__nav_list' ).toggleClass( 'menu-active' );
  } );

  // переключение класса кнопок на странице мероприятий
  $( '.events__button' ).on( 'click', function() {
    $( '.events__button' ).removeClass( 'active_button' );
    $( this ).addClass( 'active_button' );
  } );
} );
