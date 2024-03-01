// Function to initialize the map
function initMap() {
  // Set the coordinates for the center of the map
  var center = { lat: 40.7128, lng: -74.006 }; // Example: Tamil Nadu, India

  // Create a new map object
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, // Zoom level
    center: center, // Center the map on the specified coordinates
  });

  // Example: Add a marker for a community service location
  var serviceLocation = { lat: 40.7128, lng: -74.006 }; // Example: New York City
  var marker = new google.maps.Marker({
    position: serviceLocation,
    map: map,
    title: "Community Service Location",
  });
}
