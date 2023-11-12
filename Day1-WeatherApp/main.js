const apiKey = "256d58138874a4134351e06c1bd07a04";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    let data = await response.json();

    //console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
    weatherIcon.src = `images/${(data.weather[0].main).toLowerCase()}.png`

    document.querySelector(".weather").style.display = 'block';
    document.querySelector(".error").style.display = "none";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
