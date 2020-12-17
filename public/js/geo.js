var loc = db.ref('Localizaciones');
var coord = [0,0];

loc.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
      if("117140802"==childData.ced){
        console.log([childData.latitude, childData.longitude]) 
            coord = [childData.latitude, childData.longitude];
            console.log("Estas son las coordenadas " + coord);

        }else{
            console.log("No funca");
        }
    })
}).then((coord) => {
    console.log("Estas son las coordenadas " + coord);
/* = [9.838701,-83.946894];*/
var map = L.map('map-template').setView(coord, 15);

    L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    var marker = L.marker(coord).bindPopup('Visto por aquí');
    map.addLayer(marker);
});