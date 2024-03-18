var map = L.map("map").setView([0, 0], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

window.navigator.geolocation.getCurrentPosition(function (position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  marker.setLatLng([lat, long]).update();
  map.setView([lat, long], 13);

  marker.bindPopup("<strong>Here I'm </strong> <br> This is my location");
});
