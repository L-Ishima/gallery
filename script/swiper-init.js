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
  },

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
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 3,
    }
  }
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.call-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()

        return Number(phone) && phone.length === 10
      }
    },
  },
  colorWrong: '#FF5C00',
  messages: {
    name: 'Как вас зовут?',
    tel: 'Укажите ваш телефон',
  },

  submitHandler: function (form, values, ajax) {

    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback: function (response) {
        console.log(response)
      }
    });
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

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('burger-menu')
    document.querySelector('.nav__list').classList.toggle('menu-list')
    document.querySelector('.login').classList.toggle('login__burger')
    // document.querySelector('.login__burger').classList.toggle('effect-btn')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.lang__btn--french').addEventListener('click', function() {
    this.classList.add('lang__btn--afterclick')
  })
  document.querySelector('.lang__btn--german').addEventListener('click', function() {
    this.classList.add('lang__btn--afterclick')
  })
  document.querySelector('.lang__btn--italian').addEventListener('click', function() {
    this.classList.add('lang__btn--afterclick')
  })
  document.querySelector('.lang__btn--russian').addEventListener('click', function() {
    this.classList.add('lang__btn--afterclick')
  })
  document.querySelector('.lang__btn--belgian').addEventListener('click', function() {
    this.classList.add('lang__btn--afterclick')
  })
})

document.querySelector('.gallery__img--modal').addEventListener('click', function() {
  document.querySelector('.modal-overlay').classList.add('modal-overlay--active')
  document.querySelector('body').classList.add('overflow-hidden')
})

document.querySelector('.modal-collapse').addEventListener('click', function() {
  document.querySelector('.modal-overlay').classList.remove('modal-overlay--active')
  document.querySelector('body').classList.remove('overflow-hidden')
})


// const flexContainer = document.querySelector('#header-flex');

// function removeFlex() {
//   window.addEventListener('resize', function() {
//     if (window.matchMedia("(max-width: 1366)").matches) {
//       flexContainer.classList.remove('flex-container');
//   }
//   if (window.innerWidth() > 1366) {
//     flexContainer.classList.toggle('flex-container');
//   }
//   })
  
// }

// removeFlex();