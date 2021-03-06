var gMaps = {

    map: {},
    infoWindow: null,
    geoCoder: null,
    
    
    initMap: function(){
        
        gMaps.geoCoder = new google.maps.Geocoder();
        gMaps.infoWindow = new google.maps.InfoWindow();
        
        map = new google.maps.Map(document.getElementById("map"),
        {
            center: {lat: 0, lng: 0  },
            zoom: 3
        });
    },
    
    setMarker: function (label, message){

        var locationName = label.name.replace("Location/", "");
        gMaps.geoCoder.geocode({"address" : locationName},
        
        function(results, status){
            if(status === google.maps.GeocoderStatus.OK){
                
                var mailLoc = results[0].geometry.location;
                var marker = new google.maps.Marker({
                    
                    position: mailLoc,
                    map: map,
                    title: "Hello",
                    
                });
                
                marker.addListener('click', function(){
                gMaps.infoWindow.setContent
                (
                  "<div id=\"infobox\"><h1>Location:"+
                  locationName+
                  "</h1><h2>Subject:"+
                  message.subject+
                  "</h2><h2>Snippet:</h2>"+
                  message.snippet+
                  "<h2>Message:</h2>"+ 
                  message.messageText+
                  "</div>"
                ); 
                gMaps.infoWindow.open(map, marker);
              });
            }
            else
            {
              setTimeout(function(){ 
                  gMaps.setMarker(label, message);
              }, 300)
            }
        });
  },
  
}
console.log("maps")  