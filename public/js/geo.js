var loc = db.ref('Localizaciones');

var p1 = new Promise((resolve, reject) => {loc.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
      if("117140802"==childData.ced){
        console.log([childData.latitude, childData.longitude]) 
             resolve([childData.longitude,childData.latitude]);

        }else{
            console.log("No funca");
        }
    })
})

}
)

p1.then((value) => {
	console.log(value+ "1");

	var map = L.map('map-template').setView(value, 15);
	console.log(value+ "2");
    L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    var marker = L.marker(value).bindPopup('Visto por aquí');
    map.addLayer(marker);
	
		console.log(value+ "3");

},reason => {
console.error(reason);});