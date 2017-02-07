---
layout: map
title: Mexico City
category: travel
thumbnail: "/images/mexicocity.jpg"
tags: [restaurants, mexico, north america]
--- 

  <body>
    <div id="map"></div>
    <script>
      function initMap() {
        var pujol = {lat: 19.434475, lng: -99.187655};
        var julesbasement = {lat: 19.4305983, lng: -99.1983094};
        var yuban = {lat: 19.4188352, lng: -99.1662856};
        var romitacomedor = {lat: 19.4190907, lng: -99.1591261};
        var limosneros = {lat: 19.4360717, lng: -99.1399995};
        var elbajio = {lat: 19.4274398, lng: -99.2313077};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: pujol
          });
          
        var marker = new google.maps.Marker({
          position: pujol, elbajio,
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
          position: limosneros,
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
