function printFieldsFromObject(o) {
	var fields = "";

	for (field in o) {
		fields += o[field] + " ";
	}

	return fields;
}