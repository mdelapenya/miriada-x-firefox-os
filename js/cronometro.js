var crono = {
	_cl: $("#crono"),
	_intervalId: undefined,

	arrancar:function() {
		crono._intervalId = setInterval(crono.mostrar, 100);
	},

	cambiar:function() {
		if (!crono._intervalId) {
			crono.arrancar();
		}
		else {
			crono.parar();
		}
	},

	mostrar:function() {
		crono._cl.html((+crono._cl.html() + 0.1).toFixed(1));
	},

	parar:function() {
		clearInterval(crono._intervalId);

		crono._intervalId = undefined;
	}
}

var initialize = function() {
	$("#btnCambiar").on("click", crono.cambiar);

	$("#btnInicializar").on(
		"click",
		function() {
			if (crono._intervalId === undefined) {
				crono._cl.html("0.0");
			}
		}
	);
}