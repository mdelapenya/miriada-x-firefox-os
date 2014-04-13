var clock = {
	_divClock : null,
	_hour: 0,
	_minute: 0,
	_second: 0,
	_millisecond: 0,

	display:function() {
		var date = new Date();

		this._hour = date.getHours();
		this._minute = date.getMinutes();
		this._second = date.getSeconds();
		this._millisecond = date.getMilliseconds();
		this._divClock = document.getElementById("clock");

		var html = this._hour + " horas, " + this._minute + " minutos, " + this._second + " segundos, " + this._millisecond + " ms.";

		this._divClock.innerHTML = html;
	}
}

var initialize = function() {
	setInterval(clock.display, 1);
}