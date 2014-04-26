function drawCircle(ctx,x,y,r,width,color) {
  ctx.beginPath();             // comenzar figura
                               // añadir arco (circulo completo):
  ctx.arc(x,y,r,0,2*Math.PI);  //     ctx.arc(x, y, r, start, stop)

  ctx.strokeStyle = color;     // color de la línea del circulo
  ctx.lineWidth = width;       // anchura de la línea del circulo
  ctx.stroke();                // dibujar circulo
}

function drawLine(ctx,x1,y1,x2,y2,width,color) {
  ctx.beginPath();           // comenzar nueva linea
  ctx.moveTo(x1,y1);         // Comienzo de linea
  ctx.lineTo(x2,y2);         // Final de linea

  ctx.strokeStyle = color;   // color de línea
  ctx.lineWidth = width;     // anchura de linea:  5 puntos
  ctx.stroke();              // dibujar linea
}

function drawText(ctx, pixels, fontFamily, text, top, left) {
  ctx.font = pixels + "px " + fontFamily;
  ctx.fillText(text, left, top);
}

function fixTime(time) {
  if (time < 10) {
    time = "0" + time;
  }

  return time;
}

function mostrarHora(ctx) {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  var timeString = fixTime(h) + ":" + fixTime(m) + ":" + fixTime(s);

  ctx.clearRect(0,0,300,300)  // borrar CANVAS

  drawCircle(ctx,100,100,80,3,"#000000");   // esfera del reloj

  drawLine(ctx,100,100,x2(h,12,100,40),y2(h,12,100,40),5,"#eee"); // horas
  drawLine(ctx,100,100,x2(m,60,100,60),y2(m,60,100,60),3,"#eee"); // min.
  drawLine(ctx,100,100,x2(s,60,100,80),y2(s,60,100,80),1,"#db4e36"); // seg.

  drawText(ctx, 15, "sans-serif", timeString, 80, 70);
}

function x2(n, i, x1, r) {
  return x1 + r * Math.sin(2 * Math.PI * n / i);
}

function y2(n, i, y1, r) {
  return y1 - r * Math.cos(2 * Math.PI * n / i);
}