L.mapbox.accessToken = 'pk.eyJ1IjoiYXlhbmdhIiwiYSI6ImNpdWU1enFmMzAwYXgyem53OGcxeDE3ZXUifQ.R4ol0xumVJ2vq8VhvWMP0g';

var info = document.getElementById('info');
var map = L.mapbox.map('map', 'mapbox.light')
    .setView([40, -94.50], 4);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -87.629798,
                    41.878114
                ]
            },
            "properties": {
                "title": "Chicago, IL",
                "organizations": [
                    {
                        "name": "Union of Electricians",
                        "engagementLevel": 3,
                        "members": []
                    },
                    {
                        "name": "Mijente",
                        "engagementLevel": 2,
                        "members": ["Felipe"]
                    },
                    {
                        "name": "Blocs Together",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Chicago International Youth Movement",
                        "engagementLevel": 1,
                        "members": ["Rahiel"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large",
                "marker-symbol": "star"
            }
        }
    ]
};


myLayer.setGeoJSON(geojson);

myLayer.on('click',function(e) {
    e.layer.closePopup();

    var feature = e.layer.feature;
    var content = '<div><strong>' + feature.properties.title + '</strong>';
    for(var i = 0; i < feature.properties.organizations.length; i++){
        var org = feature.properties.organizations[i];
        var div = '<div>'+ org.name + ' - ' + org.engagementLevel + '</div>'
        content += div;
    }

    info.innerHTML = content;
});

map.on('move', empty);
empty();

function empty() {
    info.innerHTML = '<div><strong>Organizations</strong></div>';
}