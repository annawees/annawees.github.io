---
layout: map
title: Mexico City
category: travel
thumbnail: "/images/mexicocity.jpg"
--- 
  <body>
    <div id="map"></div>
    <script>
      function initMap() {
        var mexicocity = {lat: 19.4326, lng: -99.132};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: mexicocity
        });
        var marker = new google.maps.Marker({
          position: pujol,
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjiDtJdMbIB54fTQAPJV7bljadWrv0Jww&callback=initMap">
    </script>
  </body>
   <style>
      #map {
        height: 400px;
        width: 100%;
       }
    </style>
