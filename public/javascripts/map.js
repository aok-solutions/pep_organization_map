L.mapbox.accessToken = 'pk.eyJ1IjoiYXlhbmdhIiwiYSI6ImNpdWU1enFmMzAwYXgyem53OGcxeDE3ZXUifQ.R4ol0xumVJ2vq8VhvWMP0g';

var map = L.mapbox.map('map', 'mapbox.light')
    .setView([40, -94.50], 4);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = { type: "FeatureCollection",
    features: [
        { type: "Feature",
            geometry: {type: "Point", "coordinates": [-87.629798, 41.878114]},
            properties: {
                title: "Union of Electricians",
                engagementLevel: 3,
                cityState: "Chicago, IL",
                members: [],
                'marker-color': '#f86767',
                'marker-size': 'large',
                'marker-symbol': 'star'
            }
        },
        { type: "Feature",
            geometry: {type: "Point", "coordinates": [-77.03201, 38.90065]},
            properties: {
                title: "350.org",
                engagementLevel: 1,
                cityState: "Washington, DC",
                members: ["Idalin Bobé"],
                'marker-color': '#7ec9b1',
                'marker-size': 'large',
                'marker-symbol': 'star'
            }
        },
        { type: "Feature",
            geometry: {type: "Point", "coordinates": [-74.005941, 40.712784]},
            properties: {
                title: "National Latina Institute for Reproductive Justice",
                engagementLevel: 1,
                cityState: "New York, NY",
                members: ["Idalin Bobé"],
                'marker-color': '#1ec4b1',
                'marker-size': 'large',
                'marker-symbol': 'star'
            }
        },
        { type: "Feature",
            geometry: {type: "Point", "coordinates": [-118.243685, 34.052234]},
            properties: {
                title: "Uplift Inglewood",
                engagementLevel: 2,
                cityState: "Los Angeles, CA",
                members: ["Stephanie"],
                'marker-color': '#5ec2e1',
                'marker-size': 'large',
                'marker-symbol': 'star'
            }
        }
    ]
};

myLayer.setGeoJSON(geojson);
myLayer.on('mouseover', function(e) {
    e.layer.openPopup();
});
myLayer.on('mouseout', function(e) {
    e.layer.closePopup();
});