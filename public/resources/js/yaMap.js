ymaps.ready(init);

function init() {
    var myPlacemark,
        myMap = new ymaps.Map("map", {
            center: [51.817760, 55.176979],
            controls: ['zoomControl'],
            zoom: 15
        });

    myMap.controls.get('zoomControl').options.set({size: 'small'});

    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                [
                    [85, -179.99],
                    [85, 179.99],
                    [-85, 179.99],
                    [-85, -179.99],
                    [85, -179.99]
                ],
                // Координаты вершин внутреннего контура.
                [
                    [51.822871, 55.160999],
                    [51.814823, 55.169647],
                    [51.813114, 55.166302],
                    [51.807372, 55.171846],
                    [51.810514, 55.179704],
                    [51.812484, 55.177552],
                    [51.815177, 55.184069],
                    [51.819003, 55.183638],
                    [51.815395, 55.174558],
                    [51.818247, 55.171437],
                    [51.820336, 55.175927],
                    [51.824381, 55.177792],
                    [51.826306, 55.176717],
                    [51.828363, 55.174609]
                ]
            ]
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            balloonContent: "Вне зоны доставки, но скоро исправимся"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#f9cf38',
        // Цвет обводки.
        strokeColor: '#503778',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 5,
        // Стиль обводки.
        strokeStyle: 'shortdash',
        coordRendering: 'straightPath'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);

    // Слушаем клик на карте.
    myMap.events.add('click', function (e) {
        var coords = e.get('coords');

        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);
            // Слушаем событие окончания перетаскивания на метке.
            myPlacemark.events.add('dragend', function () {
                getAddress(myPlacemark.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    });

    // Создание метки.
    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            preset: 'islands#violetDotIconWithCaption',
            draggable: true
        });
    }

    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
        var coordsSplit = coords.toString().split(",");
        var x = Number(coordsSplit[0]).toFixed(6);
        var y = Number(coordsSplit[1]).toFixed(6);

        var distance = 10000;
        var searchCoords = coords;
        var searchAddress;

        for(var key in addresses) {
            var keyCoord = key.split(", ")
            var keyX = keyCoord[0];
            var keyY = keyCoord[1];
            var addressDistance = Math.sqrt(Math.pow(x - keyX, 2) + Math.pow(y - keyY, 2));

            if(addressDistance < distance) {
                searchCoords = [keyX, keyY];
                distance = addressDistance;
                searchAddress = addresses[key];
            }
        }

        movePlacemark(coords, searchCoords);
        $('.street').val(searchAddress).trigger("chosen:updated");
    }

    // Плавно передвигаем метку
    function movePlacemark(oldCoords, newCoords) {
        var i = 0

        let timerId = setInterval(function() {
            var t = (i + 1) / 50;

            var x = oldCoords[0] * (1 - t) + newCoords[0] * t;
            var y = oldCoords[1] * (1 - t) + newCoords[1] * t;

            var gapCoords = [x, y]

            myPlacemark.geometry.setCoordinates(gapCoords);

            if (i === 50) {
                clearInterval(timerId);
            }
            i++;
        }, 5);
    }
}
