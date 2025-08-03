const apiKey = "f57d8dddae9b0e5668d7487f55a64230";

document.getElementById('searchBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
    fetch(url).then(response => {
        if (!response.ok) throw new Error("City not found");
        return response.json();
    }).then(data => {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>${data.weather[0].main} - ${data.weather[0].description}</p>
    <p>Temperature: ${data.main.temp}°C</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon" />
    `;
    }).catch(error => {
        document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
    });
}