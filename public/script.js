document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        getWeatherData(city);
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
            console.log(data); // Log data for debugging purposes
            if (data) {
                document.getElementById('cityName').innerText = data.location.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c} °C`;
                document.getElementById('description').innerText = `Description: ${data.current.condition.text}`;
                document.getElementById('windSpeed').innerText = `Wind Speed: ${data.current.wind_kph} kph`;
                document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
            } else {
                document.getElementById('cityName').innerText = '';
                document.getElementById('temperature').innerText = '';
                document.getElementById('description').innerText = '';
                document.getElementById('windSpeed').innerText = '';
                document.getElementById('humidity').innerText = '';
                alert(`City not found!`);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error); // Log error for debugging purposes
            document.getElementById('cityName').innerText = '';
            document.getElementById('temperature').innerText = '';
            document.getElementById('description').innerText = '';
            document.getElementById('windSpeed').innerText = '';
            document.getElementById('humidity').innerText = '';
            alert(`Error fetching weather data: ${error.message}`);
        });
}
