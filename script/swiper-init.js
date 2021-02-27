const swiper = new Swiper('.gallery__slider', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  direction: 'horizontal',
  
  // If we need pagination
  pagination: {
  el: '.swiper-pagination',
  type: 'fraction',
  // clickable: true,
  },
   
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
    }, 
    1366: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
    }, 
    1920: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
    }
  }
});

const swiper2 = new Swiper('.partners__slider', {
  // Optional parameters
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  spaceBetween: 0,
  centerSlides: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1920: {
      slidesPerView: 3,
    }
  }
});

const swiper3 = new Swiper('.publication__slider', {
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  spaceBetween: 65,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    // clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.burger__line--1').classList.toggle('line-active-1')
    document.querySelector('.burger__line--2').classList.toggle('line-active-2')
    document.querySelector('.burger__line--3').classList.toggle('line-active-3')
    document.querySelector('#menu').classList.toggle('is-active')
  })
});