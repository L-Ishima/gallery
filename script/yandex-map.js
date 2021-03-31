// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.7609,37.6238],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

    // Создание геообъекта с типом точка (метка).
    var desktopAddress = new ymaps.Placemark([55.7585,37.6011], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Group 68.svg',
        iconImageSize: [20, 20],
        preset: 'islands#whiteStretchyIcon'
    });
    var mobileAddress = new ymaps.Placemark([55.8109,36.9723], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Group 68.svg',
        iconImageSize: [20, 20],
        preset: 'islands#whiteStretchyIcon'
    });
    function toggleAddress() {
        if (window.innerWidth <= 1024) {
            myMap.setCenter([55.8109,36.9723]);
            myMap.geoObjects.remove(desktopAddress);
            myMap.geoObjects.add(mobileAddress); 
        }
        if (window.innerWidth > 1024) {
            myMap.setCenter([55.7585,37.6011]);
            myMap.geoObjects.remove(mobileAddress);
            myMap.geoObjects.add(desktopAddress);
        }
    }

    toggleAddress();

    window.addEventListener(`resize`, event => {
        toggleAddress();
    });
}