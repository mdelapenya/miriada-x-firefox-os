var END_TOKEN = "Acabar";
var QUESTION = "Introduzca un número para acumular una suma. Introduzca 'Acabar' para realizar la suma.\n";
var WHILE_LOOP = 2;

var suma = {
	sumandos: [],
	total: 0
};

function main(mode) {
	if (mode === WHILE_LOOP) {
		return whileLoop();
	}
	else {
		return "Invalid mode";
	}
}

function whileLoop() {
	var answer = prompt(QUESTION);

	while (answer !== END_TOKEN) {
		if (answer == parseInt(answer)) {
			suma.sumandos.push(answer);
		}

		var mensaje = _generarMensaje();

		answer = prompt(mensaje);
	}

	return _toHTML();
}

function _generarMensaje() {
	var mensaje = QUESTION + "\n";

	var total = 0;

	for (i in suma.sumandos) {
		var sumando = suma.sumandos[i];

		mensaje += "+ " + sumando + "\n";

		total += +sumando;
	}

	suma.total = total;

	mensaje += "----------" + "\n"
	mensaje += "= " + suma.total;

	return mensaje;
}

function _toHTML() {
	// reset initial state
	var html = "<h1>Elementos sumados</h1>";

	html += "<table>";

	for (i in suma.sumandos) {
		html += "<tr><td>+ " + suma.sumandos[i] + "</td></tr>";
	}

	html += "<tr><td>----------</td></tr>"
	html += "<tr><td>= " + suma.total + "</td></tr>"
	html += "</table>";

	return html;
}