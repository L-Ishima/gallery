document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.events__btn--js').addEventListener('click', function () {
    document.querySelectorAll('.events__hidden_item').forEach(function (el) {
      el.classList.toggle('events__visible_item')
    })
  });

  function toggleCheckedFilters() {
    const filterTitle = document.querySelector('.js-title');
    const allFilterItems = document.querySelectorAll('.filter__item');

    function toggleFilterList() {
      filterTitle.classList.toggle('filter__title--active');

      if (filterTitle.classList.contains('filter__title--active')) {
        allFilterItems.forEach( function(el) {
          el.classList.add('hidden-item');
        })
      }

      else {
        allFilterItems.forEach( function(el) {
          el.classList.remove('hidden-item');
        })
      }
      
      allFilterItems.forEach(function (el) {
        
        el.classList.toggle('hidden-item');
        if (el.contains(el.querySelector('input:checked'))) {
          el.classList.add('visible-item');
        } else {
          el.classList.remove('visible-item');
        }
      });
    };

    function enableToggleFilterList() {
      filterTitle.addEventListener('click', function () {
        toggleFilterList();
      }),
        true
    };

    function disableToggleFilterList() {
      filterTitle.removeEventListener('click', function () {
        toggleFilterList();
      }, true)
      if (document.querySelector('.filter__item').classList.contains('hidden-item')) {
        allFilterItems.forEach(function (el) {
          el.classList.remove('hidden-item');
        })
      }
    }

    if (window.innerWidth <= 767) {
      allFilterItems.forEach(function (el) {
        
        el.classList.add('hidden-item');
      });
      enableToggleFilterList();
    };

    if (window.innerWidth >= 768) {
      disableToggleFilterList();
    }
  };

  toggleCheckedFilters();

  window.addEventListener('resize', () => {
    toggleCheckedFilters();
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
          spaceBetween: 15,

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
      colorWrong: '#D11616',
      messages: {
        name: 'Недопустимый формат',
        tel: 'Недопустимый формат',
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

  function clickBurger() {
    document.querySelector('.burger').addEventListener('click', function () {
      document.querySelector('.burger__line--1').classList.toggle('line-active-1');
      document.querySelector('.burger__line--2').classList.toggle('line-active-2');
      document.querySelector('.burger__line--3').classList.toggle('line-active-3');
      document.querySelector('.nav').classList.toggle('burger-menu')
      document.querySelector('.nav__list').classList.toggle('menu-list')
      document.querySelector('.login').classList.toggle('login__burger')
    })
  }

  clickBurger();

  document.querySelector('.lang__btn--italian').classList.add('lang__btn--afterclick');

  function clickAccordeonLink() {
    document.querySelectorAll('.accordion__link').forEach(function (el) {
      el.addEventListener('click', function (elClicked) {
        elClicked.preventDefault();
        document.querySelectorAll('.accordion__link').forEach(function (link) {
          link.classList.remove('accordion__link--active');
        })
        el.classList.add('accordion__link--active');

        if (el.innerHTML != 'Доменико Гирландайо') {
          document.querySelector('.catalog__name_artist').innerHTML = el.innerHTML;
          document.querySelector('.catalog__lifeline_artist').innerHTML = 'тест - тест!';
          document.querySelector('.catalog__artist_text').innerHTML = 'Тестовый тест!';
        } else {
          document.querySelector('.catalog__name_artist').innerHTML = 'Доменико Гирландайо';
          document.querySelector('.catalog__lifeline_artist').innerHTML = '2 июня 1448 - 11 января 1494';
          document.querySelector('.catalog__artist_text').innerHTML = 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).';
        }
      });
    });
  };
  clickAccordeonLink();

  document.querySelector('.ui-accordion-header-active').parentNode.nextElementSibling.querySelector('.ui-accordion-header').classList.add('no-border');

  document.querySelectorAll('.ui-accordion-header').forEach(function (el) {
    el.addEventListener('click', function () {
      document.querySelectorAll('.ui-accordion-header').forEach(function (elem) {
        elem.classList.remove('no-border');
      });
      if (el.classList.contains('ui-accordion-header-active')) {
        el.parentNode.nextElementSibling.querySelector('.ui-accordion-header').classList.add('no-border');
      }
    })
  })

  document.querySelectorAll('.lang__btn').forEach(function (el) {
    el.addEventListener('click', function () {
      document.querySelectorAll('.lang__btn').forEach(function (elem) {
        elem.classList.remove('lang__btn--afterclick');
      });
      el.classList.add('lang__btn--afterclick');
      document.querySelector('.accordeon__item__list').innerHTML = "";
      if (el.classList.contains('lang__btn--french')) {
        document.querySelector('.accordeon__item__list').innerHTML = `
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Анастасия</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Бартелеми д’Эйк</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Домбе, Гийом</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Дюве, Жан</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Жакмар де Эсден</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Иверни, Жак</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Картон, Ангерран</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Коломб, Жан</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link french link">Лиферинкс, Йос</button></li>
        `;
        clickAccordeonLink();
      }
      if (el.classList.contains('lang__btn--german')) {
        document.querySelector('.accordeon__item__list').innerHTML = `
          <li class="accordeon__item__el"><button href="#" class="accordion__link german link">Бургкмайр, Ханс</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link german link">Виц, Конрад</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link german link">Вольгемут, Михаэль</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link german link">Гольбейн, Ганс (Старший)</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link german link">Дюрер, Альбрехт</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link german link">Катцхаймер, Вольфганг</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link german link">Конрад фон Зост</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link german link">Лохнер, Штефан</button></li>
        `;
        clickAccordeonLink();
      }
      if (el.classList.contains('lang__btn--italian')) {
        document.querySelector('.accordeon__item__list').innerHTML = `
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Бенедетто ди Биндо</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Бергоньоне, Амброджо</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Биссоло, Франческо</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Больтраффио, Джованни</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Бонсиньори, Франческо</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Боттичини, Рафаэлло</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Брамантино</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Бреа, Людовико</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Бьяджо д'Антонио Туччи</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Веккьетта</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Андреа Верроккьо</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link default-choice">Доменико Гирландайо</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Беноццо Гоццоли</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Граначчи, Франческо</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Грегорио ди Чекко</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Джованни да Удине</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Джованни ди Паоло</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Джорджоне</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Парентино, Бернардо</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Пезеллино</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Пьетро Перуджино</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Перуцци, Бальдассаре</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Пизанелло</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link italian link">Пинтуриккьо</button></li>
        `;
        clickAccordeonLink();
      }
      if (el.classList.contains('lang__btn--russian')) {
        document.querySelector('.accordeon__item__list').innerHTML = ` 
          <li class="accordeon__item__el"><button href="#" class="accordion__link russian link">Амвросий</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link russian link">Дионисий</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link russian link">Прохор с Городца</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link russian link">Андрей Рублёв</button></li>
        `;
        clickAccordeonLink();
      }
      if (el.classList.contains('lang__btn--belgian')) {
        document.querySelector('.accordeon__item__list').innerHTML = ` 
          <li class="accordeon__item__el"><button href="#" class="accordion__link russian link">Робер Кампен</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link russian link">Рогир ван дер Вейден</button></li>
          <li class="accordeon__item__el"><button href="#" class="accordion__link russian link">Ян ван Эйк </button></li>
        `;
        clickAccordeonLink();
      }
    })
  })

  document.querySelector('.gallery__img--modal').addEventListener('click', function () {
    document.querySelector('.modal-overlay').classList.add('modal-overlay--active')
    document.querySelector('body').classList.add('overflow-hidden')
  })

  document.querySelector('.modal-collapse').addEventListener('click', function () {
    document.querySelector('.modal-overlay').classList.remove('modal-overlay--active')
    document.querySelector('body').classList.remove('overflow-hidden')
  })

  document.querySelector('.events__btn--js').addEventListener('click', function () {
    document.querySelectorAll('.events__item').forEach(function (item) {
      item.classList.add('visible');
    })

    document.querySelector('.events__btn--js').classList.add('hidden-item');
  })

  document.querySelectorAll('.filter__input').forEach(function (el) {
    if (el.checked == true) {
      el.style.display = 'none';
    }
  });

  document.querySelectorAll('.popup-icon').forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.remove('popup-icon--default-color');
      item.classList.add('popup-icon--target-color');
      item.querySelector('.popup-item').classList.add('popup-item--target');
      setTimeout(function () {
        item.classList.add('popup-icon--default-color');
        item.classList.remove('popup-icon--target-color');
        item.querySelector('.popup-item').classList.remove('popup-item--target');
      }, 5000);
    })
  })

  function changeContacts() {
    function changeContactsWhen() {
      const addressTitle = document.querySelector('.address__title');
      const addressText = document.querySelector('.address__text');

      if (window.innerWidth <= 1024) {
        addressTitle.innerHTML = "Шоурум №2";
        addressText.innerHTML = "Леонтьевский переулок, дом 5/1";
      }
      if (window.innerWidth > 1024) {
        addressTitle.innerHTML = "Шоурум №4";
        addressText.innerHTML = "Леонтьевский переулок, дом 5, строение 1";
      }
    }

    changeContactsWhen();

    window.addEventListener(`resize`, event => {
      changeContactsWhen();
    })
  }

  changeContacts();

  let selectedTitle;
  document.querySelector('.styles__list').addEventListener('click', function (list) {
    let target = list.target;

    if (target.className != 'styles__title') return;

    letDrop(target);
    list.stopPropagation();

    function letDrop(title) {
      if (selectedTitle) {
        selectedTitle.classList.remove('styles__title--active');
        selectedTitle.nextElementSibling.classList.add('hidden-select');
      }
      selectedTitle = title;
      selectedTitle.classList.add('styles__title--active');
      selectedTitle.nextElementSibling.classList.remove('hidden-select');
    }
  })

  window.addEventListener('click', function () {
    document.querySelectorAll('.styles__title').forEach(function (el) {
      el.classList.remove('styles__title--active');
      el.nextElementSibling.classList.add('hidden-select');
    });
  });

  document.querySelector('.default-choice').classList.add('accordion__link--active');

  document.querySelectorAll('.accordeon__item').forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelectorAll('.accordeon__item').forEach(function(items) {
        items.classList.remove('accordeon__item--active');
      });
      item.classList.add('accordeon__item--active');
    })
  })

  function getSearchForm() {
    if (window.innerWidth <= 1024) {
      document.querySelector('.search__btn').addEventListener('click', function() {
        document.querySelector('.styles').classList.toggle('styles--max-width');
        document.querySelector('.search__input').classList.toggle('search__input--visible');
        document.querySelector('.search-form').classList.toggle('search-form__max-width');
      })
      if (window.innerWidth <= 1023) {
        document.querySelector('.search__btn').addEventListener('click', function() {
          document.querySelector('.logo').classList.toggle('logo--hidden');
          document.querySelector('.burger').classList.toggle('burger--hidden');
          document.querySelector('.header__container').classList.toggle('header__container--mobile');
          document.querySelector('.hero__container').classList.toggle('hero__container--mobile');
          document.querySelector('.search__btn').classList.toggle('search__btn--mobile');
        })
      }
      
    }
  }

  getSearchForm();
});