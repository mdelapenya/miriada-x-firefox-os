var crono = {
	_cl: $("#crono"),
	_stops: $("#stops"),
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
		crono._stops.append((crono._cl.html() + "</br>"));

		clearInterval(crono._intervalId);

		crono._intervalId = undefined;
	}
}

var initialize = function() {
	var area = $("#area");

	area.on("tap", crono.cambiar);

	area.on(
		"swipeRight",
		function() {
			if (crono._intervalId === undefined) {
				crono._cl.html("0.0");

				crono._stops.html("");
			}
		}
	);
}