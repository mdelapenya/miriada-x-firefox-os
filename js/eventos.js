var clock = {
	_divClock : null,
	_hour: 0,
	_minute: 0,
	_second: 0,
	_millisecond: 0,
	_initialized: false,
	_intervalId: 0,

	display:function() {
		var date = new Date();

		clock._hour = date.getHours();
		clock._minute = date.getMinutes();
		clock._second = date.getSeconds();
		clock._millisecond = date.getMilliseconds();

		var html = clock._hour + " horas, " + clock._minute + " minutos, " + clock._second + " segundos, " + clock._millisecond + " ms.";

		clock._divClock.innerHTML = html;
	},

	toggle:function() {
		if (clock._initialized === true) {
			window.clearInterval(clock._intervalId);

			clock._initialized = false;
		}
		else {
			clock._intervalId = setInterval(clock.display, 1);

			clock._initialized = true;
		}
	}
}

var initialize = function() {
	var div = document.getElementById("clock");

	clock._divClock = div;

	div.onclick = clock.toggle;
}