import { elements, setDate, convertUnix } from "./base";

export const renderWeather = (weather, symbol, isSaved) => {
    const html = `
    <div class="container-results-date">
                <div class='container-results-date__date'>
   
                    <h4>${setDate(weather.timezone)}</h4>
                    <h4>${weather.name}</h4>
                </div>
                <div class="container-results-date__favourite">
                    <button id="favBtn" class=${
                      isSaved
                        ? "container-results-date__favourite--btn--selected"
                        : "container-results-date__favourite--btn"
                    }>fav</button>
                </div>
            </div>

            <div class="container-results-content">
                 <h2 class="container-results-content--temperature">${Math.round(
                   weather.main.temp
                 )}<span class="container-results-content--metric"><sup>&deg;${symbol}</sup></span></h2>
                <h3 class="container-results-content--description">${setDescription(
                  weather.weather[0].icon,
                  weather.main.temp,
                  symbol
                )}</h3> 
            </div>
            <div class="container-results-summary">
                 <h5 class="container-results-summary--heading">Details</h5>
                <div class="container-results-summary--flex">
                    <div class="container-results-summary--key">
                        <h6>Pressure</h6>
                        <h6>Wind</h6>
                        <h6>Humidity</h6>
                    </div>
                    <div class="container-results-summary--value">
                        <h6>${weather.main.pressure}hPa</h6>
                        <h6>${getDirection(weather.wind.deg)} ${
    weather.wind.speed
  } met/sec</h6>
                        <h6>${weather.main.humidity}%</h6>
                    </div>
                </div> 
            </div>    
    `;

    elements.weatherDetails.insertAdjacentHTML("beforeend", html);
};

export const renderImage = (weather) => {
    const code = weather.weather[0].icon;
    let condition = "";
    // conditions: cloud, rain, snow, storm, sun, wind
    // 1. Map weather icon # to a condition
    const weatherConditions = [
        "sun",
        "hidden",
        "rain",
        "storm",
        "cloud",
        "snow",
        "wind",
        "sun",
    ];

    if (code === "01n" || code === "01d") {
        condition = weatherConditions[0];
    } else if (code === "02d" || code === "02n") {
        condition = weatherConditions[1];
    } else if (
        code === "03d" ||
        code === "03n" ||
        code === "04d" ||
        code === "04n"
    ) {
        condition = weatherConditions[4];
    } else if (code === "09d" || code === "09n") {
        condition = weatherConditions[1];
    } else if (code === "10d" || code === "10n") {
        condition = weatherConditions[2];
    } else if (code === "11d" || code === "11n") {
        condition = weatherConditions[3];
    } else if (code === "13d" || code === "13n") {
        condition = weatherConditions[5];
    } else {
        condition = weatherConditions[4];
    }

    const imageEl = elements.weatherImage.src;
    const src = `img/icons/${condition}.svg`;

    elements.weatherImage.src = src;
};

const getDirection = (angle) => {
    const arrows = {
        north: "↑ N",
        north_east: "↗ NE",
        east: "→ E",
        south_east: "↘ SE",
        south: "↓ S",
        south_west: "↙ SW",
        west: "← W",
        north_west: "↖ NW",
    };

    const directions = Object.keys(arrows);
    const symbols = Object.values(arrows);

    const degree = 360 / directions.length;

    angle = Math.floor(angle / degree);

    if (angle >= 45) {
        return `${(directions[0], symbols[0])}`;
    }
    return `${(directions[angle], symbols[angle])}`;
};

const setDescription = (imgCode, temp, symbol) => {
    // sun, cold, rain, storm, cloud, snow, wind
    const code = imgCode;

    const weatherQuotes = [
        "suns out",
        "it's a bit nippy",
        "rain rain rain",
        "someone's stormy",
        "tad cloudy",
        "snow snow snow",
        "hold on tight",
        "its hot hot hot",
        "suns hiding",
    ];

    if ((symbol == "C" && temp > 28) || (symbol == "F" && temp > 82.4)) {
        return weatherQuotes[7];
    }
    if ((symbol == "C" && temp < 5) || (symbol == "F" && temp < 41)) {
        return weatherQuote[1];
    }

    if (code === "01n" || code === "01d") {
        return weatherQuotes[0];
    } else if (code === "02d" || code === "02n") {
        return weatherQuotes[8];
    } else if (
        code === "03d" ||
        code === "03n" ||
        code === "04d" ||
        code === "04n"
    ) {
        return weatherQuotes[4];
    } else if (code === "09d" || code === "09n") {
        return weatherQuotes[1];
    } else if (code === "10d" || code === "10n") {
        return weatherQuotes[2];
    } else if (code === "11d" || code === "11n") {
        return weatherQuotes[3];
    } else if (code === "13d" || code === "13n") {
        return weatherQuotes[5];
    } else {
        return weatherQuotes[4];
    }
};