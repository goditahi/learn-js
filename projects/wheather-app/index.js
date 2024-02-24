const API_key = "f53f917a8a58dd893be0ce33f0ea965c";
const button = document.querySelector("button");
const result = document.querySelector("#result");

async function getWheather(API_key, city) {
  try {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    const response = await fetch(api);
    const data = await response.json();
    let temInKel = data.main.temp;
    let tempInCel = (temInKel - 273.15).toFixed(2);
    result.textContent = `The ${city} temperature is ${tempInCel} Celsius`;
  } catch (error) {
    result.textContent = `Enter a valid city Not Found`;
  }
}

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = document.querySelector("#inputField");
  getWheather(API_key, city.value);
  setTimeout(form.reset(),2000)
  console.log(city);
  
});
