function closeTag(tag) {
	return "</" + tag + "/>";
}

function drawTag(tag, content, attributes) {
	var type = typeof content;

	if (type === "object" || type === "function") {
		content = "No es imprimible";
	}

	return openTag(tag, attributes) + content + closeTag(tag);
}

function openTag(tag, attributes) {
	var attr = processAttributes(attributes);

	return "<" + tag + attr +" />";
}

function printObject (o) {
	var content = "";

	var count = 0;

	for (field in o) {
		var cssClassName = "odd";

		if (count % 2 === 0) {
			cssClassName = "even";
		}

		var td1 = drawTag("td", field);
		var td2 = drawTag("td", o[field]);

		var cssClass = {};
		cssClass.class = cssClassName;

		var tr = drawTag("tr", td1 + td2, cssClass);

		content += tr;

		count++;
	}

	return drawTag("table", content);
}

function processAttributes(attributes) {
	var attr = "";

	for (attribute in attributes) {
		attr += " ";
		attr += attribute;
		attr += "='";
		attr += attributes[attribute];
		attr += "'";
	}

	return attr;
}

function requestObject() {
	var requestedObject = prompt("Indique el nombre de algún objeto JavaScript de la página actual:");

	var o = {};

	o.self = window[requestedObject];

	if (!o.self) {
		return "El objeto referenciado NO existe";
	}
	else {
		o.title = requestedObject;

		o.html = printObject(o.self); 

		return o;
	}
}