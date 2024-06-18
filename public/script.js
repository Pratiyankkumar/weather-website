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
    const apiKey = 'dddaaa18ca78461fb1d141336241806'; 
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => { 
            if (data.cod === 200) { 
                document.getElementById('cityName').innerText = data.location.name;
                document.getElementById('temperature').innerText = `Temprature: ${data.current.temp_c} °C`;
                if (data.main.temp<=15) {
                    document.querySelector('.js-image-container')
                        .innerHTML = `<img id="weather-image" class="md:size-96 size-60" src="amcharts_weather_icons_1.0.0/animated/snowy-5.svg" alt=""></img>`
                } else if (data.main.temp>15 && data.main.temp<=30) {
                    document.querySelector('.js-image-container')
                        .innerHTML = `<img id="weather-image" class="md:size-96 size-60" src="amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg" alt=""></img>`
                };
                document.getElementById('description').innerText = `Description: ${data.current.condition.text}`;
                document.getElementById('windSpeed').innerText = `Wind Speed: ${data.current.wind_kph} km/h`;
                document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
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
    document.getElementById('js-result')
        .innerHTML = `
        <div class="js-image-container">
        <img id="weather-image" class="md:size-96 size-60" src="amcharts_weather_icons_1.0.0/animated/day.svg" alt=""></img>
      </div>
      <div class="flex flex-col text-white text-center">
        <p class="md:text-5xl text-xl" id="temperature"></p>
        <p id="cityName" class="md:text-xl mt-2"></p>
        <p id="description" class="md:text-xl mt-2"></p>
        <p id="windSpeed" class="md:text-xl mt-2"></p>
        <p id="humidity" class="md:text-xl mt-2">
        </p>
      </div>`
}