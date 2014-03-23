function quienDescubrioAmerica() {
	// por simplicidad, meto todas las combinaciones de acentos y así no tener que reemplazar

	var answers = ["cristobal colon", "cristóbal colón", "cristóbal colon", "cristobal colón"];

	var answer = prompt("¿Quién descubrió América?");
	var lowerCaseAnswer = answer.toLowerCase();

	if ((lowerCaseAnswer === answers[0]) || lowerCaseAnswer === answers[1] ||
		lowerCaseAnswer === answers[2] || lowerCaseAnswer === answers[3]) {

		return "Correcto, Cristóbal Colón descubrió América";
	}
	else {
		return "Su respuesta  " + answer + "  no es correcta";
	}
}