function map(user_location = null) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmFraHJhd3kiLCJhIjoiY2pscWs4OTNrMmd5ZTNra21iZmRvdTFkOCJ9.15TZ2NtGk_AtUvLd27-8xA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: user_location,
        zoom: 5
    });
    //  geocoder here
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
    });

    var marker;
    map.on('load', function() {
        addMarker(user_location, 'load');
        mapIsReady = true;
        geocoder.on('result', function(ev) {});
    });

    function addMarker(ltlng, event) {

        if (event === 'click') {
            user_location = ltlng;
            // console.log(user_location);
        }
        marker = new mapboxgl.Marker({ draggable: true, color: "#d02922" })
            .setLngLat(user_location)
            .addTo(map)
            .on('dragend', onDragEnd);
    }

    function add_markers(coordinates) {

        var geojson = '';

        console.log(geojson);
        // add markers to map
        geojson.forEach(function(marker) {
            console.log(marker);
            // make a marker for each feature and add to the map
            new mapboxgl.Marker()
                .setLngLat(marker)
                .addTo(map);
        });

    }

    function onDragEnd() {
        // var lngLat = marker.getLngLat();

        // console.log(lngLat);

        // console.log('lng: ' + lngLat.lng + '<br />lat: ' + lngLat.lat);
    }


    return user_location;
}

function getLatLng() {
    lat = document.getElementById("lat").value;
    lng = document.getElementById("lng").value;
    if (!lat || isNaN(lat) || !lng || isNaN(lng))
        lat = lng = 10;
    return { lat: lat, lng: lng }
}