/* header */

(function() {
    const header = document.querySelector(".header");
    const headerMenu = document.querySelector(".header__menu")
    const menuVisible = document.querySelector(".header__menu-wrap")

    document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
        header.classList.add("header_has-bg");
        headerMenu.classList.add("header__menu-scrolled");

    } else {
        /* header.classList.remove("header_has-bg"); */
        headerMenu.classList.remove("header__menu-scrolled");
        if (menuVisible.classList.contains("header__menu-wrap_visible")){
            header.classList.add("header_has-bg");} else {
                header.classList.remove("header_has-bg");
            };
        }


    });

    console.log(header)
})();

/* mobile menu */
(function () {
    const header = document.querySelector(".header");
    const burger = document.querySelector(".header__burger");
    const menuContainerEl = document.querySelector(".header__menu-wrap");
    
    burger.addEventListener('click', function() {
    menuContainerEl.classList.toggle('header__menu-wrap_visible');
    
    header.classList.toggle('header_has-bg');
    if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");} 
   /*  document.body.classList.toggle('content-hidden'); */
    
    });

    console.log(header);

})();

/* timer */
function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
const t = getTimeRemaining(endtime);

daysSpan.innerHTML = t.days;
hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

if (t.total <= 0) {
        clearInterval(timeinterval);
}
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}
const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerColumn: 2,  
    slidesPerGroup: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 30, 
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1.5,
        slidesPerColumn: 2,  
        slidesPerGroup: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 30, 
    },

    660: {
        slidesPerView: 2,
        slidesPerColumn: 2,  
        slidesPerGroup: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 30, 
    }
}
});

const swiper2 = new Swiper(".teachersSwiper", {
    slidesPerView: 3,
    spaceBetween: 30, 
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1.5
    },

    660: {
        slidesPerView: 2,
    },

    990: {
        slidesPerView: 3
    },
}
});

