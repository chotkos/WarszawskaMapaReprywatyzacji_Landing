function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(52.2162596,20.9827604),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#27081C'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#27081C'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#825B73'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#825B73'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#36142A'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#5C3D51'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#5C3D51'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#27081C'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
    };
    var map1 = new google.maps.Map(document.getElementById("map1"), mapOptions);
    var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions);
    var map3 = new google.maps.Map(document.getElementById("map3"), mapOptions);

}
