AmCharts.makeChart('org-map', {
    "type": "map",
    "theme": "light",
    "dataProvider": {
        "map": "usaLow",
        "getAreasFromMap": true
    },
    "areasSettings": {
        "autoZoom": true
    },
    "smallMap": {}
})