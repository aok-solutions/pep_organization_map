L.mapbox.accessToken = 'pk.eyJ1IjoiYXlhbmdhIiwiYSI6ImNpdWU1enFmMzAwYXgyem53OGcxeDE3ZXUifQ.R4ol0xumVJ2vq8VhvWMP0g';

var info = document.getElementById('info');

var map = L.mapbox.map('map', 'mapbox.light', {
    minZoom: 3
}).setView([40, -76], 4);

var myLayer = L.mapbox.featureLayer().addTo(map);

$.ajax({
    url: '/data/organizations.json',
    dataType: 'json',
    async: false,
    success: function(geojson){
        myLayer.setGeoJSON(geojson);
    },
    error: function(error) {
        console.log("error fetching data: "+ error);
    }
})

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