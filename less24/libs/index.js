new Swiper('.swiper-container', {
	loop: true,
	autoplay: {
		dalay: 100,
		disableOnInteraction: false,
	}
})

const burger = document.querySelector('.header__menu__btn');
const show = document.querySelector('.header__menu');
let bool = true;
burger.addEventListener("click", (btn) => {
	if (bool) {
		show.classList.add('active');
		bool = !bool
	} else {
		show.classList.remove('active');
		bool = !bool;
	}
})
show.addEventListener('click', (b) => {
	if (b.target == show) {
		show.classList.remove('active');
	} else {
		// show.classList.add('active');
	}
})
