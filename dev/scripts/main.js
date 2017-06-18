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
	$('#burger').on('click tap', () => {
		$('.nav-links').toggleClass('show-nav');
	});
}

// Smooth scroll
portfolioApp.smoothScroll = () => {
	$('.scroll__button').click(() => {
		$('html, body').animate({
			scrollTop: $('#about').offset().top},
			'slow');
	});
}

// Scroll nav
portfolioApp.scrollNav = () => {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 500) {
			$('.nav-wrapper').addClass('nav__fixed');
		} else if ($(window).scrollTop() < 99) {
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