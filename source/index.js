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
  console.log(response.data.condition.icon_url);
  let temperature = Math.round(response.data.temperature.current);
  let id = document.querySelector("#number");
  id.innerHTML = `${temperature}`;
  let weather = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind-wind");
  wind.innerHTML = `Wind:${weather} Km/h`;
  let humidity = document.querySelector("#wind-humidity");
  humidity.innerHTML = `Humidity:${response.data.temperature.humidity}`;
  let description = document.querySelector("#description-weather");
  description.innerHTML = `${response.data.condition.description}`;
  let icon = document.querySelector("#icon");
  icon.setAttribute =
    ("src",
    `http://shecodes-assets.s3.amazonaws.com/api/${response.data.condition.icon_url}few-clouds-day.png`);
}
let city = document.querySelector("#country-weather");
city.innerHTML = `${city.value}`;
let apiKey = "308ee4b586fftbc5ce47ob29fd3f7a87";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=sydney&key=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

let place = document.querySelector("#form-search");
place.addEventListener("submit", search);
