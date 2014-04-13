function check() {
	// por simplicidad, meto todas las combinaciones de acentos y así no tener que reemplazar

	var answers = ["cristobal colon", "cristóbal colón", "cristóbal colon", "cristobal colón"];

	var inputAnswer = $("#txtAnswer");

	var answer = inputAnswer.val();

	var lowerCaseAnswer = answer.toLowerCase();

	var result = "";

	if ((lowerCaseAnswer === answers[0]) || lowerCaseAnswer === answers[1] ||
		lowerCaseAnswer === answers[2] || lowerCaseAnswer === answers[3]) {

		result = "Correcto, Cristóbal Colón descubrió América";
	}
	else {
		result = "Su respuesta  " + answer + "  no es correcta";

		inputAnswer.attr("placeholder","Pruebe otra vez");
		inputAnswer.val("");
	}

	var divResult = $("#resultado");

	divResult.html(result);
}