function map(location = null) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWVtbWFycmVrY2hpIiwiYSI6ImNrajFxdWR5ejF1aHgzMW54d2dhNzJnbGsifQ.OjADCq-ckjfy-0QYOCZWYw';
    var map = new mapboxgl.Map({
        container: 'map',
        center: location,
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15
    });


    map.on('load', function() {
        add_marker(location, 'load');
        mapIsReady = true;

    });

    function add_marker(Position) {
        marker = new mapboxgl.Marker()
            .setLngLat(Position)
            .addTo(map)
    }
}