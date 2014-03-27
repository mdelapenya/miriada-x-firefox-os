function requestObject() {
	var requestedObject = prompt("Indique el nombre de algún objeto JavaScript de la página actual:");

	var o = window[requestedObject];

	if (!o) {
		return "El objeto referenciado NO existe";
	}
	else {
		return o; 
	}
}