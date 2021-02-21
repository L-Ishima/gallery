const swiper = new Swiper('.hero-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const swiper2 = new Swiper('.gallery-wrapper-container', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
   
     // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
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
  
    // If we need pagination
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });