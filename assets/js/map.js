var map;
var infoWindow;

var markersData = [
   {
      lat: 40.6386333,
      lng: -8.745,
      name: "Camping Praia da Barra",
      address1:"Rua Diogo Cão, 125",
      address2: "Praia da Barra",
      postalCode: "3830-772 Gafanha da Nazaré"
   },
   {
      lat: 40.59955,
      lng: -8.7498167,
      name: "Camping Costa Nova",
      address1:"Quinta dos Patos, n.º 2",
      address2: "Praia da Costa Nova",
      postalCode: "3830-453 Gafanha da Encarnação"
   },
   {
      lat: 40.6247167,
      lng: -8.7129167,
      name: "Camping Gafanha da Nazaré",
      address1:"Rua dos Balneários do Complexo Desportivo",
      address2: "Gafanha da Nazaré",
      postalCode: "3830-225 Gafanha da Nazaré"
   }
];


function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(40.601203,-8.668173),
      zoom: 9,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   infoWindow = new google.maps.InfoWindow();

   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);

function displayMarkers(){

   var bounds = new google.maps.LatLngBounds();
   
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var postalCode = markersData[i].postalCode;

      createMarker(latlng, name, address1, address2, postalCode);

      bounds.extend(latlng);  
   }

   map.fitBounds(bounds);
}

function createMarker(latlng, name, address1, address2, postalCode){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   google.maps.event.addListener(marker, 'click', function() {
      
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         postalCode + '</div></div>';
      
      infoWindow.setContent(iwContent);

      infoWindow.open(map, marker);
   });
}
