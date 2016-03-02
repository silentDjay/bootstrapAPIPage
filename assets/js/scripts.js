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
    //create an object with the clickevent's latlng information within it
      var clickedSpot = {position: event.latLng, map: map};
    console.log(clickedSpot);
    var posish = clickedSpot.position;
    console.log(posish);
    //fetch the latitude of the click
      var latitude = clickedSpot.position.lat();
    console.log(latitude);
    //fetch the longitude of the click
      var longitude = clickedSpot.position.lng();
    console.log(longitude);

    //this function below might help me get the country name based on the latLng coordinates of the click
    //this is what we are going for: results[7].formatted_address: "United States"
    // you'll find the answer here: https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding

      var geocoder = new google.maps.Geocoder;
      var latlng = {lat: latitude, lng: longitude};
      geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[4]) {
            var countryClicked = results[4].formatted_address;
            console.log("you clicked ");
            console.log(countryClicked);
          } else {
            window.alert("You didn't click on a country");
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }

      });

    });

  }

});
