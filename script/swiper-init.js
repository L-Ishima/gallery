window.addEventListener('DOMContentLoaded', function() {
function gallerySlider() {
  const gallerySwiper = new Swiper('.gallery__slider', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    spaceBetween: 50,
    
    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },
    
    navigation: {
      nextEl: '.gallery__next_position',
      prevEl: '.gallery__prev_position',
    },

    updateOnWindowResize: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      }, 
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1600: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1920: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 40,
      }
    }
  });
}

gallerySlider();

function partnersSlider() {
  const swiper2 = new Swiper('.partners__slider', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    
    navigation: {
      nextEl: '.partners__button_next',
      prevEl: '.partners__button_prev',
    },

    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 37,
      },
      1023: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 2,
        spaceBetween: 45,
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
        item.classList.remove('hidden-item');
      })

      pubSwiper = new Swiper('.publication__slider', {
        slidesPerView: 2,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 50,

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
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          1600: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 50,
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

});