function initMap() {
  var gif = {lat: 53.004280, lng: -1.127747};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: gif,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: gif,
    map: map
  });
}
