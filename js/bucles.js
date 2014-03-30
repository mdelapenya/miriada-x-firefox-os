var END_TOKEN = "Acabar";
var FOR_LOOP = 1;
var QUESTION = "Introduzca un número para acumular una suma. Introduzca 'Acabar' para realizar la suma.\n";
var WHILE_LOOP = 2;

var suma = {
	sumandos: [],
	total: 0
};

function forLoop() {
	var mensaje = QUESTION;
	var answer = "";

	for (answer = prompt(mensaje); answer !== END_TOKEN; answer = prompt(_generarMensaje())) {
		_evaluarRespuesta(answer);
	}

	return _toHTML();
}

function main(mode) {
	_reset();

	var resultElement = document.getElementById("result");
	
	var result = "";

	if (mode === FOR_LOOP) {
		result = forLoop();
	}
	else if (mode === WHILE_LOOP) {
		result = whileLoop();
	}
	else {
		result = "Invalid mode";
	}

	resultElement.innerHTML = result;
}

function whileLoop() {
	var answer = prompt(QUESTION);

	while (answer !== END_TOKEN) {
		_evaluarRespuesta(answer);

		var mensaje = _generarMensaje();

		answer = prompt(mensaje);
	}

	return _toHTML();
}

function _evaluarRespuesta(answer) {
	if (answer == parseInt(answer)) {
		suma.sumandos.push(answer);
	}
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

function _reset() {
	suma.sumandos = [];
	suma.total = 0;
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