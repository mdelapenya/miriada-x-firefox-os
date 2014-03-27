function closeTag(tag) {
	return "</" + tag + "/>";
}

function drawTag(tag, content) {
	return openTag(tag) + content + closeTag(tag);
}

function openTag(tag) {
	return "<" + tag + "/>";
}

function printObject (o) {
	var content = "";

	for (field in o) {
		var td1 = drawTag("td", field);
		var td2 = drawTag("td", o[field]);

		var tr = drawTag("tr", td1 + td2);

		content += tr;
	}

	return drawTag("table", content);
}

function requestObject() {
	var requestedObject = prompt("Indique el nombre de algún objeto JavaScript de la página actual:");

	var o = window[requestedObject];

	if (!o) {
		return "El objeto referenciado NO existe";
	}
	else {
		return printObject(o); 
	}
}