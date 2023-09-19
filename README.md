# Earthquake Data Visualization with Leaflet

## Background

I have taken on a significant project involving earthquake data visualization. The United States Geological Survey (USGS) is at the forefront of gathering and providing data on natural hazards, environmental health, and climate change impacts. They are seeking effective ways to present their vast collection of earthquake data to educate the public and government organizations. This project aims to develop a compelling earthquake data visualization tool.

## Project Overview

In this project, I have successfully created an interactive earthquake visualization using the Leaflet JavaScript library. This visualization allows users, including journalists and researchers, to explore earthquake data from around the world. It provides valuable insights into earthquake frequency, magnitude, and depth.

## Creating the Earthquake Visualization

### Dataset Selection

To kickstart the project, I retrieved earthquake data from the USGS GeoJSON Feed, which is updated every five minutes. This feed offers various datasets, such as "All Earthquakes from the Past 7 Days," giving users the flexibility to visualize recent earthquake data.

### Data Import and Visualization

Here's how I imported and effectively visualized the earthquake data:

1. I used the URL of the chosen JSON dataset to fetch earthquake data for visualization.

2. Leveraging the powerful Leaflet library, I created an interactive map that accurately plots earthquake locations based on their latitude and longitude coordinates.

3. I ensured that data markers on the map change in size to represent earthquake magnitude, with larger markers indicating higher-magnitude earthquakes.

4. To visualize earthquake depth, I incorporated a color gradient for data markers. Darker colors represent earthquakes at greater depths, using information from the third coordinate of each earthquake data point.

5. For a comprehensive user experience, I included pop-up markers that provide detailed information about each earthquake when clicked.

6. To provide context for the data, I added a legend to the map.

![image](https://github.com/mehpree/leaflet-challenge/assets/131678606/03e7b5db-9b0c-4bd6-8bce-0cbf5790c7ee)

## Conclusion

This project showcases my ability to create captivating and informative data visualizations using Leaflet and JavaScript. The earthquake visualization tool empowers users to explore earthquake data interactively, making it a valuable resource for educating the public and government organizations about Earth's seismic activity and its implications.

### References

Dataset created by the [United States Geological Survey](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).
