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

//JavaScript to handle the form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload on form submission

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formFeedback = document.getElementById('formFeedback');

    // Simple form validation
    if (name && email && message) {
        formFeedback.style.display = 'block';
        formFeedback.classList.add('alert-success');
        formFeedback.classList.remove('alert-danger');
        formFeedback.innerHTML = 'Thank you, ' + name + '. Your message has been sent!';

        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        formFeedback.style.display = 'block';
        formFeedback.classList.add('alert-danger');
        formFeedback.classList.remove('alert-success');
        formFeedback.innerHTML = 'Please fill in all fields.';
    }
});