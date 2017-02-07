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
        var pujol = {lat: 19.434475, lng: -99.187655};
        var julesbasement = {lat: 19.4305983, lng: -99.1983094};
        var yuban = {lat: 19.4188352, lng: -99.1662856};
        var romitacomedor = {lat: 19.4190907, lng: -99.1591261};
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: pujol
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
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
