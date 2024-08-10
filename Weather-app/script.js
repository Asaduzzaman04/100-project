const apiKey = "f6000037347d2ecde5831dc184f4a03d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const fetching = async (city) =>{
    const res = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`)
    const rej = await res.json();
    console.log(rej);
// =====>city-temp-wind-speed<===== \\
    const temp = document.getElementById("temp"); //temp
    temp.innerText= Math.round(rej.main.temp) + "°c"
    const town = document.getElementById("city"); //city
    town.innerText = rej.name;
    const humidityPer = document.getElementById("humidityPer");//humidity
    humidityPer.innerText = rej.main.humidity + "%"
    const windSpeed = document.getElementById("windSpeed");//windSpeed
    windSpeed.innerText = Math.round(rej.wind.speed) + "kw/h"
    // =====>weather-image<===== \\
    const weatherImg = document.getElementById("img");
     if(rej.weather[0].main == "clear"){

        weatherImg.src = "./images/clear.png"

    }else if(rej.weather[0].main == "clouds"){

        weatherImg.src = "./images/clouds.png"

    }else if(rej.weather[0].main == "drizzle"){

        weatherImg.src = "./images/drizzle.png"

    }else if(rej.weather[0].main == "mist") {

        weatherImg.src  = "./images/mist.png"

    }else if(rej.weather[0].main == "haze") {

        weatherImg.src = "./images/rain.png"
    }else if(rej.weather[0].main == "snow"){
        weatherImg.src = "./images/snow.png"
    }
}

const searchVal = document.getElementById("search")
const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener("click",()=>{
    fetching(searchVal.value)
})