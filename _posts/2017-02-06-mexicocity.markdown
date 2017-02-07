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
        var tamalesemporio= {lat: 19.4413154, lng: -99.1662029};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: pujol
          styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
          });
          
        var mapElement = document.getElementById('map');

        var map = new google.maps.Map(mapElement, mapOptions);
          
        var marker = new google.maps.Marker({
          position: pujol, elbajio, tamalesemporio,
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
