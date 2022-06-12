$(document).ready(function () {
	$('.apartments__slider',).slick({
		// dots: false,
		// infinite: true,
		speed: 500,
		// slidesToShow: 1,
		// adaptiveHeight: false
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	$('.popup-gallery').slick({

		prevArrow: '<button type="button" class="slick-btn slider__arrow-left slick-prev"><img src="images/arrow-svg/arrow_left.svg" alt=""></button>',

		nextArrow: '<button type="button" class="slick-btn slider__arrow-right slick-next"><img src="images/arrow-svg/arrow_right.svg" alt=""></button>'
	});
	$('.popup-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}

	});
	new WOW().init();

	function btn(elem){
		$('html').animate({scrollTop: elem.offset().top}, 1500);
		
		}
		$(function(){
			$(".tab6").on("click", function(){
				btn($("#instruktors"))
			});
			$(".tab4").on("click", function(){
				btn($("#footer"))
			});
			$(".tab5").on("click", function(){
				btn($("#apartments"))
			});
			$(".tab7").on("click", function(){
				btn($("#gallery"))
			});
			$(".tab8").on("click", function(){
				btn($("#booking"))
			});
			$(".tab3").on("click", function(){
				btn($("#navigation"))
			});
			$(".tab2").on("click", function(){
				btn($("#navigation"))
			});
		
		});

		$(".menu__btn").click(function(){
			$(this).toggleClass("active");
			$(".menu__list").slideToggle(300);
		})
			
});





console.log(typeof menuList)
	

