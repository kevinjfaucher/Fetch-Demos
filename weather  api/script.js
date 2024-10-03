document.getElementById('fetchWeather').addEventListener('click', function() {
    const zipCode = document.getElementById('zipCode').value;
    const apiKey = 'cf02e9720da4292e36eeebf7db28ec04';  // Replace with your OpenWeather API key

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                Location: ${data.name}<br>
                Temperature: ${data.main.temp} °F<br>
                Weather: ${data.weather[0].description}
            `;
            document.getElementById('weatherResult').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherResult').textContent = 'Error fetching data. Please try again.';
            console.log(error);
        });
});

// https://docs.openweather.co.uk/current#zip
