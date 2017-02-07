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
        var pujol = {lat: 19.4336415, lng: -99.1876545};
        var julesbasement = {lat: 19.4305983, lng: -99.1983094};
        var yuban = {lat: 19.4188352, lng: -99.1662856};
        var romitacomedor = {lat: 19.4190907, lng: -99.1591261};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: pujol
        });
        var marker = new google.maps.Marker({
          position: pujol,
          map: map
        });
        var marker = new google.maps.Marker({
          position: julesbasement,
          map: map
        });
        var marker = new google.maps.Marker({
          position: yuban,
          map: map
        });
         var marker = new google.maps.Marker({
          position: romitacomedor,
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
        width: 100%;
        height: 400px;
       }
    </style>
