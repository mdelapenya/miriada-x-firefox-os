function x2(n, i, x1, r) {
	return (x1 + r * Math.sin(2 * Math.PI * n / i));
}

function y2(n, i, y1, r) {
	return (y1 - r * Math.cos(2 * Math.PI * n / i));
}

function mostrarHora() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	$("#relojDigital").html(fixTime(hours) + ":" + fixTime(minutes) + ":" + fixTime(seconds));

	var segundero = $("#segundero");
	segundero.attr('x2', x2(seconds, 60, 100, 50));
	segundero.attr('y2', y2(seconds, 60, 70, 50));

	var minutero = $("#minutero");
	minutero.attr('x2', x2(minutes, 60, 100, 40));
	minutero.attr('y2', y2(minutes, 60, 70, 40));

	var horario = $("#horario");
	horario.attr('x2', x2(hours, 12, 100, 30));
	horario.attr('y2', y2(hours, 12, 70, 30));
}

function fixTime(time) {
	if (time < 10) {
		time = "0" + time;
	}

	return time;
}