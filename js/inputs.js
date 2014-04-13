function check() {
	// por simplicidad, meto todas las combinaciones de acentos y así no tener que reemplazar

	var answers = ["cristobal colon", "cristóbal colón", "cristóbal colon", "cristobal colón"];

	var inputAnswer = document.getElementById("txtAnswer");

	var answer = inputAnswer.value;

	var lowerCaseAnswer = answer.toLowerCase();

	var result = "";

	if ((lowerCaseAnswer === answers[0]) || lowerCaseAnswer === answers[1] ||
		lowerCaseAnswer === answers[2] || lowerCaseAnswer === answers[3]) {

		result = "Correcto, Cristóbal Colón descubrió América";
	}
	else {
		result = "Su respuesta  " + answer + "  no es correcta";

		inputAnswer.placeholder = "Pruebe otra vez";
		inputAnswer.value = "";
	}

	var divResult = document.getElementById("resultado");

	divResult.innerHTML = result;
}