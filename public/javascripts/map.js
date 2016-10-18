L.mapbox.accessToken = 'pk.eyJ1IjoiYXlhbmdhIiwiYSI6ImNpdWU1enFmMzAwYXgyem53OGcxeDE3ZXUifQ.R4ol0xumVJ2vq8VhvWMP0g';

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
                "title": "Union of Electricians (3)- Chicago",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    0,
                    0
                ]
            },
            "properties": {
                "title": "Trade Unions for Energy Democracy (2)- for contacts for teachers- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "350.org (1)-Washington, DC Idalin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "National Latina Institute for Reproductive Justice (1)- New York City Felipe and Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "National Domestic Worker's Alliance (1)- New York City, Claudia and Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Affirm National (1)- LA Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Intereligious Foundation Community Organization  International (1)- New York City Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "PICO Network (1)- Washington, DC  Rahiel",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "NAACP Legal Defense Fund (1)- Washington, DC Rahiel",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -81.417406,
                    26.418525
                ]
            },
            "properties": {
                "title": "Student Farmworker Association (2)- Immokalee, FL",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    0,
                    0
                ]
            },
            "properties": {
                "title": "Moms Demand Action (1)- Rahiel",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -118.469483,
                    33.985047
                ]
            },
            "properties": {
                "title": "Code Pink (1)-Venice, CA",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    0,
                    0
                ]
            },
            "properties": {
                "title": "Bagong Alyansang Makabayan (New Patriotic Alliance) (1)- Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    0,
                    0
                ]
            },
            "properties": {
                "title": "National Prison Divestment Campaign (1)- Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Students for Justice in Palestine (1)- Kevin- Know the NY chapter",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Us Campaign to End the Occupation- Washington, DC",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "UndocuBlack Network (1)- Kevin- Washington, DC",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "APALA (1)-Washington, DC Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Black Alliance for Just Immigration (1)- Felipe and Rahiel- NYC",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "GetEQUAL (1)- Felipe- Washington, DC",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Young People for (1)- Felipe Washington DC",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "NDLON (1)- Felipe- LA",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -87.629798,
                    41.878114
                ]
            },
            "properties": {
                "title": "Mijente (2)- Felipe- Chicago/ Phoenix",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Gabriela USA (2) LA Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Unite Here -local 11 LA- 1",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.271114,
                    37.804364
                ]
            },
            "properties": {
                "title": "Unite Here- 28.50  Oakland- 1",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "ACCE (LA)- 1- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.271114,
                    37.804364
                ]
            },
            "properties": {
                "title": "ACCE (Oakland)- 1- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.676482,
                    45.523062
                ]
            },
            "properties": {
                "title": "Org of tenants Portland- 2- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.332071,
                    47.606209
                ]
            },
            "properties": {
                "title": "LELO PECO 3- Seattle Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Union de Vecinos- 2 LA- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Youth Justice Coalitions- 3 LA- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "PYFC 1- LA- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Uplift Inglewood- LA 2- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "LA Tenants Union 3- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Crenshaw Subway coaltion 2 LA- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Teamsters Port of LA- 2- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Fight for $15- LA- 2- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Our Walmart 2- LA- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Domestic Worker LA (3)- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "UCLA Labor Center (1)- LA Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "COIL/ SLAD School teachers organizing within the teacher's union- LA 3- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "United Teachers LA (3)- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Communication Workers of America  (1)- LA Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.419416,
                    37.774929
                ]
            },
            "properties": {
                "title": "The way/ Live free (1)- Idalin Bay Area",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.419416,
                    37.774929
                ]
            },
            "properties": {
                "title": "United Players (2)- Idalin Bay Area",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.419416,
                    37.774929
                ]
            },
            "properties": {
                "title": "Dream Defenders (3)- Idalin Bay area",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.419416,
                    37.774929
                ]
            },
            "properties": {
                "title": "Quilombo (3)-Bay Area political education every week/ occupation of land- Idalin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.419416,
                    37.774929
                ]
            },
            "properties": {
                "title": "Marcus Book Store (3)- Bay Area Idalin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "California Latinas for Reproductive Justice (1)- LA Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -122.271114,
                    37.804364
                ]
            },
            "properties": {
                "title": "SOL collective (1)- Oakland Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    0,
                    0
                ]
            },
            "properties": {
                "title": "California Immigrant Justice Youth Alliance (2)- Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    0,
                    0
                ]
            },
            "properties": {
                "title": "Immigrant Youth Coalition CA(2)- Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Ella Baker Center (1) LA- Rahiel",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -110.926479,
                    32.221743
                ]
            },
            "properties": {
                "title": "Scholarships A to Z (1)- Tuscan, AZ Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -97.743061,
                    30.267153
                ]
            },
            "properties": {
                "title": "University Leadership Initiative (1) Austin, TX- Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -87.906474,
                    43.038902
                ]
            },
            "properties": {
                "title": "Youth Empowered in the Struggle Milwaukee, WI  (1)- Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -87.906474,
                    43.038902
                ]
            },
            "properties": {
                "title": "Voces de la Frontera (1)- Milwaukee, WI Felipe and Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -106.485022,
                    31.761878
                ]
            },
            "properties": {
                "title": "Texas Border Farmworkers El Paso, TX (2)- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -93.265011,
                    44.977753
                ]
            },
            "properties": {
                "title": "Minnesota NOC- Local SEIU (2)- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -90.199404,
                    38.627003
                ]
            },
            "properties": {
                "title": "Misouri ACORN (MORE)/ Black Meza Arizona (1 or 2) Anti-mining- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -98.493628,
                    29.424122
                ]
            },
            "properties": {
                "title": "Unite Here San Antonio (1)- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -87.629798,
                    41.878114
                ]
            },
            "properties": {
                "title": "Blocs Together Chicago (1)- Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -83.045754,
                    42.331427
                ]
            },
            "properties": {
                "title": "New Era Detroit (1-2)- Rahiel",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -87.629798,
                    41.878114
                ]
            },
            "properties": {
                "title": "Chicago International Youth Movement (1)- Rahiel",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -111.651302,
                    35.198284
                ]
            },
            "properties": {
                "title": "Black Mesa Indigineous support collective Flagstaff, Arizona (1)- Arizona Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -94.578567,
                    39.099727
                ]
            },
            "properties": {
                "title": "Kansas Misouri DREAM Act- (1) Kasas City, MO Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -96.796988,
                    32.776664
                ]
            },
            "properties": {
                "title": "Dallas North Texas DREAM Team (1)- Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -102.556274,
                    43.025541
                ]
            },
            "properties": {
                "title": "National Indigenous Youth Alliance South Dakota (1)- Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -75.165222,
                    39.952584
                ]
            },
            "properties": {
                "title": "Youth United for Change - (2) Philadelphia Idalin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -75.165222,
                    39.952584
                ]
            },
            "properties": {
                "title": "Philadelphia Student Union (1)-Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Malcolm X Grassroots (1) NYC- Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "El Grito Sunset Park (1)- NYC Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Justice Committee (1)- NYC Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Churches United for Fair Housing (1)- NYC Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Existance is Resistance (1)- NYC Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "People Power Movement (1)-NYC  Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Eztudio 43 (1) NYC Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Rockaway Youth Taskforce (2)- Rahiel- NYC",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "NY Justice League (1)-NYC  Rahiel",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    null,
                    null
                ]
            },
            "properties": {
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -81.417406,
                    26.418525
                ]
            },
            "properties": {
                "title": "Coalition of Immokalee Workers (1)- Immokalee, FL Rahiel, Felipe and Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -76.612189,
                    39.290385
                ]
            },
            "properties": {
                "title": "Leaders for a beautiful struggle (1-2) Rahiel Baltimore",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "SEIU 32 BJ (1)- NYC Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -71.05888,
                    42.360082
                ]
            },
            "properties": {
                "title": "Student Immigrant Movement (1)- Boston Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    0,
                    0
                ]
            },
            "properties": {
                "title": "Connecticut Students for a Dream (1)- Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Revolutionary Student Coordination Committee (1)- Kevin NYC",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "MinkWN (1)- Kevin NYC",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "DRUM (1)- NYC Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Queens Neighborhoods United (1)-NYC  Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Families for Freedom (1)- NYC Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Brotherhood Sister Soul (1)- NYC Claudia and Rahiel",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Make the Road NY (1)- NYCKevin, Claudia and Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "New York Collective of Radical Educators (1)- NYC Claudia Radical educator",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "API for BlackLives (1)- NYC Kevin",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -80.19179,
                    25.76168
                ]
            },
            "properties": {
                "title": "Florida Immigrant Coalition (1)- Miami, FLFelipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -81.532215,
                    28.693408
                ]
            },
            "properties": {
                "title": "Farmworker Association of Florida (1)- Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -81.379236,
                    28.538335
                ]
            },
            "properties": {
                "title": "QLatinx (1)- Orlando, FL Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -81.532215,
                    28.693408
                ]
            },
            "properties": {
                "title": "Hope Community Center (1)- Apopka, FL Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -82.457178,
                    27.950575
                ]
            },
            "properties": {
                "title": "LULAC in Tampa (1)- Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -78.898619,
                    35.994033
                ]
            },
            "properties": {
                "title": "Southern on New Ground (1)- Durham, NC Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -86.781602,
                    36.162664
                ]
            },
            "properties": {
                "title": "Southeast Immigrant Rights Network (1)- Nashville, TN Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -86.80249,
                    33.520661
                ]
            },
            "properties": {
                "title": "Alabama Coalition for Immigrant Justice (1)- Birmingham, AL Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -86.781602,
                    36.162664
                ]
            },
            "properties": {
                "title": "Tennesse Immigrant and Refugee Coalition (2)- Nashville, TN Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -84.387982,
                    33.748995
                ]
            },
            "properties": {
                "title": "Georgia Latino Alliance for Human Rights (1)-Atlanta, GA Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Queer Detenee Empowerment Project (1)- NYC Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "Audre Lorde Project (1)- NYC Claudia",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -80.19179,
                    25.76168
                ]
            },
            "properties": {
                "title": "Miami Worker Center (1)- Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -80.19179,
                    25.76168
                ]
            },
            "properties": {
                "title": "SEIU Southeast (1)- Miami, FL Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -80.19179,
                    25.76168
                ]
            },
            "properties": {
                "title": "Dream Defenders (1)- Miami, FL Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                "title": "New York Nurse Association (3)- Stephanie",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
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
                    -80.094209,
                    26.934225
                ]
            },
            "properties": {
                "title": "El Sol (1)- Jupitor, FL Felipe",
                "engagementLevel": 1,
                "cityState": "",
                "members": [],
                "marker-color": "#f86767",
                "marker-size": "large",
                "marker-symbol": "star"
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