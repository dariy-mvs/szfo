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
  $( '.events__list' ).twbsPagination({
    totalPages: 35,
    visiblePages: 5,
    onPageClick: function (event, page) {
      $('#page-content').text('Page ' + page);
    }
  });
} );"use strict";

$(function () {

	$('.gallery__body a').hide();
	$('.gallery__body a.term_obrabotka').show();

	$('.gallery__nav a').click(function(){
		var filter = $(this).attr('filter');
		$('.gallery__nav a').removeClass('active');
		$(this).addClass('active');
		$('.gallery__body a').hide();
		$('.gallery__body a.'+filter).show();
		return false;
	});


    $(window).scroll(function(){
		var window_top = $(window).scrollTop();
		if (window_top > 3){
			$('.header__topLine').addClass('fix');
		}
		else{
			$('.header__topLine').removeClass('fix');
		};
    });

  var menu = $('.mainMenu');
  /*Menu button*/

  $('.menu_button').click(function () {
    $(this).toggleClass('is-active');
    menu.toggleClass('visible');
  });
  $('.faq_dropdown').click(function(){
    $(this).toggleClass('active');
  });
  var h=0;
  $('.newPreview_height').each(function(){
	if(h<$(this).height()){h=$(this).height();}
  });
  $('.newPreview_height').height(h);

  /*Articles show/hide*/

  $('.articlePreview__show').click(function () {
    $(this).toggleClass('articlePreview__show_active');
    $(this).parent().siblings('.articlePreview__body').toggle(200);
  });
  /*Law show/hide*/

  $('.lawBlock__indicator').click(function () {
    $(this).toggleClass('active');
    $(this).parent().siblings('.lawBlock__body').toggle(200);
  });
  runSliders();
  runPopUps();
  if($("#mapContainer").length){runMaps();}
  

	$('.callback_win').magnificPopup({
	  type: 'inline',

	  fixedContentPos: false,
	  fixedBgPos: true,

	  overflowY: 'auto',

	  closeBtnInside: true,
	  preloader: false,
	  
	  midClick: true,
	  removalDelay: 300,
	  mainClass: 'my-mfp-zoom-in'
	});
  $('.contact_block_button').magnificPopup({
	  type: 'inline',

	  fixedContentPos: false,
	  fixedBgPos: true,

	  overflowY: 'auto',

	  closeBtnInside: true,
	  preloader: false,
	  
	  midClick: true,
	  removalDelay: 300,
	  mainClass: 'my-mfp-zoom-in'
	});
  
  
    $('form.form_callback').submit(function (e) {
		if($(this).hasClass('search')) return
        var self = $(this);
        e.preventDefault();
        var field = ['user_name', 'user_phone']; //поля обязательные
        var error = 0;

        $(this).find('input').each(function () {
          console.log('\u0412\u044B \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B\u0438');
            for (var i = 0; i < field.length; i++) {
                if ($(this).attr('name') === field[i]) {
                    var textName;
					if($(this).attr('name')== 'user_name'){textName="ваше имя";}
					if($(this).attr('name')== 'user_phone'){textName="ваш номер";}
                    if (!$(this).val()) {
                        $(this).css('border-bottom', '2px solid red');
                        $(this).after('<span class="form__error-mess fixed">\u0412\u044B \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B\u0438 ' + textName + '</span>');
                        error = 1;
                    } else {
                        $(this).next().next().remove();
                        $(this).css('border-bottom', '2px solid #fefefe');
                    }
                }
            }
        });

		var form = $(this); 
		var formData = new FormData(form[0]);
		if (error === 0) {
			//$.magnificPopup.close();
			return $.ajax({
				type: self.attr('method'),
				url: self.attr('action'),
				data: formData,
				processData: false,
				contentType: false,
			}).done(function () {
				$.magnificPopup.open({
					items: {
						src: '#callback-small-dialog-s'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				}, 0);
			}).fail(function () {
				$.magnificPopup.open({
					items: {
						src: '#callback-small-dialog-e'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				}, 0);
			});
		}

    });

    $('form.form_send').submit(function (e) {
		if($(this).hasClass('search')) return
      
        var self = $(this);
        e.preventDefault();
        var field = ['user_name', 'user_phone', 'user_email']; //поля обязательные
        var error = 0;

        $(this).find('input').each(function () {
            for (var i = 0; i < field.length; i++) {
                if ($(this).attr('name') === field[i]) {
                    var textName;
					if($(this).attr('name')== 'user_name'){textName="ваше имя";}
					if($(this).attr('name')== 'user_phone'){textName="ваш номер";}
					if($(this).attr('name')== 'user_email'){textName="ваш email";}
                    if (!$(this).val()) {
                        $(this).css('border-bottom', '2px solid red');
                        $(this).after('<span class="form__error-mess">\u0412\u044B \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B\u0438 ' + textName + '</span>');
                        error = 1;
                    } else {
                        $(this).next().next().remove();
                        $(this).css('border-bottom', '2px solid #fefefe');
                    }
                }
            }
        });

		var form = $(this); 
		var formData = new FormData(form[0]);
		if (error === 0) {
			return $.ajax({
				type: self.attr('method'),
				url: self.attr('action'),
				data: formData,
				processData: false,
				contentType: false,
			}).done(function () {
				$.magnificPopup.open({
					items: {
						src: '#feedback-small-dialog-s'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				}, 0);
			}).fail(function () {
				$.magnificPopup.open({
					items: {
						src: '#feedback-small-dialog-e'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				}, 0);
			});
		}

    });


   $('form.form_send2').submit(function (e) {
		if($(this).hasClass('search')) return

        var self = $(this);
        e.preventDefault();
        var field = ['user_name', 'user_phone', 'user_email']; //поля обязательные
        var error = 0;

        $(this).find('input').each(function () {
            for (var i = 0; i < field.length; i++) {
                if ($(this).attr('name') === field[i]) {
                    var textName;
					if($(this).attr('name')== 'user_name'){textName="ваше имя";}
					if($(this).attr('name')== 'user_phone'){textName="ваш номер";}
					if($(this).attr('name')== 'user_email'){textName="ваш email";}
                    if (!$(this).val()) {
                        $(this).css('border-bottom', '2px solid red');
                        $(this).after('<span class="form__error-mess">\u0412\u044B \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B\u0438 ' + textName + '</span>');
                        error = 1;
                    } else {
                        $(this).next().next().remove();
                        $(this).css('border-bottom', '2px solid #fefefe');
                    }
                }
            }
        });

		var form = $(this); 
		var formData = new FormData(form[0]);
		if (error === 0) {
			return $.ajax({
				type: self.attr('method'),
				url: self.attr('action'),
				data: formData,
				processData: false,
				contentType: false,
			}).done(function () {
				$.magnificPopup.open({
					items: {
						src: '#feedback-small-dialog-s2'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				}, 0);
			}).fail(function () {
				$.magnificPopup.open({
					items: {
						src: '#feedback-small-dialog-e2'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				}, 0);
			});
		}

    });

function getNameField(engName, rusName) {
  if(document.querySelector('html').lang === 'en') {
    return engName
  } else if (document.querySelector('html').lang === 'ru') {
    return rusName
  }
}

   $('form.form_send_calc').submit(function (e) {
		if($(this).hasClass('search')) return
        var self = $(this);
        e.preventDefault();
        var field = ['user_name', 'user_adress', 'c_from', 'c_to','g_name','g_weight','g_size','g_volume','g_vid']; //поля обязательные
        var error = 0;

        $(this).find('input').each(function () {
            for (var i = 0; i < field.length; i++) {
                if ($(this).attr('name') === field[i]) {
                    var textName;
					if($(this).attr('name')== 'user_name'){textName = getNameField("your name", "ваше имя");}
					if($(this).attr('name')== 'user_adress'){textName=getNameField("your email", "ваш email");}
					if($(this).attr('name')== 'c_from'){textName=getNameField("country/city of destination","страну/город отправления");}
					if($(this).attr('name')== 'c_to'){textName=getNameField("country/city of departure","страну/город отправления");}
					if($(this).attr('name')== 'g_name'){textName=getNameField("shipping name" ,"наименование груза");}
					if($(this).attr('name')== 'g_weight'){textName=getNameField("cargo weight", "вес груза");}
					if($(this).attr('name')== 'g_size'){textName=getNameField("cargo size","размер груза");}
					if($(this).attr('name')== 'g_volume'){textName= getNameField("total cargo volume", "общий объем груза");}
					if($(this).attr('name')== 'g_vid'){textName=getNameField("type of packaging", "вид упаковки");}
          var messagePart;
          if(document.querySelector('html').lang === 'en') {
            messagePart = 'you did not give'
          } else if (document.querySelector('html').lang === 'ru') {
            messagePart = '\u0412\u044B \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043B\u0438'
          }
        
                    if (!$(this).val()) {
                        $(this).css('border-bottom', '2px solid red');
                        $(this).after(`<span class="form__error-mess"> ${messagePart}` + textName + '</span>');
                        error = 1;
                    } else {
                        $(this).next().next().remove();
                        $(this).css('border-bottom', '2px solid #fefefe');
                    }
                }
            }
        });

		var form = $(this); 
		var formData = new FormData(form[0]);
		if (error === 0) {
			return $.ajax({
				type: self.attr('method'),
				url: self.attr('action'),
				data: formData,
				processData: false,
				contentType: false,
			}).done(function () {
				$.magnificPopup.open({
					items: {
						src: '#feedback-small-dialog-s_c'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				}, 0);
			}).fail(function () {
				$.magnificPopup.open({
					items: {
						src: '#feedback-small-dialog-e_c'
					},
					type: 'inline',
					fixedContentPos: false,
					fixedBgPos: true,
					overflowY: 'auto',
					closeBtnInside: true,
					preloader: false,
					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				}, 0);
			});
		}

    });






});



function runSliders() {
  var mainServiceSlider = $('.serviceSlider__worker');
  mainServiceSlider.slick({
    lazyLoad: 'progressive',
    arrows: false,
    autoplay: true
  });
  mainServiceSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.serviceSlider__button_active').removeClass('serviceSlider__button_active');
    $('.serviceSlider__button:eq(' + currentSlide + ')').addClass('serviceSlider__button_active');
  });
  $('.serviceSlider__button').click(function () {
    var index = $(this).index();
    mainServiceSlider.slick('slickGoTo', index);
    $(this).siblings('.serviceSlider__button_active').removeClass('serviceSlider__button_active');
    $(this).addClass('serviceSlider__button_active');
  });
  $('.mainNews__slider').slick({
    // autoplay: true,
    appendArrows: '.mainNews__control',
    slidesToShow: 2,
    responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 1
      }
    }]
  });


	
  $('.klients_logo').slick({
     slidesToShow: 6,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	arrows: false,
	dots:true, 
		// centerMode: true,
 // variableWidth: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },{
      breakpoint: 780,
      settings: {
        slidesToShow: 2
      }
    },{
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('.responseSlider__worker').slick({
    // autoplay: true,
    appendArrows: '.responseSlider__control',
    slidesToShow: 2,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.sliderInService__worker').slick({
    // autoplay: true,
    appendArrows: '.sliderInService__control',
    slidesToShow: 1,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.bigImageSlider__worker').slick({
    // autoplay: true,
    appendArrows: '.bigImageSlider__control',
    slidesToShow: 1
  });
}

function runPopUps() {
  $('.gallery__image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
      preload: [0, 2],
      navigateByImgClick: true
    },
    zoom: {
      enabled: true,
      // By default it's false, so don't forget to enable it
      duration: 300,
      // duration of the effect, in milliseconds
      easing: 'ease-in-out',
      // CSS transition easing function
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function opener(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
  $('.responseSlider__link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
      preload: [0, 2],
      navigateByImgClick: true
    },
    zoom: {
      enabled: true,
      // By default it's false, so don't forget to enable it
      duration: 300,
      // duration of the effect, in milliseconds
      easing: 'ease-in-out',
      // CSS transition easing function
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function opener(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
}

function runMaps() {

	var center_map1 = 59.876426;
	var center_map2 = 30.311521;
	if($(".contactBlock").length){
		if($(".contactBlock").attr('map_crdn1')){center_map1 = $(".contactBlock").attr('map_crdn1');center_map2 = $(".contactBlock").attr('map_crdn2');}
	}

  ymaps.ready(function () {
    var myMap = new ymaps.Map('mapContainer', {
      center: [center_map1, center_map2],
      zoom: 15
    });
    myMap.behaviors.disable('scrollZoom');
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image'
    });
    myMap.geoObjects.add(myPlacemark);
  });
}
