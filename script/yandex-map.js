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
                center: [48.879439, 2.349540],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 15
            });

            // Создание геообъекта с типом точка (метка).
            var myPlacemark = new ymaps.Placemark([48.879439, 2.349540], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/Subtract.png',
                iconImageSize: [28, 40],
                preset: 'islands#whiteStretchyIcon'
            });myMap.geoObjects.add(myPlacemark); 
        }