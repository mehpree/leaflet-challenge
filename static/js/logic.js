// Create the base layers.
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create the map, giving it the streetmap layer to display on load.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 0.5,
    layers: [streetmap],
});

// Accessing the JSON data
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Function to determine marker radius based on magnitude
function getRadius(magnitude) {
    return magnitude * 5;
}

// Function to create a marker color based on depth
function colorMarker(depth) {
    if (depth > 90) {
        return "#FF7F50";
    } else if (depth > 70) {
        return "#FF8C00";
    } else if (depth > 50) {
        return "#FFA500";
    } else if (depth > 30) {
        return "#FFD700";
    } else if (depth > 10) {
        return "#ADFF2F";
    } else if (depth > -10) {
        return "#7CFC00";
    } else {
        return "#7CFC00";
    }
}

// Importing and reading the JSON file
d3.json(url).then(function (earthquakedata) {
    console.log(earthquakedata);

    // Create a GeoJSON layer to plot earthquakes on the map
    L.geoJson(earthquakedata, {
        pointToLayer: function (feature, coordinates) {
            return L.circleMarker(coordinates, {
                color: "black",
                opacity: 0.3,
                fillColor: colorMarker(feature.geometry.coordinates[2]),
                fillOpacity: 0.5,
                weight: 1,
                radius: getRadius(feature.properties.mag),
            });
        },
        onEachFeature: function (feature, layer) {
            // Including popups that provide additional information about the earthquake when its associated marker is clicked
            layer.bindPopup(`
            <strong>Location:</strong> ${feature.properties.place}<br>
            <strong>Magnitude:</strong> ${feature.properties.mag}<br>
            <strong>Depth:</strong> ${feature.geometry.coordinates[2]} km<br>
            <strong>Date & Time:</strong> ${new Date(feature.properties.time)}
            `);
        },
    }).addTo(myMap);

    // Create a legend control
    let legend = L.control({ position: "bottomright" });

    legend.onAdd = function (streetmap) {
        let div = L.DomUtil.create("div", "info legend");
        let grades = [-10, 10, 30, 50, 70, 90];
        let labels = ["-10-10", "10-30", "30-50", "50-70", "70-90", "90+"];

        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background-color:' + colorMarker(grades[i] + 1) + '"></i> ' +
                labels[i] + '<br>';
        }
        return div;
    };

    legend.addTo(myMap);
});
