document.addEventListener('DOMContentLoaded', function () {    
    document.querySelector('.events__js_btn').addEventListener('click', function() {
        document.querySelectorAll('.events__hidden_item').forEach(function(el) {
            el.classList.toggle('events__visible_item')
        }) 
    });


    function toggleCheckedFilters() {
        const filterTitle = document.querySelector('.publications__filter_title');
        const allFilterItems = document.querySelectorAll('.publications__filter_item');
    
        function toggleFilterList() {
        filterTitle.classList.toggle('publications__filter_title--active');
        allFilterItems.forEach(function(el) {
            el.classList.toggle('hidden-item');
            if (el.contains(el.querySelector('input:checked'))) {
            el.classList.add('visible-item');
            } else {
            el.classList.remove('visible-item');
            }
        });
        };
    
        function enableToggleFilterList() {
        filterTitle.addEventListener('click', function() {
            toggleFilterList();  
        }),
        true};
    
        function disableToggleFilterList() {
        filterTitle.removeEventListener('click', function() {
            toggleFilterList();  
        }, true)
        if (document.querySelector('.publications__filter_item').classList.contains('hidden-item')) {
            allFilterItems.forEach(function(el) {
            el.classList.remove('hidden-item');
            })
        }
        }
        
        if (window.innerWidth <= 767 ) {
        enableToggleFilterList();
        };
    
        if (window.innerWidth >= 768 ) {
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
    
        function clickBurger() {
        document.querySelector('.burger').addEventListener('click', function() {
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

        document.querySelectorAll('.italian').forEach(function(el) {
            el.addEventListener('click', function(elClicked) {
                elClicked.preventDefault();
                document.querySelectorAll('.italian').forEach(function(link) {
                    link.classList.remove('accordion__link--active');
                })
                el.classList.add('accordion__link--active');
                document.querySelectorAll('.lang__btn').forEach(function(item) {
                    item.classList.remove('lang__btn--afterclick');
                });
                document.querySelector('.lang__btn--italian').classList.add('lang__btn--afterclick');
            });
        });
    
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
            const addressTitle = document.querySelector('.address__title');
            const addressText =  document.querySelector('.address__text');
        
            if (window.innerWidth <= 1024) {
            addressTitle.innerHTML = "Шоурум №2";
            addressText.innerHTML = "Покровский бульвар, дом 24, строение 3";
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
    document.querySelector('.styles__list').addEventListener('click', function(list) {
        let target = list.target;

        if (target.className != 'styles__title') return;

        letDrop(target);
        list.stopPropagation();

        function letDrop (title) {
            if (selectedTitle) {
                selectedTitle.classList.remove('styles__title--active');
                selectedTitle.nextElementSibling.classList.add('hidden-select');
            }
            selectedTitle = title;
            selectedTitle.classList.add('styles__title--active');
            selectedTitle.nextElementSibling.classList.remove('hidden-select');
            selectedTitle.nextElementSibling.querySelectorAll('.styles__item').forEach(function(item) {
                item.classList.remove('scroll');
            });
            selectedTitle.nextElementSibling.querySelector('.styles__item').classList.add('scroll-default');
        } 
    })

    let selectedItem;
    document.querySelectorAll('.styles__select').forEach(function(select) {
        select.addEventListener('mouseover', function(list) {
            let target = list.target;

            select.querySelector('.styles__item').classList.remove('scroll-default');

            if (!target.classList.contains('styles__item')) return;

            letScrollThere(target);
            list.stopPropagation();

            function letScrollThere (item) {
                if (selectedItem) {
                    selectedItem.classList.remove('scroll');
                }
                
                selectedItem = item;
                selectedItem.classList.add('scroll');
            };
        });
    });

    window.addEventListener('click', function() {
        document.querySelectorAll('.styles__title').forEach(function(el) {
            el.classList.remove('styles__title--active');
            el.nextElementSibling.classList.add('hidden-select');
        });
    });

    document.querySelector('.default-choice').classList.add('accordion__link--active');
});