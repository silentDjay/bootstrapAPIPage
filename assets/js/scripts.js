$(document).ready( function () {
  "use strict";

// I followed the instructions here to link up to the Spotify API: https://github.com/jmperez/spotify-web-api-js
// var spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken('<here_your_access_token>');

// var Spotify = require('spotify-web-api-js');
// var s = new Spotify();

// this stackoverflow helped me get my google maps call working: http://stackoverflow.com/questions/34466718/googlemaps-does-not-load-on-page-load

  var map;

  window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.29, lng: -85.585833},
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      disableDefaultUI: true,
      zoomControl: true,
      draggableCursor: 'crosshair'
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

    //this function below gets the country name based on the latLng coordinates of the click
    // this documentation provided all of my answers: https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding

      var geocoder = new google.maps.Geocoder;
      var latlng = {lat: latitude, lng: longitude};
      geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[4]) {
            var countryClicked = results[4].formatted_address;
            console.log(results[4]);
            console.log("you clicked ");
            console.log(countryClicked);
            $(".modal").modal('show');
            $(".modal").html("You clicked on " + countryClicked);

            var placeArray = countryClicked.split(" ");
            console.log(placeArray);
            countryClicked = placeArray.join("+");
            console.log(countryClicked);

            // here comes the spotify stuff
            $.getJSON( 'https://api.spotify.com/v1/search/?q='+countryClicked+'&type=track', function (data) {

                // this does kinda work!
                console.log(data.tracks.items);

            });
//     });
// };

          } else {
            $(".modal").modal('show');
            $(".modal").html("No tunes about that place. Click somewhere else!");
            // window.alert("No tunes about this place. Click somewhere else!");
          }
        } else {
          $(".modal").modal('show');
          $(".modal").html("No tunes about that place. Click somewhere else!");
          // window.alert("No tunes about this place. Click somewhere else!");
        }

      });

    });

  }

});
