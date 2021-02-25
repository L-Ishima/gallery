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
  clickable: true,
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
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
    }, 
  }
});

const swiper2 = new Swiper('.partners-swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});