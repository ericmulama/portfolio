// Initialize the map
var map = L.map('mapid').setView([1.2921, 36.8219], 6); // Example: Nairobi, Kenya

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Example GeoJSON data to add to the map
var geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Example Location"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [36.8219, 1.2921]
            }
        }
    ]
};

// Add GeoJSON layer to map
L.geoJSON(geojsonData).addTo(map);
