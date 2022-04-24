const API_KEY = "74a69d53a41542e5e164ad23ed631356"

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const location = document.querySelector(".location .location__location");
    const weather = document.querySelector(".location .location__weather");
    const temp = document.querySelector(".location .location__temp");
    location.innerText = `위치: ${data.name}.`
    weather.innerText = `날씨: ${data.weather[0].main}`;
    temp.innerText = `기온: ${data.main.temp}°`;
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);