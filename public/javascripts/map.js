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
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.005941,
                    40.712784
                ]
            },
            "properties": {
                "title": "New York, NY",
                "organizations": [
                    {
                        "name": "National Latina Institute for Reproductive Justice",
                        "engagementLevel": 1,
                        "members": ["Felipe", "Claudia"]
                    },
                    {
                        "name": "National Domestic Worker's Alliance",
                        "engagementLevel": 1,
                        "members": ["Felipe", "Claudia"]
                    },
                    {
                        "name": "Intereligious Foundation Community Organization",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "New York Collective of Radical Educators",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "New York Nurse Association",
                        "engagementLevel": 3,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Black Alliance for Just Immigration",
                        "engagementLevel": 1,
                        "members": ["Felipe", "Rahiel"]
                    },
                    {
                        "name": "Malcolm X Grassroots",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "El Grito Sunset Park",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Justice Committee",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Existance is Resistance",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "People Power Movement",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Eztudio 43",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Rockaway Youth Taskforce",
                        "engagementLevel": 1,
                        "members": ["Rahiel"]
                    },
                    {
                        "name": "NY Justice League",
                        "engagementLevel": 1,
                        "members": ["Rahiel"]
                    },
                    {
                        "name": "SEIU 32 BJ",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Revolutionary Student Coordination Committee",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "MinkWN",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "DRUM ",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "Families for Freedom",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "Brotherhood Sister Soul",
                        "engagementLevel": 1,
                        "members": ["Claudia", "Rahiel"]
                    },
                    {
                        "name": "Make the Road",
                        "engagementLevel": 1,
                        "members": ["Kevin","Claudia","Felipe"]
                    },
                    {
                        "name": "API for BlackLives",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "Queer Detenee Empowerment Project",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    },
                    {
                        "name": "Audre Lorde Project",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large",
                "marker-symbol": "star"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.036871,
                    38.907192
                ]
            },
            "properties": {
                "title": "Washington, DC",
                "organizations": [
                    {
                        "name": "350.org",
                        "engagementLevel": 1,
                        "members": ["Idalin"]
                    },
                    {
                        "name": "PICO Network",
                        "engagementLevel": 2,
                        "members": ["Rahiel"]
                    },
                    {
                        "name": "NAACP Legal Defense Fund",
                        "engagementLevel": 1,
                        "members": ["Rahiel"]
                    },
                    {
                        "name": "US Campaign to End the Occupation",
                        "engagementLevel": 1,
                        "members": ["Rahiel"]
                    },
                    {
                        "name": "UndocuBlack Network",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "APALA",
                        "engagementLevel": 1,
                        "members": ["Rahiel"]
                    },
                    {
                        "name": "GetEQUAL",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    },
                    {
                        "name": "Young People for",
                        "engagementLevel": 1,
                        "members": ["Rahiel"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large",
                "marker-symbol": "star"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -118.243685,
                    34.052234
                ]
            },
            "properties": {
                "title": "Los Angeles, CA",
                "organizations": [
                    {
                        "name": "Affirm National",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "NDLON",
                        "engagementLevel": 2,
                        "members": ["Felipe"]
                    },
                    {
                        "name": "Gabriela USA",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Unite Here - Local 11",
                        "engagementLevel": 1,
                        "members": []
                    },
                    {
                        "name": "ACCE",
                        "engagementLevel": 1,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Union de Vecinos",
                        "engagementLevel": 2,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Youth Justice Coalitions",
                        "engagementLevel": 3,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "PYFC",
                        "engagementLevel": 1,
                        "members": ["Rahiel"]
                    },
                    {
                        "name": "Uplift Inglewood",
                        "engagementLevel": 2,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "LA Tenants Union",
                        "engagementLevel": 3,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Crenshaw Subway Coalition",
                        "engagementLevel": 2,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Teamsters Port of LA",
                        "engagementLevel": 2,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Fight for $15",
                        "engagementLevel": 2,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Our Walmart",
                        "engagementLevel": 2,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Domestic Worker",
                        "engagementLevel": 3,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "UCLA Labor Center",
                        "engagementLevel": 1,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "COIL/ SLAD School teachers organizing within the teacher's union",
                        "engagementLevel": 3,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "United Teachers",
                        "engagementLevel": 3,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "Communication Workers of America",
                        "engagementLevel": 1,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "California Latinas for Reproductive Justice",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Ella Baker Center",
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
    map.setView(e.latlng, map.getZoom() + 3);

    var feature = e.layer.feature;
    var content = '<div><strong>' + feature.properties.title + '</strong>';
    for(var i = 0; i < feature.properties.organizations.length; i++){
        var org = feature.properties.organizations[i];
        var div = '<div>'+ org.name + ' - ' + org.engagementLevel + '</div>'
        content += div;
    }

    info.innerHTML = content;
});

map.on('click', empty);
empty();

function empty() {
    info.innerHTML = '<div></div>';
}