L.mapbox.accessToken = 'pk.eyJ1IjoiYXlhbmdhIiwiYSI6ImNpdWU1enFmMzAwYXgyem53OGcxeDE3ZXUifQ.R4ol0xumVJ2vq8VhvWMP0g';

var info = document.getElementById('info');

var map = L.mapbox.map('map', 'mapbox.light', {
    minZoom: 3
}).setView([40, -76], 4);

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
                        "members": ["Stephanie"]
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
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                    },
                    {
                        "name": "Students for Justice in Palestine",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "RDACBX",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Estudios 43",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "marker-size": "large"
                
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
                    },
                    {
                        "name": "California Immigrant Justice Youth Alliance",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "Immigrant Youth Coalition",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    }
                ],
                "marker-color": "#4ca8ff",
                "marker-size": "large"
                
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
                "title": "Immokalee, FL",
                "organizations": [
                    {
                        "name": "Student Farmworker Alliance",
                        "engagementLevel": 2,
                        "members": ["Rahiel","Felipe","Claudia"]
                    },
                    {
                        "name": "Coalition of Immokalee Workers",
                        "engagementLevel": 1,
                        "members": ["Rahiel","Felipe","Claudia"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Venice, CA",
                "organizations": [
                    {
                        "name": "Code Pink",
                        "engagementLevel": 1,
                        "members": []
                    }
                ],
                "marker-color": "#4ca8ff",
                "marker-size": "large"
                
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
                "title": "Oakland, CA",
                "organizations": [
                    {
                        "name": "Unite Here - 28.50",
                        "engagementLevel": 1,
                        "members": []
                    },
                    {
                        "name": "ACCE",
                        "engagementLevel": 1,
                        "members": ["Stephanie"]
                    },
                    {
                        "name": "SOL collective",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "The Way | Live free",
                        "engagementLevel": 1,
                        "members": ["Idalin"]
                    },
                    {
                        "name": "United Players",
                        "engagementLevel": 2,
                        "members": ["Idalin"]
                    },
                    {
                        "name": "Dream Defenders",
                        "engagementLevel": 3,
                        "members": ["Idalin"]
                    },
                    {
                        "name": "Qilombo",
                        "engagementLevel": 3,
                        "members": ["Idalin"]
                    },
                    {
                        "name": "Marcus Book Store",
                        "engagementLevel": 3,
                        "members": ["Idalin"]
                    }
                ],
                "marker-color": "#4ca8ff",
                "marker-size": "large"
                
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
                "title": "Portland, OR",
                "organizations": [
                    {
                        "name": "Org of tenants",
                        "engagementLevel": 2,
                        "members": ["Stephanie"]
                    }
                ],
                "marker-color": "#4ca8ff",
                "marker-size": "large"
                
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
                "title": "Seattle, WA",
                "organizations": [
                    {
                        "name": "LELO PECO",
                        "engagementLevel": 3,
                        "members": ["Stephanie"]
                    }
                ],
                "marker-color": "#4ca8ff",
                "marker-size": "large"
                
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
                "title": "Tuscon, AZ",
                "organizations": [
                    {
                        "name": "Scholarships A to Z",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Austin, TX",
                "organizations": [
                    {
                        "name": "University Leadership Initiative",
                        "engagementLevel": 1,
                        "members": []
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Milwaukee, WI",
                "organizations": [
                    {
                        "name": "Youth Empowered in the Struggle",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    },
                    {
                        "name": "Voces de la Frontera",
                        "engagementLevel": 1,
                        "members": ["Kevin", "Felipe"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "El Paso, TX",
                "organizations": [
                    {
                        "name": "Texas Border Farmworkers",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Minnesota, MN",
                "organizations": [
                    {
                        "name": "Minnesota NOC- SEIU",
                        "engagementLevel": 2,
                        "members": ["Stephanie"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "St Louis, MO",
                "organizations": [
                    {
                        "name": "Missouri ACORN (MORE)",
                        "engagementLevel": 1,
                        "members": ["Stephanie"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Flagstaff, AZ",
                "organizations": [
                    {
                        "name": "Black Mesa Indigenous Support Collective",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "San Antonio, TX",
                "organizations": [
                    {
                        "name": "Unite Here",
                        "engagementLevel": 1,
                        "members": ["Stephanie"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Detroit, MI",
                "organizations": [
                    {
                        "name": "New Era Detroit",
                        "engagementLevel": 2,
                        "members": ["Rahiel"]
                    },
                    {
                        "name": "Michigan Welfare Rights",
                        "engagementLevel": 1,
                        "members": ["Idalin"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Kansas City, MO",
                "organizations": [
                    {
                        "name": "Kansas Missouri DREAM Act",
                        "engagementLevel": 2,
                        "members": ["Kevin"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Dallas, TX",
                "organizations": [
                    {
                        "name": "Dallas North Texas DREAM Team",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Pine Ridge, SD",
                "organizations": [
                    {
                        "name": "National Indigenous Youth Alliance South Dakota",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#ffa84c",
                "marker-size": "large"
                
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
                "title": "Philadelphia, PA",
                "organizations": [
                    {
                        "name": "Youth United for Change",
                        "engagementLevel": 2,
                        "members": ["Idalin"]
                    },
                    {
                        "name": "Philadelphia Student Union",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    },
                    {
                        "name": "Put People First",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Baltimore, MD",
                "organizations": [
                    {
                        "name": "Leaders for a beautiful struggle",
                        "engagementLevel": 2,
                        "members": ["Rahiel"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Boston, MA",
                "organizations": [
                    {
                        "name": "Student Immigrant Movement",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -72.685093,
                    41.763711
                ]
            },
            "properties": {
                "title": "Hartford, CT",
                "organizations": [
                    {
                        "name": "Connecticut Students for a Dream",
                        "engagementLevel": 1,
                        "members": ["Kevin"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Miami, FL",
                "organizations": [
                    {
                        "name": "Florida Immigrant Coalition",
                        "engagementLevel": 1,
                        "members": ["Kevin", "Felipe"]
                    },
                    {
                        "name": "Miami Worker Center",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    },
                    {
                        "name": "SEIU Southeast",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    },
                    {
                        "name": "Dream Defenders",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Apopka, FL",
                "organizations": [
                    {
                        "name": "Farmworker Association of Florida",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    },
                    {
                        "name": "Hope Community Center",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Orlando, FL",
                "organizations": [
                    {
                        "name": "QLatinx",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Tampa, FL",
                "organizations": [
                    {
                        "name": "LULAC",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Durham, NC",
                "organizations": [
                    {
                        "name": "Southern on New Ground",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Nashville, TN",
                "organizations": [
                    {
                        "name": "Southeast Immigrant Rights Network",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    },
                    {
                        "name": "Tennessee Immigrant and Refugee Coalition",
                        "engagementLevel": 2,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Birmingham, AL",
                "organizations": [
                    {
                        "name": "Alabama Coalition for Immigrant Justice",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Atlanta, GA",
                "organizations": [
                    {
                        "name": "Georgia Latino Alliance for Human Rights",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
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
                "title": "Jupiter, FL",
                "organizations": [
                    {
                        "name": "El Sol",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"
                
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.212072,
                    44.475882
                ]
            },
            "properties": {
                "title": "Burlington, VT",
                "organizations": [
                    {
                        "name": "Vermont Worker Center",
                        "engagementLevel": 1,
                        "members": ["Felipe"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"

            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -82.551487,
                    35.595058
                ]
            },
            "properties": {
                "title": "Asheville, NC",
                "organizations": [
                    {
                        "name": "Nuestro Centro",
                        "engagementLevel": 1,
                        "members": []
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"

            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -74.172367,
                    40.735657
                ]
            },
            "properties": {
                "title": "Newark, NJ",
                "organizations": [
                    {
                        "name": "Winds of the Spirit",
                        "engagementLevel": 1,
                        "members": ["Claudia"]
                    }
                ],
                "marker-color": "#f86767",
                "marker-size": "large"

            }
        }
    ]
};


myLayer.setGeoJSON(geojson);

myLayer.on('click',function(e) {
    e.layer.closePopup();

    var feature = e.layer.feature;
    var list = '';
    for(var i = 0; i < feature.properties.organizations.length; i++){
        var org = feature.properties.organizations[i];
        var div = '<tr><td>'+ org.name + '</td><td>'+ org.members +'</td><td><span class="badge">' + org.engagementLevel + '</span></td></tr>';
        list += div;
    }
    var content = '<div class="panel panel-default"><div class="panel-heading"><strong>' + feature.properties.title + '</strong></div><table class="table"><tbody>' + list +'</tbody></table></div>';


    info.innerHTML = content;
});

myLayer.on('mouseover', function(e) {
    e.layer.openPopup();
});
myLayer.on('mouseout', function(e) {
    e.layer.closePopup();
});

map.on('click', empty);
empty();

function empty() {
    info.innerHTML = '<div class="panel panel-default"><div class="panel-heading"><strong>Click a Location</div></div>';
}