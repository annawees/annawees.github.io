---
layout: map
title: Mexico City
category: travel
thumbnail: "/images/mexicocity.jpg"
tags: [restaurants, mexico, north america]
---
<html>
  <head>
    <style>
       #map {
        height: 400px;
        width: 100%;
       }
    </style>
  </head>
  <body>
    <div id="map"></div>
    
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
        
    <script type="text/javascript">
          google.maps.event.addDomListener(window, 'load', init);
            
      function initMap() {
         var pujol = {lat: 19.433636, lng: -99.185466};
         var julesbasement = {lat: 19.4305983, lng: -99.1983094};
         var yuban = {lat: 19.4188352, lng: -99.1662856};
         var romitacomedor = {lat: 19.4190907, lng: -99.1591261};
         var limosneros = {lat: 19.4360717, lng: -99.1399995};
         var elbajio = {lat: 19.4274398, lng: -99.2313077};
         var tamalesemporio = {lat: 19.4413154, lng: -99.1662029};
         var laclandestina = {lat: 19.416185, lng: -99.1713497};
         
         var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: new google.maps.LatLng(19.433636, -99.185466)
          styles:[{"featureType": "water","elementType":"geometry","stylers":[{"color": "#e9e9e9"},{"lightness": 17}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}]
        });
        
        var mapElement = document.getElementById('map');
        
        var map = new google.maps.Map(mapElement, mapOptions);
        
         var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Pujol</h1>'+
            '<div id="bodyContent">'+
            'Calle Francisco Petrarca 254, Miguel Hidalgo, Polanco, 11570 Ciudad de México, CDMX, Mexico'+
            '<a href="https://www.opentable.com.mx/restaurant/profile/3542?ref=16420">Reservations</a>'+
            '</div>'+
            '</div>';
       
            
        var infowindow = new google.maps.InfoWindow({
          content: contentString
          });
        
        
        marker = new google.maps.Marker({
           position: pujol,
           map: map
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
         
        var marker = new google.maps.Marker({
          position: elbajio,
          map: map
        });
        
        var marker = new google.maps.Marker({
          position: tamalesemporio,
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
</html>
