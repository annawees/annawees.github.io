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
    <script>
      function initMap() {
         var pujol = {lat: 19.434475, lng: -99.187655};
         var julesbasement = {lat: 19.4305983, lng: -99.1983094};
         var yuban = {lat: 19.4188352, lng: -99.1662856};
         var romitacomedor = {lat: 19.4190907, lng: -99.1591261};
         var limosneros = {lat: 19.4360717, lng: -99.1399995};
         var elbajio = {lat: 19.4274398, lng: -99.2313077};
         var tamalesemporio = {lat: 19.4413154, lng: -99.1662029};
         var laclandestina = {lat: 19.416185, lng: -99.1713497};
         
         var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: pujol
        });
        
         var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';
            
        var infowindow = new google.maps.InfoWindow({
          content: contentString
          });
        
        var marker = new google.maps.Marker({
           position: pujol,
           map: map
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
