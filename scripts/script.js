let center = [55.74074112342451, 37.99879782368382]

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 15
    })


    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: '/location-pin.png',
        IcomImageSize: [20, 20],
        IconImageOffset: [0, 0]
    })

    map.geoObjects.add(placemark)
}
ymaps.ready(init);

