// var myLocation = document.getElementById("my-coordinates");

// function getLocation() {
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(displayPosition)
//   } else {
//    myLocation.innerHTML = "Not available"
//   }
// }

// function displayPosition(position) {
//   myLocation.innerHTML = "Longitude: " + position.coords.longitude + " <br></br> Latitude:" + position.coords.latitude
// }
// $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
//  console.log(data); })

 $('#location-button').click(function(){
        
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
          console.log(data);
        })
        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
        $('#output').html(img);
      });
      
  }
});