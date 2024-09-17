# My Weather App - README

## Overview
This project is a simple **Weather App** that allows users to search for weather information by city name. It fetches real-time weather data using the **OpenWeatherMap API** and displays details such as temperature, city name, humidity, wind speed, and weather conditions (with icons).

## Features
- Search for the weather in any city.
- Displays the temperature in Celsius, humidity percentage, wind speed in km/h, and weather condition.
- Dynamic weather icons based on current weather conditions (e.g., rain, clouds, clear sky).
- Input validation for empty search.
- Alerts the user if the city is not found.
- Responsive and mobile-friendly design.

## Technologies Used
- HTML, CSS for the front-end structure and styling.
- JavaScript for functionality and API integration.
- OpenWeatherMap API for fetching real-time weather data.

## How to Use
1. Clone the repository or download the files.
2. Open the `index.html` file in your browser.
3. Enter the name of a city in the search bar and press the "search" button.
4. The weather details for the entered city will be displayed.

### API Integration
The weather data is fetched from OpenWeatherMap API using the city name. The app sends a request to the following URL:

https://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&appid={API_KEY}

The returned data includes temperature, humidity, wind speed, and a weather condition that is used to display appropriate icons.

## Code Breakdown

### HTML Structure
The HTML file (`index.html`) contains the main layout of the app:
- A search bar for entering city names.
- A button to trigger the weather search.
- A card that displays weather information (temperature, city, humidity, wind speed, and an icon).

### CSS Styling
The `style.css` file includes:
- Centering the card in the viewport with a gradient background.
- Styling for search input, buttons, and weather details.
- Icons for weather conditions, which are displayed based on the API response.

### JavaScript Functionality
The `app.js` file includes:
- Fetching weather data from **OpenWeatherMap API**.
- Displaying the fetched data (temperature, humidity, wind speed, etc.) on the screen.
- Updating weather icons dynamically based on the fetched weather condition.
- Input validation and error handling (e.g., displaying an alert if the city is not found).

## Weather Icons
The app uses a set of pre-defined icons for various weather conditions such as rain, clouds, clear sky, snow, etc. These icons are stored in the `images` folder and are dynamically updated based on the weather data received from the API.

## Project Demo
To see the project in action, check out the **demo video on my LinkedIn** https://www.linkedin.com/in/deepak-patil-23772b252/.