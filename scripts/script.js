let center = [55.74074112342451, 37.99879782368382]

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 15,
        controls: ['routePanelControl']
    })

    let control = map.controls.get('routePanelControl')
    let city = 'Балашиха'


    control.routePanel.state.set({
        type: 'masstransit',
        fromEnabled: false,
        from: locationText,
        toEnabled: true,
        to: `${city}, Невский проспект 146`,
    });

    


    let placemark = new ymaps.Placemark([55.7412859505367,38.003684279816184], {
        balloonContentHeader: ' Хедер балуна',
        balloonContentBody: 'Боди балуна',
        balloonContentFooter: 'Подвал',
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/location-pin.png',
        IcomImageSize: [5, 5],
        IconImageOffset: [-10, -10],
    })

    let placemark1 = new ymaps.Placemark([55.7412859505367,38.003684279816184], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon_address">г. Париж</div>
            <div class="balloon_contacts">
            <a href="tel:+79999999999">+79999999999</a>
</div>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/location-pin.png',
        IcomImageSize: [5, 5],
        IconImageOffset: [-10, -10],
    })

    // map.geoObjects.add(placemark)
    map.geoObjects.add(placemark1)

}
ymaps.ready(init);

