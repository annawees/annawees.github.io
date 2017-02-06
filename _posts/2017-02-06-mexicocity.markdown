---
layout: single
title: Mexico City
category: travel
thumbnail: "/images/mexicocity.jpg"
--- 

<html>
  <head>
    <style>
       #map {
        height: 800px;
        width: 100%;
       }
    </style>
  </head>
  <body>
    <h3>Mexico City</h3>
    <div id="map"></div>
    <script>
      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjiDtJdMbIB54fTQAPJV7bljadWrv0Jww&callback=initMap">
    </script>
  </body>
</html>
