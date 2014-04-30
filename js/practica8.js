var map, lat, lng;
var markers = [];
var travelMode = 'driving';

function compactRoutes() {
  travelMode = $("input[name=rbTravelMode]:checked").val();

  if (markers.length < 3) {
    return;
  }

  var startPoint = markers[0];
  var endPoint = markers[markers.length - 1];

  map.cleanRoute();
  map.removeMarkers();

  var startMarker = {lat: startPoint.lat, lng: startPoint.lng};

  map.addMarker(startMarker);

  map.drawRoute({
    origin: [startPoint.lat, startPoint.lng],
    destination: [endPoint.lat, endPoint.lng],
    travelMode: travelMode,
    strokeColor: '#000000',
    strokeOpacity: 0.6,
    strokeWeight: 5
  });

  map.addMarker({lat: endPoint.lat, lng: endPoint.lng});
}

function enlazarMarcador(e) {
  travelMode = $("input[name=rbTravelMode]:checked").val();

  // muestra ruta entre marcas anteriores y actuales
  map.drawRoute({
    origin: [lat, lng],  // origen en coordenadas anteriores
    // destino en coordenadas del click o toque actual
    destination: [e.latLng.lat(), e.latLng.lng()],
    travelMode: travelMode,
    strokeColor: '#ff000',
    strokeOpacity: 0.6,
    strokeWeight: 5
  });

  lat = e.latLng.lat();   // guarda coords para marca siguiente
  lng = e.latLng.lng();

  var marker = {lat: lat, lng: lng};

  map.addMarker(marker);  // pone marcador en mapa

  marker.lat = lat;
  marker.lng = lng;

  markers.push(marker);
};

function geolocalizar() {
  GMaps.geolocate({
    success: function(position) {
      lat = position.coords.latitude;  // guarda coords en lat y lng
      lng = position.coords.longitude;

      map = new GMaps({  // muestra mapa centrado en coords [lat, lng]
        el: '#map',
        lat: lat,
        lng: lng,
        click: enlazarMarcador,
        tap: enlazarMarcador
      });

      var marker = {lat: lat, lng: lng};

      map.addMarker(marker);  // marcador en [lat, lng]

      marker.lat = lat;
      marker.lng = lng;

      markers.push(marker);
    },
    error: function(error) {
      alert('Geolocalización falla: '+error.message);
    },
    not_supported: function() {
      alert("Su navegador no soporta geolocalización");
    }
  });
};