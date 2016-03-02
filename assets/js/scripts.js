$(document).ready( function () {
  "use strict";



// this stackoverflow helped me get my google maps call working: http://stackoverflow.com/questions/34466718/googlemaps-does-not-load-on-page-load

  var map;

  window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.29, lng: -85.585833},
      zoom: 3,
      // mapTypeId: google.maps.MapTypeId.SATELLITE
    });


  //this gets the latitude and longitude of a user's click
  google.maps.event.addListener(map, "click", function (event) {

    var clickedSpot = {position: event.latLng, map: map};
    console.log(clickedSpot);

    var lat = clickedSpot.position.lat();
    console.log(lat);

    var lng = clickedSpot.position.lng();
    console.log(lng);

    //lat and lng is available in e object
    // var latLng = e.latLng;
    // var clickLat = e.latlng.lat();
    // var clickLng = e.latlng.lng();
    // console.log(clickLat);
    // console.log(clickLng);

  });
  }

});
