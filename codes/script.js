const apiKey = "e4f400fa77893d3da12d37db082feee3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const body = document.querySelector(".body");
const audio = document.querySelector("audio");
const audioButton = document.querySelector(".audio-button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "/imgs/clouds.png";
    body.style.backgroundImage =
      "url('/imgs/clody.jpg')";
    audio.src = "/audio/clouds.mp3"

  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "/imgs/clear.png";
    body.style.backgroundImage =
      "url('/imgs/clear.png')";
      audio.src = "/audio/clear.mp3"
      
     } else if (data.weather[0].main == "Rain") {
    weathericon.src = "/imgs/rain.png";
    body.style.backgroundImage =
      "url('/imgs/heavyrain.jpg')";
    audio.src = "/audio/heavyrain.mp3"  

  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "/imgs/drizzle.png";
    body.style.backgroundImage =
      "url('/imgs/drizzle.jpg')";
    audio.src="/audio/rain"  
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "/imgs/mist.png";
    body.style.backgroundImage =
      "url('/imgs/mistimg.jpg')";
    audio.src = "/audio/howling.mp3"  
  }

  document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
  checkWeather(search.value);
});

audioButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioButton.innerHTML = '<img src="/imgs/mute.png" alt="Mute">';
  } else {
    audio.pause();
    audioButton.innerHTML = '<img src="/imgs/speaker.png" alt="Unmute">';
  }
});
