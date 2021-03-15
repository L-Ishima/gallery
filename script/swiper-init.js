const swiper = new Swiper('.gallery__slider', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerGroup: 3,
  direction: 'horizontal',
  observer: true,
  
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

  updateOnWindowResize: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      slidesPerColumnFill: 'row',
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      // spaceBetween: 34,
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
    768: {
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
    // 320: {
    //   swiper3.destroy();
    // },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 3,
    } 
  });
  swiper3.dataset.mobile = 'true';

  if (window.innerWidth > 320) {
    swiper3.dataset.mobile = 'false';
    if (document.querySelector('.publication__slider').classList.contains('swiper-container-initialized')) {
      swiper3.destroy();
    };
 
}
}

// add function for publication slider

window.addEventListener('resize', () => {
// add function for publication slider
})
  }
});

function eventsMobileSlider() {
  const eventsSlider = document.querySelector('.events-slider');

  let lastSwiper;

  function mobileEventsSlider() {
    if (window.innerWidth <= 600 && eventsSlider.dataset.mobile == 'false') {
      lastSwiper = new Swiper(eventsSlider, {
        slidesPerView: 1,
        // loop: true,
        slideClass: 'events__item',
        centeredSlides: true,
        spaceBetween: 10,

        pagination: {
          el: '.events__pagination',
          type: 'bullets',
          clickable: true,
          },
      });

      eventsSlider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 600) {
      eventsSlider.dataset.mobile = 'false';
      if (eventsSlider.classList.contains('swiper-container-initialized')) {
        lastSwiper.destroy();
      };
     
    }
  }

  mobileEventsSlider();

  window.addEventListener('resize', () => {
    mobileEventsSlider();
  })
};

eventsMobileSlider();

const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999) 999-99-99");

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

document.querySelector('.events__js_btn').addEventListener('click', function() {
  document.querySelectorAll('.events__item').forEach(function(item) {
    item.classList.toggle('visible');
  })
} )

document.querySelector('.publications__filter_title').addEventListener('click', function() {
  this.classList.toggle('publications__filter_title--active');
  document.querySelectorAll('.publications__filter_item').forEach(function(fu) {
    fu.classList.toggle('hidden-item');
    if (fu.contains(fu.querySelector('input:checked'))) {
      fu.classList.add('visible-item');
    } else {
      fu.classList.remove('visible-item');
    }
  })
})

document.querySelectorAll('.filter_item__input').forEach(function(el) {
 if (el.checked == true) {
    el.style.display = 'none';
}
 


});