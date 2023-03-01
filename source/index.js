//date
let city = document.querySelector("#unit-date");
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
let hours = date.getHours();
let min = date.getMinutes();

console.log(date);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());

city.innerHTML = `${day}, ${hours}:${min}`;

//search engine

function displayTemperature(response) {
  console.log(response);
  console.log(response.data.temperature.current);
  console.log(response.data.temperature.humidity);
  console.log(response.data.wind.speed);
  console.log(response.data.condition.description);
  console.log(response.data.condition.icon);

  celsiusTemperature = response.data.temperature.current;

  let id = document.querySelector("#number");
  id.innerHTML = Math.round(celsiusTemperature);
  let weather = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind-wind");
  wind.innerHTML = `Wind: ${weather}Km/h`;
  let humidity = document.querySelector("#wind-humidity");
  humidity.innerHTML = `Humidity: ${response.data.temperature.humidity}`;
  let description = document.querySelector("#description-weather");
  description.innerHTML = `${response.data.condition.description}`;
  let iconElement = document.querySelector("#icon-app");
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
}

function search(city) {
  let apiKey = "308ee4b586fftbc5ce47ob29fd3f7a87";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=308ee4b586fftbc5ce47ob29fd3f7a87&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function placeHome(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
  let heading = document.querySelector("#city-name");
  heading.innerHTML = `${cityInput.value}`;
}
let form = document.querySelector("#form-search");
form.addEventListener("submit", placeHome);

function currentTemperature(event) {
  event.preventDefault();
  let current = (celsiusTemperature * 9) / 5 + 32;
  let temperature = document.querySelector("#number");
  temperature.innerHTML = Math.round(current);
}
let celsiusTemperature = "null";
let fahrenheit = document.querySelector("#degree-fahrenheit");
fahrenheit.addEventListener("click", currentTemperature);

function currentCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#number");
  temp.innerHTML = Math.round(celsiusTemperature);
}

let celsius = document.querySelector("#degree-celsius");
celsius.addEventListener("click", currentCelsius);
