document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        getWeatherData(city);
        showResult();
    } else {
        alert('Please enter a city name.');
    }
});

function getWeatherData(city) {
    const apiKey = '51f65a56e671ae79fb3dfbdc24a168d6'; // Your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => { 
            if (data.cod === 200) { 
                document.getElementById('cityName').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
                document.getElementById('windSpeed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            } else {
                document.getElementById('cityName').innerText = '';
                document.getElementById('temperature').innerText = '';
                document.getElementById('description').innerText = '';
                document.getElementById('windSpeed').innerText = '';
                document.getElementById('humidity').innerText = '';
                alert(`City not found! Error: ${data.message}`);
            }
        })
        .catch(error => {
            document.getElementById('cityName').innerText = '';
            document.getElementById('temperature').innerText = '';
            document.getElementById('description').innerText = '';
            document.getElementById('windSpeed').innerText = '';
            document.getElementById('humidity').innerText = '';
            alert(`Error fetching weather data: ${error.message}`);
        });
}

function showResult() {
    // document.getElementById('js-result')
    //     .innerHTML = 
}