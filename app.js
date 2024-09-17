// API key and base URL for OpenWeatherMap API
const apiKey = '04d0f5c9fc4ef312c2ddbbc568ae929b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temp');
const cityElement = document.querySelector('.city');
const humidityElement = document.querySelector('.Humidity');
const windElement = document.querySelector('.Wind');

// Function to fetch weather data from the API
async function getWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found!');
      return;
    }

    // Update the weather details in the UI
    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
    cityElement.textContent = data.name;
    humidityElement.textContent = `${data.main.humidity}%`;
    windElement.textContent = `${data.wind.speed} kmph`;

    // Set appropriate weather icon based on weather condition
    const weatherCondition = data.weather[0].main.toLowerCase(); // Get weather condition in lowercase

    switch (weatherCondition) {
      case 'clouds':
        weatherIcon.src = 'images/clouds.png';
        break;
      case 'rain':
        weatherIcon.src = 'images/rain.png';
        break;
      case 'clear':
        weatherIcon.src = 'images/clear.png';
        break;
      case 'drizzle':
        weatherIcon.src = 'images/drizzle.png';
        break;
      case 'mist':
        weatherIcon.src = 'images/mist.png';
        break;
      case 'snow':
        weatherIcon.src = 'images/snow.png';
        break;
      case 'thunderstorm':
        weatherIcon.src = 'images/thunderstorm.png';
        break;
      default:
        weatherIcon.src = 'images/default.png'; // Fallback icon for unknown conditions
        break;
    }
  } catch (error) {
    alert('Error fetching weather data. Please try again later.');
    console.error('Error:', error);
  }
}

// Add event listener to search button
searchButton.addEventListener('click', () => {
  const city = searchInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

// Trigger search on Enter key press
searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchButton.click();
  }
});
