const swiper = new Swiper('.hero__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const swiper2 = new Swiper('.gallery__slider', {
     // Optional parameters
     slidesPerView: 3,
     slidesPerColumn: 2,
     slidesPerGroup: 3,
     direction: 'horizontal',
     loop: true,
   
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
    }
  });

  const swiper3 = new Swiper('.partners-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });