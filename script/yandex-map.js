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
            var myPlacemark = new ymaps.Placemark([55.7585,37.6011], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/Group 68.svg',
                iconImageSize: [20, 20],
                preset: 'islands#whiteStretchyIcon'
            });myMap.geoObjects.add(myPlacemark); 
        }