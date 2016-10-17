var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

AmCharts.makeChart('org-map', {
    "type": "map",
    "theme": "light",
    imagesSettings: {
        rollOverColor: "#089282",
        rollOverScale: 3,
        selectedScale: 3,
        selectedColor: "#089282",
        color: "#13564e"
    },
    "dataProvider": {
        "map": "usa2Low",
        "getAreasFromMap": true,
        "images": [
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Union of Electricians (3)- Chicago",
                "latitude": 41.878114,
                "longitude": -87.629798
            },
            {
                // "svgPath": targetSVG,
                // "scale": 0.5,
                // "title": "Trade Unions for Energy Democracy (2)- for contacts for teachers- Stephanie",
                // "latitude": 0,
                // "longitude": 0
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "350.org (1)-Washington, DC Idalin",
                "latitude": 38.907192,
                "longitude": -77.036871
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "National Latina Institute for Reproductive Justice (1)- New York City Felipe and Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "National Domestic Worker's Alliance (1)- New York City, Claudia and Felipe",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Affirm National (1)- LA Claudia",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Intereligious Foundation Community Organization  International (1)- New York City Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "PICO Network (1)- Washington, DC  Rahiel",
                "latitude": 38.907192,
                "longitude": -77.036871
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "NAACP Legal Defense Fund (1)- Washington, DC Rahiel",
                "latitude": 38.907192,
                "longitude": -77.036871
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Student Farmworker Association (2)- Immokalee, FL",
                "latitude": 26.418525,
                "longitude": -81.417406
            },
            {
                // "svgPath": targetSVG,
                // "scale": 0.5,
                // "title": "Moms Demand Action (1)- Rahiel",
                // "latitude": 0,
                // "longitude": 0
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Code Pink (1)-Venice, CA",
                "latitude": 33.985047,
                "longitude": -118.469483
            },
            {
                // "svgPath": targetSVG,
                // "scale": 0.5,
                // "title": "Bagong Alyansang Makabayan (New Patriotic Alliance) (1)- Kevin",
                // "latitude": 0,
                // "longitude": 0
            },
            {
                // "svgPath": targetSVG,
                // "scale": 0.5,
                // "title": "National Prison Divestment Campaign (1)- Kevin",
                // "latitude": 0,
                // "longitude": 0
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Students for Justice in Palestine (1)- Kevin- Know the NY chapter",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Us Campaign to End the Occupation- Washington, DC",
                "latitude": 38.907192,
                "longitude": -77.036871
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "UndocuBlack Network (1)- Kevin- Washington, DC",
                "latitude": 38.907192,
                "longitude": -77.036871
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "APALA (1)-Washington, DC Felipe",
                "latitude": 38.907192,
                "longitude": -77.036871
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Black Alliance for Just Immigration (1)- Felipe and Rahiel- NYC",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "GetEQUAL (1)- Felipe- Washington, DC",
                "latitude": 38.907192,
                "longitude": -77.036871
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Young People for (1)- Felipe Washington DC",
                "latitude": 38.907192,
                "longitude": -77.036871
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "NDLON (1)- Felipe- LA",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Mijente (2)- Felipe- Chicago/ Phoenix",
                "latitude": 41.878114,
                "longitude": -87.629798
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Gabriela USA (2) LA Claudia",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Unite Here -local 11 LA- 1",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Unite Here- 28.50  Oakland- 1",
                "latitude": 37.804364,
                "longitude": -122.271114
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "ACCE (LA)- 1- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "ACCE (Oakland)- 1- Stephanie",
                "latitude": 37.804364,
                "longitude": -122.271114
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Org of tenants Portland- 2- Stephanie",
                "latitude": 45.523062,
                "longitude": -122.676482
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "LELO PECO 3- Seattle Stephanie",
                "latitude": 47.606209,
                "longitude": -122.332071
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Union de Vecinos- 2 LA- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Youth Justice Coalitions- 3 LA- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG, "scale": 0.5, "title": "PYFC 1- LA- Stephanie", "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Uplift Inglewood- LA 2- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "LA Tenants Union 3- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Crenshaw Subway coaltion 2 LA- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Teamsters Port of LA- 2- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Fight for $15- LA- 2- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Our Walmart 2- LA- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Domestic Worker LA (3)- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "UCLA Labor Center (1)- LA Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "COIL/ SLAD School teachers organizing within the teacher's union- LA 3- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "United Teachers LA (3)- Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Communication Workers of America  (1)- LA Stephanie",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "The way/ Live free (1)- Idalin Bay Area",
                "latitude": 37.774929,
                "longitude": -122.419416
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "United Players (2)- Idalin Bay Area",
                "latitude": 37.774929,
                "longitude": -122.419416
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Dream Defenders (3)- Idalin Bay area",
                "latitude": 37.774929,
                "longitude": -122.419416
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Quilombo (3)-Bay Area political education every week/ occupation of land- Idalin",
                "latitude": 37.774929,
                "longitude": -122.419416
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Marcus Book Store (3)- Bay Area Idalin",
                "latitude": 37.774929,
                "longitude": -122.419416
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "California Latinas for Reproductive Justice (1)- LA Claudia",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "SOL collective (1)- Oakland Claudia",
                "latitude": 37.804364,
                "longitude": -122.271114
            },
            {
                // "svgPath": targetSVG,
                // "scale": 0.5,
                // "title": "California Immigrant Justice Youth Alliance (2)- Kevin",
                // "latitude": 0,
                // "longitude": 0
            },
            {
                // "svgPath": targetSVG,
                // "scale": 0.5,
                // "title": "Immigrant Youth Coalition CA(2)- Kevin",
                // "latitude": 0,
                // "longitude": 0
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Ella Baker Center (1) LA- Rahiel",
                "latitude": 34.052234,
                "longitude": -118.243685
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Scholarships A to Z (1)- Tuscan, AZ Kevin",
                "latitude": 32.221743,
                "longitude": -110.926479
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "University Leadership Initiative (1) Austin, TX- Kevin",
                "latitude": 30.267153,
                "longitude": -97.743061
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Youth Empowered in the Struggle Milwaukee, WI  (1)- Kevin",
                "latitude": 43.038902,
                "longitude": -87.906474
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Voces de la Frontera (1)- Milwaukee, WI Felipe and Kevin",
                "latitude": 43.038902,
                "longitude": -87.906474
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Texas Border Farmworkers El Paso, TX (2)- Stephanie",
                "latitude": 31.761878,
                "longitude": -106.485022
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Minnesota NOC- Local SEIU (2)- Stephanie",
                "latitude": 44.977753,
                "longitude": -93.265011
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Misouri ACORN (MORE)/ Black Meza Arizona (1 or 2) Anti-mining- Stephanie",
                "latitude": 38.627003,
                "longitude": -90.199404
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Unite Here San Antonio (1)- Stephanie",
                "latitude": 29.424122,
                "longitude": -98.493628
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Blocs Together Chicago (1)- Claudia",
                "latitude": 41.878114,
                "longitude": -87.629798
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "New Era Detroit (1-2)- Rahiel",
                "latitude": 42.331427,
                "longitude": -83.045754
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Chicago International Youth Movement (1)- Rahiel",
                "latitude": 41.878114,
                "longitude": -87.629798
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Black Mesa Indigineous support collective Flagstaff, Arizona (1)- Arizona Claudia",
                "latitude": 35.198284,
                "longitude": -111.651302
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Kansas Misouri DREAM Act- (1) Kasas City, MO Kevin",
                "latitude": 39.099727,
                "longitude": -94.578567
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Dallas North Texas DREAM Team (1)- Kevin",
                "latitude": 32.776664,
                "longitude": -96.796988
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "National Indigenous Youth Alliance South Dakota (1)- Felipe",
                "latitude": 43.025541,
                "longitude": -102.556274
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Youth United for Change - (2) Philadelphia Idalin",
                "latitude": 39.952584,
                "longitude": -75.165222
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Philadelphia Student Union (1)-Claudia",
                "latitude": 39.952584,
                "longitude": -75.165222
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Malcolm X Grassroots (1) NYC- Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "El Grito Sunset Park (1)- NYC Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Justice Committee (1)- NYC Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Churches United for Fair Housing (1)- NYC Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Existance is Resistance (1)- NYC Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "People Power Movement (1)-NYC  Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG, "scale": 0.5, "title": "Eztudio 43 (1) NYC Claudia", "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Rockaway Youth Taskforce (2)- Rahiel- NYC",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "NY Justice League (1)-NYC  Rahiel",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                // "svgPath": targetSVG, "scale": 0.5, "title": "TRIBE (1)- Rahiel- NC", "latitude": 0, "longitude": 0
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Coalition of Immokalee Workers (1)- Immokalee, FL Rahiel, Felipe and Claudia",
                "latitude": 26.418525,
                "longitude": -81.417406
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Leaders for a beautiful struggle (1-2) Rahiel Baltimore",
                "latitude": 39.290385,
                "longitude": -76.612189
            },
            {
                "svgPath": targetSVG, "scale": 0.5, "title": "SEIU 32 BJ (1)- NYC Claudia", "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Student Immigrant Movement (1)- Boston Kevin",
                "latitude": 42.360082,
                "longitude": -71.058880
            },
            {
                // "svgPath": targetSVG,
                // "scale": 0.5,
                // "title": "Connecticut Students for a Dream (1)- Kevin",
                // "latitude": 0,
                // "longitude": 0
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Revolutionary Student Coordination Committee (1)- Kevin NYC",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG, "scale": 0.5, "title": "MinkWN (1)- Kevin NYC", "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG, "scale": 0.5, "title": "DRUM (1)- NYC Kevin", "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Queens Neighborhoods United (1)-NYC  Kevin",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Families for Freedom (1)- NYC Kevin",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Brotherhood Sister Soul (1)- NYC Claudia and Rahiel",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Make the Road NY (1)- NYCKevin, Claudia and Felipe",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "New York Collective of Radical Educators (1)- NYC Claudia Radical educator",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "API for BlackLives (1)- NYC Kevin",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Florida Immigrant Coalition (1)- Miami, FLFelipe",
                "latitude": 25.761680,
                "longitude": -80.191790
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Farmworker Association of Florida (1)- Felipe",
                "latitude": 28.693408,
                "longitude": -81.532215
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "QLatinx (1)- Orlando, FL Felipe",
                "latitude": 28.538335,
                "longitude": -81.379236
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Hope Community Center (1)- Apopka, FL Felipe",
                "latitude": 28.693408,
                "longitude": -81.532215
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "LULAC in Tampa (1)- Felipe",
                "latitude": 27.950575,
                "longitude": -82.457178
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Southern on New Ground (1)- Durham, NC Felipe",
                "latitude": 35.994033,
                "longitude": -78.898619
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Southeast Immigrant Rights Network (1)- Nashville, TN Felipe",
                "latitude": 36.162664,
                "longitude": -86.781602
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Alabama Coalition for Immigrant Justice (1)- Birmingham, AL Felipe",
                "latitude": 33.520661,
                "longitude": -86.802490
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Tennesse Immigrant and Refugee Coalition (2)- Nashville, TN Felipe",
                "latitude": 36.162664,
                "longitude": -86.781602
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Georgia Latino Alliance for Human Rights (1)-Atlanta, GA Felipe",
                "latitude": 33.748995,
                "longitude": -84.387982
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Queer Detenee Empowerment Project (1)- NYC Felipe",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Audre Lorde Project (1)- NYC Claudia",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Miami Worker Center (1)- Felipe",
                "latitude": 25.761680,
                "longitude": -80.191790
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "SEIU Southeast (1)- Miami, FL Felipe",
                "latitude": 25.761680,
                "longitude": -80.191790
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "Dream Defenders (1)- Miami, FL Felipe",
                "latitude": 25.761680,
                "longitude": -80.191790
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "New York Nurse Association (3)- Stephanie",
                "latitude": 40.712784,
                "longitude": -74.005941
            },
            {
                "svgPath": targetSVG,
                "scale": 0.5,
                "title": "El Sol (1)- Jupitor, FL Felipe",
                "latitude": 26.934225,
                "longitude": -80.094209
            }
        ],
        "getAreasFromMap": true
    },
    "areasSettings": {
        "autoZoom": true
    },
    "smallMap": {}
})