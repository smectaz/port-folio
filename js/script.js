// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
const lien = document.querySelector(".lienScroll");
const lien2 = document.querySelector(".lienScroll2");
const lien3 = document.querySelector(".lienScroll3");
const lien4 = document.querySelector(".lienScroll4");
const lien5 = document.querySelector(".lienScroll5");
const lien6 = document.querySelector(".lienScroll6");
const lien7 = document.querySelector(".lienScroll7");
const lien8 = document.querySelector(".lienScroll8");

window.onscroll = function () {
	var top = window.scrollY;
	if (top >= 100) {
		header.classList.add("navbarDark");
		lien.classList.remove("lien");
		lien2.classList.remove("lien");
		lien3.classList.remove("lien");
		lien4.classList.remove("lien");
		lien5.classList.remove("lien");
		lien6.classList.remove("lien");
		lien7.classList.remove("lien");
		lien8.classList.remove("lien");
	} else {
		header.classList.remove("navbarDark");
		lien.classList.add("lien");
		lien2.classList.add("lien");
		lien3.classList.add("lien");
		lien4.classList.add("lien");
		lien5.classList.add("lien");
		lien6.classList.add("lien");
		lien7.classList.add("lien");
		lien8.classList.add("lien");
	}
};
