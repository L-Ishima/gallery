function gallerySlider() {
  const gallerySwiper = new Swiper('.gallery__slider', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    spaceBetween: 48,
    
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    
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
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
      }, 
      1366: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      }
    }
  });
}

gallerySlider();

function partnersSlider() {
  const swiper2 = new Swiper('.partners__slider', {
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    // centerSlides:true,
    
    navigation: {
      nextEl: '.partners__button_next',
      prevEl: '.partners__button_prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 3,
      }
    }
  });
}

partnersSlider();

function publicationSlider() {
  const publSlider = document.querySelector('.publication__slider');

  let pubSwiper;

  function pubsSlider() {
    if (window.innerWidth >= 768 && publSlider.dataset.mobile == 'false') {
      document.querySelectorAll('.publications__filter_item').forEach(function(item) {
        item.classList.add('hidden-item');
      })

      pubSwiper = new Swiper('.publication__slider', {
        slidesPerView: 3,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 55,

        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 45,
          },
          1920: {
            slidesPerView: 3,
          } 
        }
      });

      publSlider.dataset.mobile = 'true';
    }

    if (window.innerWidth <= 767) {
      publSlider.dataset.mobile = 'false';
      document.querySelectorAll('.publications__filter_item').forEach(function(item) {
        item.classList.add('hidden-item');
      })

      if (document.querySelector('.publication__slider').classList.contains('swiper-container-initialized')) {
        pubSwiper.destroy();
      };
    }
  }

  pubsSlider();

  window.addEventListener('resize', () => {
    pubsSlider();
  })
};

publicationSlider();

function toggleCheckedFilters() {
  const pubList = document.querySelector('.publications__filter_list');

  // function checkSizePubList() {
    // if (window.innerWidth <= 420 ) {
    //   pubList.dataset.mobile = 'true';
      document.querySelector('.publications__filter_title').classList.add('publications__filter_title--js');
      // if (pubList.dataset.mobile == 'true') {
        document.querySelector('.publications__filter_title--js').addEventListener('click', function() {
          document.querySelector('.publications__filter_title--js').classList.toggle('publications__filter_title--active');
          document.querySelectorAll('.publications__filter_item').forEach(function(fu) {
            fu.classList.toggle('hidden-item');
            if (fu.contains(fu.querySelector('input:checked'))) {
              fu.classList.add('visible-item');
            } else {
              fu.classList.remove('visible-item');
            }
          })
        })
      // }

    // }

    // if (window.innerWidth > 420) {
    //   pubList.dataset.mobile = 'false';
    //   document.querySelector('.publications__filter_title').classList.remove('publications__filter_title--js');
    //   document.querySelector('.publications__filter_title').classList.remove('publications__filter_title--active');
    //   // if (document.querySelector('.publications__filter_item').classList.contains('hidden-item')) {
    //     document.querySelectorAll('.publications__filter_item').forEach(function(fu) {
    //       fu.classList.remove('hidden-item');
    //     })
        // document.querySelector('.publications__filter_title').removeEventListener('click', function() {
        //   this.classList.toggle('publications__filter_title--active');
        //   document.querySelectorAll('.publications__filter_item').forEach(function(fu) {
        //     fu.classList.toggle('hidden-item');
        //     if (fu.contains(fu.querySelector('input:checked'))) {
        //       fu.classList.add('visible-item');
        //     } else {
        //       fu.classList.remove('visible-item');
        //     }
        //   });
        // });
      // }
  //   }
  // }

}

function checkSizePubList() {
  if (window.innerWidth <= 420 ) {
    toggleCheckedFilters();
  };

  if (window.innerWidth >= 421 ) {
    document.querySelector('.publications__filter_title').classList.remove('publications__filter_title--js');
    document.querySelector('.publications__filter_title').classList.remove('publications__filter_title--active');
    document.querySelectorAll('.publications__filter_item').forEach(function(fu) {
      fu.classList.remove('hidden-item');
    })
  };
}

checkSizePubList();

window.addEventListener('resize', () => {
  checkSizePubList();
})  



function eventsMobileSlider() {
  const eventsSlider = document.querySelector('.events-slider');

  let lastSwiper;

  function mobileEventsSlider() {
    if (window.innerWidth <= 767 && eventsSlider.dataset.mobile == 'false') {
      lastSwiper = new Swiper(eventsSlider, {
        slidesPerView: 1,
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

    if (window.innerWidth > 767) {
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

function contactsForm() {
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
}

contactsForm();

window.addEventListener('DOMContentLoaded', function() {
  function clickBurger() {
    document.querySelector('.burger').addEventListener('click', function() {
      document.querySelector('.burger__line--1').classList.toggle('line-active-1')
      document.querySelector('.burger__line--2').classList.toggle('line-active-2')
      document.querySelector('.burger__line--3').classList.toggle('line-active-3')
      document.querySelector('#menu').classList.toggle('is-active')
    })
  }

  clickBurger();
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('burger-menu')
    document.querySelector('.nav__list').classList.toggle('menu-list')
    document.querySelector('.login').classList.toggle('login__burger')
  })
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.lang__btn').forEach(function(item) {
    item.addEventListener('click', function() {
      item.classList.add('lang__btn--afterclick');
    })
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
    item.classList.add('visible');
  })
  document.querySelector('.events__js_btn').classList.add('hidden-item');
})

document.querySelectorAll('.filter_item__input').forEach(function(el) {
  if (el.checked == true) {
    el.style.display = 'none';
  }
});

document.querySelectorAll('.popup-icon').forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.add('popup-icon--target');
    setTimeout(function () {
      item.classList.remove('popup-icon--target');
    }, 5000);
  })
})

function changeContacts() {
  function changeContactsWhen() {
    if (window.innerWidth <= 1024) {
      document.querySelector('.address__title').innerHTML = "Шоурум №2";
      document.querySelector('.address__text').innerHTML = "Леонтьевский переулок, дом 5, строение 1";
    }
    if (window.innerWidth > 1024) {
      document.querySelector('.address__title').innerHTML = "Шоурум №4";
      document.querySelector('.address__text').innerHTML = "Покровский бульвар, дом 24, строение 3";
    }
  }

  changeContactsWhen();

  window.addEventListener(`resize`, event => {
    changeContactsWhen();
  })
 
}

changeContacts();