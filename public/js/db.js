
export function getLocalization(ced) {

var leadsRef = database.ref('Localizaciones');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
	  if(ced==childData.ced)
		 return [childData.latitude, childData.longitude];

    });
});
}




export function getRecordatorios(ced) {

var leadsRef = database.ref('Cuidadores');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
	  if(ced==childData.cedulaPaciente)
		 return childData;

    });
});
}