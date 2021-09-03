const area = document.getElementById("area");
const desc = document.getElementById("desc");
const API_KEY = "4b5774e9f3d2a07b84f0f2f88e486224";

async function getWeather () {
  const city = area.value;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const weather = await res.json();
  const descValue = weather['weather'][0]['description'];
  desc.innerHTML = descValue;
}

addEventListener("load", getWeather);
document.addEventListener("change", getWeather);
