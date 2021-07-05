
const header = document.querySelector('.header.container');
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 150) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});