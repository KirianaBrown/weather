// MODEL IMPORTS
import Search from "./models/Search";
import Weather from "./models/Weather";
import Saved from "./models/Saved";
import Current from "./models/Current";
import Forecast from "./models/Forecast";
import { calcTimeOfDay } from "./models/DayOfNight";

// VIEW IMPORTS
import {
    elements,
    renderLoader,
    clearLoader,
    renderErrorMessage,
    clearErrorMessage,
} from "./views/base";
import * as searchView from "./views/searchView";
import * as weatherView from "./views/weatherView";
import * as savedView from "./views/savedView";
import * as forecastView from "./views/forecastView";
import * as unitView from "./views/unitView";
import * as dayOfNightView from "./views/dayOrNightView";

// IMPORT STYLESHEETS
import "../sass/main.scss";

// STATE
/*
    1. Search Object
    2. Current Weather Object
    3. Forecast Weather Object
    4. Saved Location Object
    5. Units / symbol
*/

/*
on c/f change need to update local storage and then read the local storage to update the unit to be selected. 
*/

const state = {
    unit: "metric", // imperial
    symbol: "C", // F
};

const weatherController = async(query) => {
    searchView.clearError();
    searchView.clearUI();
    searchView.clearForecast();
    if (!query) {
        if (state.weather) {
            searchView.clearError();
            searchView.clearUI();
            searchView.clearForecast();
        }
        renderErrorMessage();
    } else {
        state.weather = new Weather(query, state.unit);
        // 2. Prepare the UI
        searchView.clearUI();
        searchView.clearInput();
        searchView.clearError();
        searchView.clearForecast();
        // 3. Render loader
        renderLoader();
        // 3. Call the getResults method
        try {
            await state.weather.getWeather();
            clearLoader();
            weatherView.renderWeather(
                state.weather.results,
                state.symbol,
                state.saved.isSaved(state.weather.id)
            );
            weatherView.renderImage(state.weather.results);
            dayOrNightController();
            forecastController(state.weather.results.name, state.unit);
        } catch (err) {
            clearLoader();
            renderErrorMessage();
        }
    }
};

const forecastController = async(location) => {
    state.forecast = new Forecast(location, state.unit);
    try {
        await state.forecast.getForecast();
        state.forecast.forecastWeather.forEach((el) =>
            forecastView.renderForecast(el, state.symbol)
        );
    } catch (err) {
        clearLoader();
        renderErrorMessage();
    }
};

const currentController = async(lat, lon) => {
    if (!lat && !lon) {} else {
        state.current = new Current(lat, lon);
        try {
            await state.current.getCurrentLocation();
            weatherController(state.current.location);
        } catch (err) {
            console.log(`Error with current ${err}`);
        }
    }
};

const savedController = () => {
    const currentId = state.weather.id;

    if (!state.saved.isSaved(currentId)) {
        // 1. Create new item
        const newSavedItem = state.saved.addSaved(
            currentId,
            state.weather.results.name,
            state.weather.results.main.temp
        );
        // 2. Toggle saved button
        savedView.toggleSavedButton(true);
        // 3. Render to List
        savedView.renderItem(newSavedItem);
    } else {
        savedView.toggleSavedButton(false);
        savedView.deleteItem(currentId);
        state.saved.deleteSaved(currentId);
    }
};

const dayOrNightController = () => {
    // 1. get T/F
    const dayTime = calcTimeOfDay(state.weather.results);
    dayOfNightView.renderDayOrNight(dayTime);
};

// Event Listeners
elements.searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let query = searchView.getInput();
    weatherController(query);
});

// Handling non-rendered events (FAV & CLEAR ERROR)
elements.weatherDetails.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        e.target.matches(".container-results-date__favourite--btn") ||
        e.target.matches(".container-results-date__favourite--btn--selected")
    ) {
        savedController();
    }
});

elements.savedContainer.addEventListener("click", (e) => {
    if (e.target.closest(".saved__item")) {
        const location = e.target.dataset.itemlocation;

        if (location) {
            weatherController(location);
        }
    }
});

elements.celsiusBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (state.unit === "imperial" && state.weather === undefined) {
        state.unit = "metric";
        state.symbol = "C";
        unitView.celsiusHandler(e, state);
        unitView.updateUnitsLocalStorage(state.unit, state.symbol);
        if (state.saved) {
            console.log("render from storage");
            state.saved.saved.forEach((el) => {
                savedView.deleteItem(el.id);
                el.temp = unitView.convertToCelsius(el.temp);
                state.saved.updateSaved(el.id);
                savedView.renderItem(el);
            });
        }
    }
    if (state.unit === "imperial" && state.weather !== undefined) {
        unitView.celsiusHandler(e, state);
        weatherController(state.weather.query);
        if (state.saved) {
            state.saved.saved.forEach((el) => {
                savedView.deleteItem(el.id);
                el.temp = unitView.convertToCelsius(el.temp);
                state.saved.updateSaved(el.id);
                savedView.renderItem(el);
            });
        }
    }
});

elements.farenheitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (state.unit === "metric" && state.weather === undefined) {
        state.unit = "imperial";
        state.symbol = "F";
        unitView.farenheitHandler(e, state);
        unitView.updateUnitsLocalStorage(state.unit, state.symbol);
        if (state.saved) {
            state.saved.saved.forEach((el) => {
                savedView.deleteItem(el.id);
                el.temp = unitView.convertToFarenheit(el.temp);
                state.saved.updateSaved(el.id);
                savedView.renderItem(el);
            });
        }
    }

    if (state.unit === "metric" && state.weather !== undefined) {
        unitView.farenheitHandler(e, state);
        weatherController(state.weather.query);
        if (state.saved) {
            state.saved.saved.forEach((el) => {
                savedView.deleteItem(el.id);
                el.temp = unitView.convertToFarenheit(el.temp);
                state.saved.updateSaved(el.id);
                savedView.renderItem(el);
            });
        }
    }
});

elements.errorMessage.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("error__btn")) {
        clearErrorMessage();
    }
});

window.addEventListener("load", () => {
    state.saved = new Saved();
    state.saved.readStorage();

    console.log(state.saved.saved);

    // READ unit from storage
    state.unit = unitView.readUnitsStorage();
    state.symbol = unitView.readSymbolStorage();

    console.log(`unit: ${state.unit} symbol: ${state.symbol}`);

    unitView.setActiveState(state.unit, state.symbol);

    // set selected based on state storage

    state.saved.saved.forEach((el) => {
        savedView.renderItem(el);
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat, lon;
            [lat, lon] = [position.coords.latitude, position.coords.longitude];
            currentController(lat, lon);
        });
    }
});