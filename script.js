const searchbar = document.getElementById('searchbar');
const cityInput = document.getElementById('cityInput');
const weathericon = document.getElementById('weathericon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const cityname = document.getElementById('cityname');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');

 searchbar.addEventListener('submit', async (event) => {
     event.preventDefault();
     const city = cityInput.value.trim();
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     const response = await fetch(url);
     const data = await response.json();
     temperature.textContent = `${data.main.temp} °C`;
     cityname.textContent = data.name;
     humidity.textContent = `Humidity: ${data.main.humidity}%`;
     windspeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
     description.textContent = data.weather[0].description;
     weathericon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    
    
 });
const API_KEY = "92d48471a8fbd0c2129343bcd240b491";
