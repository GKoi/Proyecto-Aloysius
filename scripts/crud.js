function addRecordatorio(){
	var table = document.getElementById("usertable");
	document.getElementById("guardarR").style.visibility = "visible";
	if(table.rows.length!=0)
	var lastRow = parseInt(table.rows[ table.rows.length - 1 ].cells[0].innerHTML) + 1;
	else
	var lastRow = 1;

	var row = table.insertRow();
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	nuevos.push(lastRow);
	cell1.innerHTML = lastRow ;
	cell2.innerHTML = '<input type="text" class="form-control hideinput" name="name-'+lastRow+'" value="Descripcion">';
	cell3.innerHTML = '<input type="text" class="form-control hideinput" name="user-'+lastRow+'" value="dd/mm/yyyy">';
	cell4.innerHTML = '<button class="btn btn-icon" onclick="deleteUser(this,'+lastRow+');"><i class="fas fa-trash text-danger"></i></button>';
};
