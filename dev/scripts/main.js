import $ from 'jquery';

const portfolioApp = {};

portfolioApp.init = () => {
	portfolioApp.events();
	portfolioApp.scrollNav();
	portfolioApp.toPage();
}

portfolioApp.events = () => {
	portfolioApp.burgerClick();
	portfolioApp.smoothScroll();
}

// Click menu function
portfolioApp.burgerClick = () => {
	$('#burger').on('click tap', function() {
		$('.nav-links').toggleClass('show-nav');
		$(this).toggleClass('rotato');
		let navOpen = $('.nav-links').hasClass('show-nav');
		if (navOpen) {
			$('.burger-icon').toggleClass('hide')
				.queue(function() {
					$('.exit').toggleClass('hide show');
					$(this).dequeue();
				});
		} else {
			$('.exit').toggleClass('show hide');
			$('.burger-icon').toggleClass('hide');
		}
	});
}

// Smooth scroll
portfolioApp.smoothScroll = () => {
	$('.scroll__button').click(() => {
		$('html, body').animate({
			scrollTop: $('#about').offset().top},
			'slow');
	});
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
}

// Scroll nav
portfolioApp.scrollNav = () => {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 550) {
			$('.nav-wrapper').addClass('nav__fixed');
		} else {
			$('.nav-wrapper').removeClass('nav__fixed');
		}
	});
}

// Stuff appended to page
portfolioApp.toPage = () => {
	const date = new Date().getFullYear();
	$('.year').append(date);
}


$(function () {
	portfolioApp.init();
});