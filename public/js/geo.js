var coord = [9.838701,-83.946894];
var map = L.map('map-template').setView([9.838701,-83.946894], 15);

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var marker = L.marker(coord).bindPopup('Visto por aquí');
map.addLayer(marker);
