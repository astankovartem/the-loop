"use strict"


let nav1_link = document.querySelector('.nav1_link');
let nav1__itemList = document.querySelector('.nav1__itemList');


const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const headerFixed = () => {
    let scrollTop = window.scrollY;
    let introCenter = intro.offsetHeight / 3;
    
    if (scrollTop >= introCenter) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};
headerFixed();
window.addEventListener('scroll', () => {
	headerFixed();
});


let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body=document.querySelector('body');
if(isMobile.any()){
	body.classList.add('touch');
	let nav1_link = document.querySelectorAll('.nav1_link');
	for(let i=0; i<nav1_link.length; i++){
		let nav1__item = nav1_link[i].parentNode;
		let subMenu = nav1_link[i].nextElementSibling;
		let thisLink=nav1_link[i];
		thisLink.addEventListener('click', function(){
			subMenu.classList.toggle('open');
			nav1__item.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

let swiper = new Swiper('.intro-swiper', {
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay:{
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	}
});

let burger = document.querySelector(".burger");
let burger_window = document.querySelector(".burger_window");
let burger_line = document.querySelectorAll(".burger_line");
burger.addEventListener("click", menuFunction);


function menuFunction(e){
	burger_window.classList.toggle('active');
	for (let i of burger_line){
		i.classList.toggle('active');
	}
}


const scrollItems = document.querySelectorAll('.element-animation');
    
    const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 1.2) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('_active');
			} else {
				el.classList.remove('_active');
			}
		});
	};