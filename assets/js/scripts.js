$(document).ready( function () {
  "use strict";

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
    google.maps.event.addListener(map, "click", function(event) {

    // put a marker where the user clickedSpot
    placeMarker(event.latLng);

    function placeMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
    //create an object with the clickevent's latlng information within it
    var clickedSpot = {position: event.latLng, map: map};
    // console.log(clickedSpot);
    var posish = clickedSpot.position;
    // console.log(posish);
    //fetch the latitude of the click
    var latitude = clickedSpot.position.lat();
    // console.log(latitude);
    //fetch the longitude of the click
    var longitude = clickedSpot.position.lng();
    // console.log(longitude);

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });

    // click somewhere in Quebec: results[4].types[0] = "country"
    // click somewhere in Utah: results[6].types[0] = "country"

    //this function below gets the country name based on the latLng coordinates of the click
    // this documentation provided all of my answers: https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding

      var geocoder = new google.maps.Geocoder;
      var latlng = {lat: latitude, lng: longitude};
      geocoder.geocode({'location': latlng}, function(results, status) {
        console.log(results);
        // console.log(results[4].types[0]);
        if (status === google.maps.GeocoderStatus.OK) {
          for (var i=0; i < results.length; i++){
            if (results[i].types[0] === "country"){
              var countryClicked = results[i].formatted_address;
              // console.log(results[4]);
              // console.log("you clicked ");
              // console.log(countryClicked);
              $(".modal").modal('show');
              $(".modal").html("You clicked on " + countryClicked);
            } else {
              console.log("google address results at level results["+i+"] are not available");
              // $(".modal").modal('show');
              // $(".modal").html("No tunes about that place. Click somewhere else!");
              // window.alert("No tunes about this place. Click somewhere else!");
            }
          }

            // var placeArray = countryClicked.split(" ");
            // console.log(placeArray);
            // countryClicked = placeArray.join("+");
            // console.log(countryClicked);
            //
            // // here comes the spotify stuff
            // // in addition to spotify's own API documentation, this resource helped me out a lot: http://jsfiddle.net/JMPerez/0u0v7e1b/
            // $.getJSON( 'https://api.spotify.com/v1/search/?q='+countryClicked+'&type=track', function (data) {
            //
            //     // this returns an array of objects (tracks)
            //     console.log(data.tracks.items);
            //     var tracksArray= data.tracks.items;
            //
            //     for (var i=0; i<tracksArray.length; i++){
            //       console.log(tracksArray[i].name);
            //       var trackName = tracksArray[i].name;
            //       console.log(tracksArray[i].artists[0].name);
            //       var artistName = tracksArray[i].artists[0].name;
            //
            //       // $(".modal").modal('show');
            //       // $(".modal").html("You clicked on " + countryClicked);
            //
            //       $(".songList").show();
            //       $(".songList").append('<li class="trackArtist">+ '+trackName+' by '+artistName+'</li>');
            //       // $(".modal").html('<li class="trackArtist">'+trackName+' by '+artistName+'</li>');
            //
            //
            //     }
            //
            //
            //
            //     //iterate through the arrays to get the song titles and artists (and years)???
            //
            // });
//     });
// };

        } else {
          console.log("geolocator is not ok");
          // $(".modal").modal('show');
          // $(".modal").html("No tunes about that place. Click somewhere else!");
          // window.alert("No tunes about this place. Click somewhere else!");
        }

      });

    });

  }

});
